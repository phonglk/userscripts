import { render, h } from 'preact';
import SetList from './SetList';
import StickerPanel from './StickerPanel';
import $ from 'cash-dom';
const CONTAINER_ID = 'ns';
const BEFORE_SELECTOR = $('.js-previewContainer').length
  ? '.js-previewContainer'
  : '.message-editorWrapper .formButtonGroup';

import './style.less';

export function app() {
  const dom = getDom();
  if (!dom) return;
  render(<Sticker />, dom);
}

function getDom() {
  if ($(BEFORE_SELECTOR).length === 0) return;
  let ele = $(`#${CONTAINER_ID}`);
  if (ele.length > 0) return ele[0];
  ele = $(`<div id="${CONTAINER_ID}"></div>`);
  ele.insertBefore(BEFORE_SELECTOR);
  return ele[0];
}

function Sticker() {
  return <div>
    <StickerPanel />
    <SetList />
  </div>;
}
