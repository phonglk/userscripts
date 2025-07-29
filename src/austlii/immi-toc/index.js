import { render, h } from 'preact';
import { Affix } from 'antd';
import TOC from './toc';
import $ from 'cash-dom';
const { getTOCStructure } = require('./tocStructure');

// Import Ant Design styles
import 'antd/dist/reset.css';
import './style.less';

const CONTAINER_ID = 'austlii-helper-toc'
const PARENT_ID = 'page-side'

// Check if we should run on this page
if (shouldRunOnThisPage()) {
  run();
}

export function run() {
  const dom = getDom();
  if (!dom) return;
  const tocStructure = getTOCStructure();
  console.log(tocStructure)
  render(
    <Affix 
      offsetTop={20} 
      style={{ 
        width: '100%',
        zIndex: 1000 // Ensure it stays above other content
      }}
    >
      <TOC structure={tocStructure} />
    </Affix>, 
    dom
  );
}

function shouldRunOnThisPage() {
  const currentUrl = window.location.href;
  const targetUrl = 'cgi-bin/viewdoc/au/legis/cth/consol_reg/mr1994227/sch2.html';
  
  return currentUrl.includes(targetUrl);
}

function getDom() {
  let ele = $(`#${CONTAINER_ID}`);
  if (ele.length > 0) return ele[0];
  ele = $(`<div id="${CONTAINER_ID}"></div>`);
  $(`#${PARENT_ID}`).append(ele);
  return ele[0];
}