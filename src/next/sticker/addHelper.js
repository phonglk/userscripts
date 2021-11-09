import { STICKER_SET_LIST_KEY } from './SetList';
import * as store from 'common/store';
import notify from 'common/noti5';
import $ from 'cash-dom';

export function detectImgurAlbum() {
  const IMGURL_PREFIX = '://imgur.com/a/';
  const eles = $(`iframe[src*="${IMGURL_PREFIX}"]`).add(`a[href*="${IMGURL_PREFIX}"]`);
  eles.each((_, node) => {
    const url = node.src || node.href;
    if (node.parentElement.classList.contains('imgur-embed-pub')) {
      node = node.parentElement.parentElement;
    }
    const textNode = node.previousSibling;
    const text = textNode.textContent;
    if (text.length > 20) return;

    const addBtn = $(`<a class="button button--link">Add Sticker ${text}</a>`);
    $(textNode).replaceWith(addBtn);
    addBtn.on('click', () => {
      let name = text.trim();
      if (name.length === 0) name = prompt('What should be the name for this sticket set', url.match(/[^/]*$/));
      if (!name) {
        notify({ text: `The action is canceled`, title: 'Add Sticker', timeout: 4000 });
        return;
      }
      addStickerFromPage(url.trim(), name)
    });
  });
}
function addStickerFromPage(url, name) {
  store.update(STICKER_SET_LIST_KEY, [], list => list.concat({ name, url }));
  notify({ text: `Added ${name} from ${url}`, title: 'Add Sticker', timeout: 4000 });
}
