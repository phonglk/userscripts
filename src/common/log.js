let indent = -1;
const rep = n => {
  let s = '';
  for (let i = 0; i <= n; i++) s += ' ';
  return s;
};
export default function log(...args) {
  indent++;
  const argMsg = [[args[0]]];

  args.forEach((msg, i) => {
    if (i === 0) return;
    if (typeof msg !== 'object') argMsg[argMsg.length - 1].push(msg.toString());
    else argMsg.push([msg]);
  });

  argMsg.forEach(msg =>
    typeof msg[0] === 'object'
      ? GM_log(msg[0])
      : GM_log([rep(indent)].concat(msg).join(' '))
  );
  indent--;
}
