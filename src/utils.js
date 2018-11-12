export function debounce(action, delay = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      action.apply(this, args);
    }, delay);
  };
}