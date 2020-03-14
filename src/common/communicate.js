import $ from 'cash-dom';

const CONTAINER_ID = 'next-userscripts';

function getContainer() {
  let $container = $(`#${CONTAINER_ID}`);
  if ($container.length > 1) return $container;
  $container = $(`<div id='${CONTAINER_ID}' style="display: none" />`);
  $(document.body).append($container);
  return $container;
}

export function set(name, val) {
  const $cont = getContainer();
  let $data = $cont.find(`div[data-name=${name}]`);
  if ($data.length === 0) {
    $data = $(`<div data-id="${name}" />`);
    $cont.append($data);
  }
  $data.attr('data-value', JSON.stringify(val));
}

export function get(name, defVal) {
  const $cont = getContainer();
  let $data = $cont.find(`div[data-name=${name}]`);
  if ($data.length === 0) return defVal;
  return JSON.parse($data.attr('data-value') || '');
}
