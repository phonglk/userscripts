import { addExternalStyle } from 'common/util';
import forumStructure from './forumStructure';
import addGoBack from './goBack';
import $ from 'cash-dom';
import * as communicate from 'common/communicate';
import navBar from './navBar';
import { hookKeys } from './hookKeys.js';

import './style.less';

communicate.set('next-navigation', true);

$(() => {
  hookKeys();
  forumStructure();
  addExternalStyle('https://unpkg.com/microtip/microtip.css');
  addGoBack();
  navBar();
});



