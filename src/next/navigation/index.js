import { addExternalStyle } from 'common/util';
import forumStructure from './forumStructure';
import addGoBack from './goBack';
import $ from 'cash-dom';
import * as communicate from 'common/communicate';
import navBar from './navBar';

import './style.less';

communicate.set('next-navigation', true);

$(() => {
  onBoard();
  forumStructure();
  addExternalStyle('https://unpkg.com/microtip/microtip.css');
  addGoBack();
  navBar();
});

const ARROW_KEY = {
  RIGHT: 39,
  LEFT: 37,
  UP: 8,
};
const ANCHOR = {
  prev: () => $('.pageNavWrapper .pageNav-jump.pageNav-jump--prev'),
  next: () => $('.pageNavWrapper .pageNav-jump.pageNav-jump--next'),
  last: () => $('.pageNavWrapper .pageNav-page:last-child a'),
  first: () => $('.pageNavWrapper .pageNav-page:first-child a'),
  up: () => $('a[href="#top"]'),
};

const goto = {
  first: () => {
    go(ANCHOR.first());
  },
  last: () => {
    go(ANCHOR.last());
  },
  next: () => {
    go(ANCHOR.next());
  },
  prev: () => {
    go(ANCHOR.prev());
  },
  up: () => {
    go(ANCHOR.up());
  },
};

function go(anchor) {
  anchor[0].click();
}

$(document).on('keydown', e => {
  if (
    e.target.tagName == 'INPUT' ||
    e.target.tagName == 'TEXTAREA' ||
    e.target.matches('.message-editorWrapper *') ||
    e.target.matches('.message-cell.message-cell--main.is-editing * ')
  ) {
    return;
  }

  const { keyCode, ctrlKey, metaKey } = e;

  switch (keyCode) {
  case ARROW_KEY.LEFT: {
    if (ctrlKey || metaKey) goto.first();
    else goto.prev();
    e.preventDefault();
    break;
  }
  case ARROW_KEY.RIGHT: {
    if (ctrlKey || metaKey) goto.last();
    else goto.next();
    e.preventDefault();
    break;
  }
  case ARROW_KEY.UP: {
    if (ctrlKey || metaKey) {
      goto.up();
      e.preventDefault();
      break;
    }
  }
  }
});

function addTooltip($sel, text, options = {}) {
  $sel.attr({
    'data-microtip-position': 'up',
    ...options,
    'aria-label': text,
    role: 'tooltip',
  });
}

function onBoard() {
  addTooltip(ANCHOR.next(), 'Press -> to go to next page', {
    'data-microtip-position': 'right',
  });
  addTooltip(ANCHOR.prev(), 'Press <- to go to previous page', {
    'data-microtip-position': 'bottom-right',
  });
  addTooltip(ANCHOR.last(), 'Press Ctrl/Cmd + -> to go to last page', {
    'data-microtip-position': 'bottom-right',
  });
  addTooltip(ANCHOR.first(), 'Press Ctrl/Cmd + <- to go to first page', {
    'data-microtip-position': 'bottom-right',
  });
  addTooltip(ANCHOR.up(), 'Press Ctrl/Cmd + ⬆ to go to top', {
    'data-microtip-position': 'left',
  });
}
