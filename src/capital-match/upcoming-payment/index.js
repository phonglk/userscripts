import $ from 'cash-dom';
import { render, h } from 'preact';
import { rawRequest } from 'common/request';
import {useEffect} from 'preact/hooks';

const $menus = $('.tabsMenu')
const $view = $('#investor-view .tabs')
const $tab = $('<div class="tab upcoming-payment"><div class="elem"><span>Upcoming Payments</span></div></div>')
const $container = $('<div class="container"></div>')
$menus.append($tab)

$tab.on("click", () => {
  $tab.addClass("active")
  $view.html('')
  $view.append($container)
  render(<App />, $container[0])
})

const App = () => {
  useEffect(() => {
    const key = getUserKey()
    rawRequest(getOutstandingURL(key, 0, 100))
      .then((resp) => {
        const json = JSON.parse(resp.responseText)
        const lastOffset = getLastOffset(resp.responseHeaders)
        console.log(lastOffset, json)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return <div>Upcoming Payment</div>
}

const getUserKey = () => {
  try {
    return location.href.match(/investors\/([^/]+)\//)[1]
  } catch {
    return false;
  }
}

const getOutstandingURL = (key, offset, limit = 100) => `https://lending.capital-match.com/api/investors/${key}/outstanding?offset=${offset}&limit=${limit}&filter=`
const getLastOffset = (headers) => {
    const last = headers.match(/offset=(\d+)&limit=\d+>; rel="last"/)[1];
    return last;
}