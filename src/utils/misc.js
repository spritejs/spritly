export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function random(from, to) {
  if(from < to) [from, to] = [to, from];
  return Math.floor(Math.random() * (to - from)) + from;
}

export function random_color() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

export function random_color_hue(s, l, a) {
  const h = Math.floor(Math.random() * 360);

  return `hsla(${h},${s}%,${l}%,${a})`;
}