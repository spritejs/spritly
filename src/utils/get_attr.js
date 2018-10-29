
function getProjectionXY(el, attr) {
  const t = attr.slice(-1);
  const v = el.attr(attr.slice(0, -1));
  if(t === 'X') {
    return v[0];
  }
  return v[1];
}

export default function get_attr(el, attr) {
  if(el.nodeType !== 'sprite' && el.nodeType !== 'path' && el.nodeType !== 'label') {
    return;
  }
  if(/^.*[XY]$/.test(attr)) return getProjectionXY(el, attr);
  if(attr === 'borderWidth') {
    return el.attr('border').width;
  }
  if(attr === 'bordeStyle') {
    return el.attr('border').style;
  }
  if(attr === 'borderColor') {
    return el.attr('border').color;
  }
  return el.attr(attr);
}
