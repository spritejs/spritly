module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runtime", function() { return runtime; });
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _element_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _parse_attr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _get_attr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);









function use({ Scene }, options = { container: '#stage', viewport: 'auto', resolution: 'flex' }) {
  const { container, viewport, resolution } = options;
  const scene = new Scene(container, {
    viewport,
    resolution
  });
  scene.layer('bglayer', { handleEvent: false });
  const fglayer = scene.layer('fglayer');

  fglayer.on('click', evt => {
    dispatchEvent('LAYER_CLICKED', scene, evt);
  });

  document.addEventListener('keydown', evt => {
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('KEYDOWN', document, evt);
  });

  document.addEventListener('keyup', evt => {
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('KEYUP', document, evt);
  });

  this.scene = scene;

  return scene;
}

function dispatchEvent(signal, sender, event) {
  const evt = event.originalEvent || event;
  const { altKey, buttons, ctrlKey, shiftKey, key, keyCode } = evt;
  const data = {
    [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].target]: evt.target,
    [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].altKey]: altKey,
    [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].ctrlKey]: ctrlKey,
    [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].shiftKey]: shiftKey
  };
  if (key != null) {
    Object.assign(data, {
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].key]: key,
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].keyCode]: keyCode
    });
  }
  if (buttons != null) {
    Object.assign(data, {
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].buttons]: buttons
    });
  }
  if (event.originalEvent && evt.offsetX != null) {
    Object.assign(data, {
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].offsetX]: evt.offsetX,
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].offsetY]: evt.offsetY,
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].layerX]: evt.layerX,
      [_symbols__WEBPACK_IMPORTED_MODULE_5__["default"].layerY]: evt.layerY
    });
  }
  _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send(signal, sender, data);
}

const runtime = {
  Signal: _signal__WEBPACK_IMPORTED_MODULE_0__["default"],
  Symbols: _symbols__WEBPACK_IMPORTED_MODULE_5__["default"],
  use,
  dispatchEvent,
  parse_attr: _parse_attr__WEBPACK_IMPORTED_MODULE_3__["default"],
  get_attr: _get_attr__WEBPACK_IMPORTED_MODULE_4__["default"],
  wait: _misc__WEBPACK_IMPORTED_MODULE_2__["wait"],
  random: _misc__WEBPACK_IMPORTED_MODULE_2__["random"],
  random_color: _misc__WEBPACK_IMPORTED_MODULE_2__["random_color"],
  random_color_hue: _misc__WEBPACK_IMPORTED_MODULE_2__["random_color_hue"],
  getCollisions: _misc__WEBPACK_IMPORTED_MODULE_2__["getCollisions"],
  ElementList: _element_list__WEBPACK_IMPORTED_MODULE_1__["default"],
  Store: _store__WEBPACK_IMPORTED_MODULE_6__["default"],
  Audio: _audio__WEBPACK_IMPORTED_MODULE_7__["default"]
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const signals = new Map();

const Signal = {
  DEFAULT_RECEIVER: { id: Symbol('default_receiver') },
  on(signal, handler) {
    const handlers = signals.get(signal) || [];
    handlers.push(handler);
    signals.set(signal, handlers);
  },
  un(signal, handler) {
    const handlers = signals.get(signal);
    if (handlers) {
      const idx = handlers.indexOf(handler);
      if (idx >= 0) {
        handlers.splice(idx, 1);
      }
    }
  },
  send(signal, sender, data = {}) {
    // console.log('send signal', signal);
    const handlers = signals.get(signal) || [];
    handlers.forEach(handler => {
      handler(sender, data);
    });
  },
  get signals() {
    return [...signals.keys()];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Signal);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const elements = new Set();
const elements_index = {};

const ElementList = {
  add(el) {
    elements.add(el);
    if (el.id) {
      elements_index[el.id] = el;
    }
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('ELEMENT_CREATED', el);
    return el;
  },
  remove(el) {
    if (el.layer) {
      el.remove();
    }
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('ELEMENT_DESTROYED', el);
    if (el.id) {
      delete elements_index[el.id];
    }
    el.$$deleted = true;
    elements.delete(el);
  },
  all() {
    return [...elements];
  },
  getElementById(id) {
    return elements_index[id] || null;
  },
  getElementsByName(name) {
    return [...elements].filter(el => el.name === name);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ElementList);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random_color", function() { return random_color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random_color_hue", function() { return random_color_hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollisions", function() { return getCollisions; });
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function random(from, to) {
  if (from < to) [from, to] = [to, from];
  return Math.floor(Math.random() * (to - from)) + from;
}

function random_color() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

function random_color_hue(s, l, a) {
  const h = Math.floor(Math.random() * 360);

  return `hsla(${h},${s}%,${l}%,${a})`;
}

function getCollisions(sprite) {
  const layer = sprite.layer;
  if (!layer) return [];
  return layer.children.filter(s => {
    return s !== sprite && s.OBBCollision(sprite);
  });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse_attr; });
function projectionXY(attrs, attrName, defaultValue = 0) {
  const attrX = `${attrName}X`;
  const attrY = `${attrName}Y`;
  if (attrX in attrs || attrY in attrs) {
    attrs[attrName] = [attrs[attrX] != null ? attrs[attrX] : defaultValue, attrs[attrY] != null ? attrs[attrY] : defaultValue];
    delete attrs[attrX];
    delete attrs[attrY];
  }
}

function projectionBorder(attrs) {
  if ('borderWidth' in attrs || 'borderStyle' in attrs || 'borderColor' in attrs) {
    const { borderWidth, borderStyle, borderColor } = attrs;
    attrs.border = {
      width: borderWidth != null ? borderWidth : 1,
      style: borderStyle != null ? borderStyle : 'solid',
      color: borderColor != null ? borderColor : '#000000'
    };
    delete attrs.borderWidth;
    delete attrs.borderStyle;
    delete attrs.borderColor;
  }
}

const _frameTimer = Symbol('frameTimer');

function parse_attr(sprite, ...args) {
  const attrs = args.reduce((a, b) => Object.assign(a, b), {});
  if ('texture' in attrs) {
    attrs.textures = [attrs.texture];
    delete attrs.texture;
  }
  if ('fontFamily' in attrs) {
    attrs.fontFamily = `"${attrs.fontFamily}"`;
  }
  projectionXY(attrs, 'anchor', 0);
  projectionXY(attrs, 'scale', 1);
  projectionXY(attrs, 'translate', 0);
  projectionXY(attrs, 'skew', 0);
  projectionBorder(attrs);

  const textureFrames = Object.entries(attrs).filter(([key, value]) => {
    if (key.indexOf('textureFrame$') === 0) {
      delete attrs[key];
      return true;
    }
    return false;
  }).map(s => s[1]);

  const len = textureFrames.length;

  if (len > 0 && !sprite.$$deleted) {
    let idx = 0;
    const frameTimer = sprite[_frameTimer];
    if (frameTimer) {
      clearTimeout(frameTimer);
    }
    sprite.attr({ textures: textureFrames[idx][0] });
    sprite[_frameTimer] = setTimeout(function f() {
      sprite.attr({ textures: textureFrames[idx][0] });
      if (!sprite.$$deleted) sprite[_frameTimer] = setTimeout(f, textureFrames[idx][1] * 1000);
      idx = (idx + 1) % len;
    }, textureFrames[idx][1] * 1000);
    idx = (idx + 1) % len;
  }

  return attrs;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get_attr; });

function getProjectionXY(el, attr) {
  const t = attr.slice(-1);
  const v = el.attr(attr.slice(0, -1));
  if (t === 'X') {
    return v[0];
  }
  return v[1];
}

function get_attr(el, attr) {
  if (el.nodeType !== 'sprite' && el.nodeType !== 'path' && el.nodeType !== 'label') {
    return;
  }
  if (/^.*[XY]$/.test(attr)) return getProjectionXY(el, attr);
  if (attr === 'borderWidth') {
    return el.attr('border').width;
  }
  if (attr === 'bordeStyle') {
    return el.attr('border').style;
  }
  if (attr === 'borderColor') {
    return el.attr('border').color;
  }
  return el.attr(attr);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createSymbols(...keys) {
  const ret = {};
  keys.forEach(key => {
    ret[key] = Symbol(key);
  });
  return ret;
}

/* harmony default export */ __webpack_exports__["default"] = (createSymbols('target', 'offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'buttons', 'key', 'keyCode', 'property', 'oldValue', 'newValue'));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


const store = new Map();

/* harmony default export */ __webpack_exports__["default"] = ({
  set(key, value, operator = null) {
    const oldValue = store.get(key);
    store.set(key, value);
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('STORE_PROPERTY_UPDATE', operator, {
      [_symbols__WEBPACK_IMPORTED_MODULE_1__["default"].property]: key,
      [_symbols__WEBPACK_IMPORTED_MODULE_1__["default"].oldValue]: oldValue,
      [_symbols__WEBPACK_IMPORTED_MODULE_1__["default"].newValue]: value
    });
  },
  get(key) {
    return store.get(key);
  },
  delete(key, operator = null) {
    const oldValue = store.get(key);
    store.delete(key);
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('STORE_PROPERTY_UPDATE', operator, {
      [_symbols__WEBPACK_IMPORTED_MODULE_1__["default"].property]: key,
      [_symbols__WEBPACK_IMPORTED_MODULE_1__["default"].oldValue]: oldValue
    });
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const audioCache = new Map();
const testAudio = new Audio();

/* harmony default export */ __webpack_exports__["default"] = ({
  canplay(src) {
    return testAudio.canPlayType(src);
  },
  load(res) {
    if (typeof res === 'string') {
      res = { id: res, src: res };
    }

    let promise = audioCache.get(res.id);
    if (promise) return promise;

    const sound = new Audio(res.src);
    promise = new Promise(resolve => {
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
    });
    audioCache.set(res.id, promise);

    return promise;
  },
  play(res) {
    this.load(res).then(sound => sound.play());
  }
});

/***/ })
/******/ ]);