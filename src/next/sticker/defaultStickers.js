import $ from 'cash-dom';

const DEFAULT_POPO_PREFIX = '/styles/next/xenforo/smilies/popopo/';
const DEFAULT_STICKERS = {
  'Default Popop': [
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
  ].map(file => `${DEFAULT_POPO_PREFIX}${file}`),
  'Vozer Popo': 'https://imgur.com/a/0sWVa',
  'Pepe': 'https://imgur.com/a/PyAepyl',
};

export function setDefaultStickers(store, LIST_KEY, GET_SET_KEY) {
  store.update(LIST_KEY, [], latest => {
    Object.keys(DEFAULT_STICKERS).reverse().forEach(name => {
      if (!latest.find(stickerSet => name === stickerSet.name)) {
        const url = DEFAULT_STICKERS[name];
        if (typeof url === 'string') {
          latest.unshift({ name , url});
        } else {
          latest.unshift({ name , url: name});
          store.set(GET_SET_KEY(name), url);
        }
      }
    });
    return latest;
  });
}

export function massageStickerOutput(img, url) {
  if (url.startsWith(DEFAULT_POPO_PREFIX)) {
    const fileName = url.split('/').slice(-1)[0];
    return $(
      `<img src="${url}" class="smilie fr-fic fr-dii" alt=":${fileName.substring(
        0,
        fileName.lastIndexOf('.')
      )}:"/>`
    )[0];
  }
  return img;
}
