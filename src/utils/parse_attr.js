function projectionXY(attrs, attrName, defaultValue = 0) {
  const attrX = `${attrName}X`;
  const attrY = `${attrName}Y`;
  if(attrX in attrs || attrY in attrs) {
    attrs[attrName] = [
      attrs[attrX] != null ? attrs[attrX] : defaultValue,
      attrs[attrY] != null ? attrs[attrY] : defaultValue,
    ];
    delete attrs[attrX];
    delete attrs[attrY];
  }
}

export default function parse_attr(attrs) {
  projectionXY(attrs, 'anchor', 0);
  projectionXY(attrs, 'scale', 1);
  projectionXY(attrs, 'translate', 0);
  projectionXY(attrs, 'skew', 0);
  return attrs;
}
