import {unpack} from './packer';

function loadExternalModule(src) {
  const script = document.createElement('script');
  const promise = new Promise((resolve) => {
    script.onload = () => {
      resolve(script);
    };
  });
  if(src.indexOf('/') === 0) {
    script.src = src;
  } else {
    script.src = `/toolboxs/${src}`;
  }
  document.body.appendChild(script);
  return promise;
}

export default async function loadToolbox(src = 'toolboxs/default.xml') {
  const toolbox = await fetch(src)
    .then(res => res.text())
    .then(str => (new DOMParser()).parseFromString(str, 'text/xml'));

  unpack(toolbox);

  let externals = toolbox.querySelectorAll('externals module');
  externals = [...externals].map(eb => eb.getAttribute('src'));

  await Promise.all(externals.map((src) => {
    return loadExternalModule(src);
  }));

  return {externals, toolbox: toolbox.documentElement, toolboxSrc: src};
}