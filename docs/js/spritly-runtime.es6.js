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







function use({ Scene }, options = { container: '#stage', viewport: 'auto', resolution: 'flex' }) {
  const { container, viewport, resolution } = options;
  const scene = new Scene(container, {
    viewport,
    resolution
  });
  scene.layer('bglayer', { handleEvent: false });
  const fglayer = scene.layer('fglayer');

  function getClickHandler(signal) {
    return function (evt) {
      const { altKey, button, buttons, ctrlKey, shiftKey } = evt.originalEvent;
      const runtime = spritly.runtime;
      _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send(signal, { sender: scene }, {
        [runtime.Symbols.target]: evt.target,
        [runtime.Symbols.offsetX]: evt.offsetX,
        [runtime.Symbols.offsetY]: evt.offsetY,
        [runtime.Symbols.layerX]: evt.layerX,
        [runtime.Symbols.layerY]: evt.layerY,
        [runtime.Symbols.altKey]: altKey,
        [runtime.Symbols.buttons]: buttons,
        [runtime.Symbols.ctrlKey]: ctrlKey,
        [runtime.Symbols.shiftKey]: shiftKey
      });
    };
  }

  _signal__WEBPACK_IMPORTED_MODULE_0__["default"].listen('LAYER_CLICKED', fglayer);
  fglayer.on('click', getClickHandler('LAYER_CLICKED'));

  this.scene = scene;

  return scene;
}

const runtime = {
  Signal: _signal__WEBPACK_IMPORTED_MODULE_0__["default"],
  Symbols: _symbols__WEBPACK_IMPORTED_MODULE_5__["default"],
  use,
  parse_attr: _parse_attr__WEBPACK_IMPORTED_MODULE_3__["default"],
  get_attr: _get_attr__WEBPACK_IMPORTED_MODULE_4__["default"],
  wait: _misc__WEBPACK_IMPORTED_MODULE_2__["wait"],
  random: _misc__WEBPACK_IMPORTED_MODULE_2__["random"],
  random_color: _misc__WEBPACK_IMPORTED_MODULE_2__["random_color"],
  random_color_hue: _misc__WEBPACK_IMPORTED_MODULE_2__["random_color_hue"],
  ElementList: _element_list__WEBPACK_IMPORTED_MODULE_1__["default"]
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const signals = new Map();

const Signal = {
  DEFAULT_SIGNAL: { id: Symbol('default_signal') },
  on(signal, handler) {
    const { receivers, handlers } = signals.get(signal) || { receivers: new Set(), handlers: [] };
    handlers.push(handler);
    signals.set(signal, { receivers, handlers });
  },
  listen(signal, receiver) {
    const { receivers, handlers } = signals.get(signal) || { receivers: new Set(), handlers: [] };
    receivers.add(receiver);
    signals.set(signal, { receivers, handlers });
  },
  unlisten(signal, receiver) {
    const { receivers, handlers } = signals.get(signal) || { receivers: new Set(), handlers: [] };
    receivers.delete(receiver);
    signals.set(signal, { receivers, handlers });
  },
  send(signal, { sender, data = {}, receiver } = {}) {
    // console.log('send signal', signal);
    const { receivers, handlers } = signals.get(signal) || { receivers: new Set(), handlers: [] };
    [...receivers, Signal.DEFAULT_SIGNAL].forEach(_receiver => {
      if (receiver == null || receiver === _receiver) {
        handlers.forEach(handler => {
          handler({ signal, sender, receiver: _receiver, data, target: receiver });
        });
      }
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
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].listen('ELEMENT_CREATED', el);
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('ELEMENT_CREATED', { sender: el, receiver: el });
    return el;
  },
  remove(el) {
    if (el.layer) {
      el.remove();
    }
    if (el.id) {
      delete elements_index[el.id];
    }
    elements.delete(el);
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].signals.forEach(signal => {
      _signal__WEBPACK_IMPORTED_MODULE_0__["default"].unlisten(signal, el);
    });
    _signal__WEBPACK_IMPORTED_MODULE_0__["default"].send('ELEMENT_DESTROYED', { sender: el });
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

function parse_attr(...args) {
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

/* harmony default export */ __webpack_exports__["default"] = (createSymbols('target', 'offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'buttons'));

/***/ })
/******/ ]);