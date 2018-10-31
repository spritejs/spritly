function createSymbols(...keys) {
  const ret = {};
  keys.forEach((key) => {
    ret[key] = Symbol(key);
  });
  return ret;
}

export default createSymbols(
  'target',
  'offsetX', 'offsetY', 'layerX', 'layerY',
  'altKey', 'ctrlKey', 'shiftKey',
  'buttons'
);
