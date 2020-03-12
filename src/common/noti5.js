export default function notify(options) {
  return new Promise(resolve => {
    GM_notification(options, resolve);
  });
}
