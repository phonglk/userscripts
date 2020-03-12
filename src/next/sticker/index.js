import { render, h } from 'preact';
import $ from 'cash-dom';
import './style.less';

import SetList from './SetList';
import StickerPanel from './StickerPanel';
import { detectImgurAlbum } from './addHelper';

const CONTAINER_ID = 'ns';
const BEFORE_SELECTOR = '.js-previewContainer';


export default function start() {
  const dom = getDom();
  if (!dom) return;
  render(<Sticker />, dom);
}

function getDom() {
  if ($(BEFORE_SELECTOR).length === 0) return;
  let ele = $(`#${CONTAINER_ID}`);
  if (ele.length > 0) return ele[0];
  ele = $(`<div id="${CONTAINER_ID}"></div>`);
  ele.insertBefore('.js-previewContainer');
  return ele[0];
}

function Sticker() {
  return <div>
    <StickerPanel />
    <SetList />
  </div>;
}

start();
detectImgurAlbum();
