export const set = GM_setValue;
export const get = GM_getValue;
export const del = GM_deleteValue;
export const list = GM_listValues;
export const onChange = (name, func) => {
  GM_addValueChangeListener(name, (_name, old, val, remote) =>
    func(val, remote, old)
  );
};

export const update = (name, defValue, func) => {
  set(name, func(get(name, defValue)));
};

export const val = name => ({
  set: set.bind(null, name),
  get: get.bind(null, name),
  del: del.bind(null, name),
  update: update.bind(null, name),
  onChange: onChange.bind(null, name),
});
