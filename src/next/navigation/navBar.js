import $ from 'cash-dom';

export default function navBar() {
  const barHTML = `
  <div class="p-nav next-navigation">
    <div class="pageNavSimplePlaceHolder" />
  </div>
  `;
  const $bar = $(barHTML);
  $($bar).appendTo(document.body);
  $bar.find('div.pageNavSimplePlaceHolder').first().replaceWith($('.pageNavSimple').last());
};
