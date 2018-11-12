import loadToolbox from './toolbox';
import {unpack} from './packer';

export default async function loadBlocks(src = 'index.xml') {
  if(src.indexOf('/') !== 0) {
    src = `/blocks/${src}`;
  }
  if(!(/xml$/.test(src))) {
    src = `${src}.xml`;
  }
  const blockXml = await fetch(src)
    .then(res => res.text())
    .then(str => (new DOMParser()).parseFromString(str, 'text/xml'));

  const toolboxSrc = blockXml.documentElement.getAttribute('toolbox') || 'toolboxs/default.xml';

  const {externals, toolbox} = await loadToolbox(toolboxSrc);

  const preload_res = Array.from(blockXml.querySelectorAll('preload resource')).map((res) => {
    const type = res.getAttribute('type');
    if(type === 'texture_packer') {
      const texture = res.getAttribute('texture');
      const data = res.getAttribute('data');
      return [texture, data];
    }

    const src = res.getAttribute('src');
    const id = res.getAttribute('id') || src;
    return {id, src};
  });

  const scriptsBefore = [];
  const scriptsAfter = [];
  let scripts = scriptsBefore;
  const children = blockXml.documentElement.children;
  for(let i = 0; i < children.length; i++) {
    const child = children[i];
    if(child.tagName.toLowerCase() === 'script') {
      const scriptLink = child.getAttribute('src');
      if(scriptLink) {
        const code = await fetch(scriptLink)  // eslint-disable-line
          .then(res => res.text());
        scripts.push({code, src: scriptLink});
      }
    } else if(child.tagName.toLowerCase() === 'block') {
      scripts = scriptsAfter;
    }
  }
  unpack(blockXml);

  return {externals, toolbox, toolboxSrc, blockXml, preload_res, scriptsBefore, scriptsAfter};
}
