
export function addExternalStyle(src) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  style = document.createElement('link');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.href= src;
  head.appendChild(style);
}

export const observeDOM = (targetNode,
  userConfig,
  callback ) => {
  const config = { attributes: false, childList: false, subtree: false, ...userConfig };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  return () => observer.disconnect();
};
