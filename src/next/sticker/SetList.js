import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import * as store from 'common/store';

export const STICKER_SET_LIST_KEY = 'sticker_set_list';
export const SELECTED_SS_KEY = 'selected_sticker_set';

export default function SetList() {
  const [stickerSets, setStickerSets] = useState(
    store.get(STICKER_SET_LIST_KEY, [])
  );
  const [selectedSS, setSelectedSS] = useState(
    store.get(SELECTED_SS_KEY, null)
  );

  if (stickerSets && !stickerSets.some(x => x.url === 'defaultEmo')) {
    store.update(STICKER_SET_LIST_KEY, [], latest =>
      latest.concat({
        url: 'defaultEmo',
        name: 'popo Default',
      })
    );
  }

  const addStickerSet = () => {
    const { url, name } = addStickerPrompt();
    store.update(STICKER_SET_LIST_KEY, [], latest =>
      latest.concat({ url, name })
    );
    selectStickerSet(url);
  };

  const selectStickerSet = url => {
    setSelectedSS(url);
    store.set(SELECTED_SS_KEY, url);
  };

  useEffect(() => {
    store.onChange(STICKER_SET_LIST_KEY, setStickerSets);
    store.onChange(SELECTED_SS_KEY, (val, isRemote) => {
      if (!isRemote) setSelectedSS(val);
    });
  }, []);

  useEffect(() => {
    if (
      !stickerSets.find(({ url }) => url === selectedSS) &&
      stickerSets.length > 0
    )
      selectStickerSet(stickerSets[0].url);
  }, [stickerSets, selectedSS]);

  return (
    <div>
      <a
        className='button'
        href='https://next.voz.vn/threads/tap-hop-userscript-huu-dung-cho-next-sticker-navigation.854/#post-39483'
        target='_blank'
        aria-label='Sticker Collection'
        role='tooltip'
        data-microtip-position='bottom-left'
      >
        Stickers
      </a>
      <a
        className='btn-add button button--primary'
        onClick={addStickerSet}
        aria-label='Add Sticker by Imgur URL/ID'
        role='tooltip'
        data-microtip-position='bottom-left'
      >
        Add Sticker
      </a>
      <span className='ss-list'>
        {stickerSets.map(({ url, name }) => {
          const selClass =
            selectedSS === url ? 'button--primary' : 'button--link';
          return (
            <a
              className={`button btn-sticker ${selClass}`}
              onClick={() => selectStickerSet(url)}
            >
              {name}
            </a>
          );
        })}
      </span>
    </div>
  );
}

function addStickerPrompt() {
  let url = prompt('imgur album url or id', 'https://imgur.com/a/');
  if (!url.startsWith('http')) url = 'https://imgur.com/a/' + url;
  const albumId = url.match(/a\/([^ ]*)/)[1];
  const name = prompt('Sticker name', albumId);
  return { url, name };
}
