import $ from 'cash-dom';
import { addExternalStyle } from 'common/util';
import { hookKeys } from '../navigation/hookKeys';
import forumStructure from '../navigation/forumStructure';
import addGoBack from '../navigation/goBack';
import navBar from '../navigation/navBar';

import '../sticker/index.js';
import '../navigation/style.less';
$(() => {
  addExternalStyle('https://unpkg.com/microtip/microtip.css');
  // navigation
  hookKeys();
  forumStructure();
  addGoBack();
  navBar();
});
/** TODO
 * Bookmark threads
 * Upload image
 */
