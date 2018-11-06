import Signal from './signal';
import ElementList from './element_list';
import {wait, random, random_color, random_color_hue, getCollisions} from './misc';
import {dispatchEvent} from './event';
import parse_attr from './parse_attr';
import get_attr from './get_attr';
import Symbols from './symbols';
import Store from './store';
import Audio from './audio';

function use({Scene}, options = {container: '#stage', viewport: 'auto', resolution: 'flex'}) {
  const {container, viewport, resolution} = options;
  const scene = new Scene(container, {
    viewport,
    resolution,
  });
  scene.layer('bglayer', {handleEvent: false});
  const fglayer = scene.layer('fglayer');

  fglayer.on('click', (evt) => {
    dispatchEvent('LAYER_CLICKED', scene, evt);
  });

  document.addEventListener('keydown', (evt) => {
    Signal.send('KEYDOWN', document, evt);
  });

  document.addEventListener('keyup', (evt) => {
    Signal.send('KEYUP', document, evt);
  });

  this.scene = scene;

  return scene;
}

const runtime = {
  Signal,
  Symbols,
  use,
  dispatchEvent,
  parse_attr,
  get_attr,
  wait,
  random,
  random_color,
  random_color_hue,
  getCollisions,
  ElementList,
  Store,
  Audio,
};

export {runtime};
