export default function log(...args) {
  args.forEach(msg => {
    if (typeof msg === 'object') msg = JSON.stringify(msg);
    GM_log(msg);
  });
}
