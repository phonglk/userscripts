import $ from 'cash-dom';

export default function addGoBack() {
  const $a = $('.p-breadcrumbs li:last-child a').first();
  const title = $a.text();
  const href = $a.attr('href');
  const html = `
<a
  href="${href}"
  class="button--scroll button"
  data-microtip-position="left"
  aria-label="Go back to ${title}"
  role="tooltip"
  style="
    position: fixed;
    right: 20px;
    bottom: 70px;
"
>
  <span class="button-text">
    <i class="fa--xf far fa-arrow-left" aria-hidden="true"></i>
  </span>
</a>;
`;
  $(html).appendTo(document.body);
}
