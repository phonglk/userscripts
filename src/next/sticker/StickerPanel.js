import { h } from 'preact';
import $ from 'cash-dom';
import { useState, useEffect } from 'preact/hooks';
import * as store from 'common/store';
import { request } from 'common/request';

import { SELECTED_SS_KEY, STICKER_SET_LIST_KEY } from './SetList';

const candy = atob(process.env.CANDY);
const GET_SET_KEY = url => `sticker_set_${url}`;

export default function StickerPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [stickerList, setStickerList] = useState([]);
  const [selectedSS, setSelectedSS] = useState(
    store.get(SELECTED_SS_KEY, null)
  );

  useEffect(() => {
    store.onChange(SELECTED_SS_KEY, (url, isRemote) => {
      if (isRemote) return;
      setSelectedSS(url);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    loadSticker(selectedSS)
      .then(list => {
        setStickerList(list);
        setIsLoading(false);
      })
      .catch(() => {
        setStickerList([]);
        setIsLoading(false);
      });
  }, [selectedSS]);

  const onStickerClick = url => {
    insertStickerImg(url);
  };

  const stickerListDiv = (
    <div className='sticker-wrapper'>
      {stickerList.map(url => (
        <div
          key={url}
          className='sticker-img'
          onClick={() => onStickerClick(url)}
        >
          <img src={url} />
        </div>
      ))}
    </div>
  );

  const deleteStickerSet = async () => {
    store.del(GET_SET_KEY(selectedSS));
    store.update(STICKER_SET_LIST_KEY, [], list => {
      list.filter(({ url }) => url !== selectedSS);
    });
  };

  return (
    <div className='sticker-panel'>
      <div className='sticker-panel-toolbar'>
        <a
          className='button btn-delete'
          onClick={deleteStickerSet}
          aria-label='Delete current sticker set'
          role='tooltip'
          data-microtip-position='right'
        >
          Delete
        </a>
      </div>
      {isLoading && 'Loading sticker ...'}
      {!isLoading &&
        stickerList.length === 0 &&
        'Cannot load sticker set or empty'}
      {stickerList.length > 0 && stickerListDiv}
    </div>
  );
}

function insertStickerImg(url) {
  const sel = window.getSelection();
  let img = $(`<img src="${url}" />`)[0];
  if (!url.startsWith('http')) {
    const fileName = url.split('/').slice(-1)[0];
    img = $(
      `<img src="${url}" class="smilie fr-fic fr-dii" alt=":${fileName.substring(
        0,
        fileName.lastIndexOf('.')
      )}:"/>`
    )[0];
  }
  const target = $('div.fr-view[contenteditable=true] > *');
  const node =
    sel.anchorNode.nodeType === 3
      ? sel.anchorNode.parentElement
      : sel.anchorNode;
  if (
    sel.getRangeAt &&
    sel.rangeCount &&
    node.matches('div[contenteditable=true] *')
  ) {
    const range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(img);
    sel.modify('move', 'right', 'character');
  } else if (target.length > 0) {
    target.last()[0].appendChild(img);
  }
}

async function loadSticker(url) {
  let stickerList = store.get(GET_SET_KEY(url), null);
  if (stickerList === null) {
    if (url.toUpperCase() === 'defaultEmo'.toUpperCase()) {
      let EMO_DEFAULT_URLS = [
        'adore.png',
        'after_boom.png',
        'ah.png',
        'amazed.png',
        'angry.png',
        'bad_smelly.png',
        'baffle.png',
        'beat_brick.png',
        'beat_plaster.png',
        'beat_shot.png',
        'beated.png',
        'beauty.png',
        'big_smile.png',
        'boss.png',
        'burn_joss_stick.png',
        'byebye.png',
        'canny.png',
        'choler.png',
        'cold.png',
        'confident.png',
        'confuse.png',
        'cool.png',
        'cry.png',
        'doubt.png',
        'dribble.png',
        'embarrassed.png',
        'extreme_sexy_girl.png',
        'feel_good.png',
        'go.png',
        'haha.png',
        'hell_boy.png',
        'hungry.png',
        'look_down.png',
        'matrix.png',
        'misdoubt.png',
        'nosebleed.png',
        'oh.png',
        'ops.png',
        'pudency.png',
        'rap.png',
        'sad.png',
        'sexy_girl.png',
        'shame.png',
        'smile.png',
        'spiderman.png',
        'still_dreaming.png',
        'sure.png',
        'surrender.png',
        'sweat.png',
        'sweet_kiss.png',
        'tire.png',
        'too_sad.png',
        'waaaht.png',
        'what.png',
      ];
      EMO_DEFAULT_URLS = EMO_DEFAULT_URLS.map(
        x => (x = `/styles/next/xenforo/smilies/popopo/${x}`)
      );
      stickerList = EMO_DEFAULT_URLS;
      store.set(GET_SET_KEY(url), stickerList);
      return stickerList;
    } else {
      const id = url.match(/a\/([^ ]*)/)[1];
      stickerList = await loadImgurStickers(id);
    }
    store.set(GET_SET_KEY(url), stickerList);
  }
  return stickerList;
}

async function loadImgurStickers(id) {
  const resp = await request(`https://api.imgur.com/3/album/${id}/images`, {
    headers: {
      Authorization: `Client-ID ${candy}`,
      Accept: 'application/json',
    },
  });
  return resp.data.map(({ link }) => link);
}
