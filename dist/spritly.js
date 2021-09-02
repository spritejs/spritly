(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Blockly"));
	else if(typeof define === 'function' && define.amd)
		define(["Blockly"], factory);
	else if(typeof exports === 'object')
		exports["spritly"] = factory(require("Blockly"));
	else
		root["spritly"] = factory(root["Blockly"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__145__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var ctx = __webpack_require__(8);
var hide = __webpack_require__(10);
var has = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(9);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(14);
var toPrimitive = __webpack_require__(18);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(20);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(28) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(30)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(26);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(45);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(36);
var arrayIndexOf = __webpack_require__(40)(false);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(37);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(36);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(43);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(42);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(45);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(61);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(69);
module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(64)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(65)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var defined = __webpack_require__(39);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(24);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(66);
var $iterCreate = __webpack_require__(67);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(68);
var ITERATOR = __webpack_require__(30)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(30)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(49);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(8);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(49);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var toLength = __webpack_require__(41);
var createProperty = __webpack_require__(72);
var getIterFn = __webpack_require__(73);

$export($export.S + $export.F * !__webpack_require__(75)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(66);
var ITERATOR = __webpack_require__(30)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(74);
var ITERATOR = __webpack_require__(30)('iterator');
var Iterators = __webpack_require__(66);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(38);
var TAG = __webpack_require__(30)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(30)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var global = __webpack_require__(6);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(66);
var TO_STRING_TAG = __webpack_require__(30)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80);
var step = __webpack_require__(81);
var Iterators = __webpack_require__(66);
var toIObject = __webpack_require__(36);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(65)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(11).f;
var create = __webpack_require__(50);
var redefineAll = __webpack_require__(84);
var ctx = __webpack_require__(8);
var anInstance = __webpack_require__(85);
var forOf = __webpack_require__(86);
var $iterDefine = __webpack_require__(65);
var step = __webpack_require__(81);
var setSpecies = __webpack_require__(87);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(25).fastKey;
var validate = __webpack_require__(88);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(41);
var getIterFn = __webpack_require__(73);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(30)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(5);
var meta = __webpack_require__(25);
var fails = __webpack_require__(16);
var hide = __webpack_require__(10);
var redefineAll = __webpack_require__(84);
var forOf = __webpack_require__(86);
var anInstance = __webpack_require__(85);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(29);
var dP = __webpack_require__(11).f;
var each = __webpack_require__(90)(0);
var DESCRIPTORS = __webpack_require__(15);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(37);
var toObject = __webpack_require__(49);
var toLength = __webpack_require__(41);
var asc = __webpack_require__(91);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(92);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(48);
var SPECIES = __webpack_require__(30)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(74);
var from = __webpack_require__(95);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(86);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);
var aFunction = __webpack_require__(9);
var ctx = __webpack_require__(8);
var forOf = __webpack_require__(86);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(63);
__webpack_require__(78);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(113);
module.exports = __webpack_require__(7).Set;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(83);
var validate = __webpack_require__(88);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(89)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(94)('Set') });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(97)('Set');


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(99)('Set');


/***/ }),
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(63);
__webpack_require__(78);
__webpack_require__(117);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(7).Promise;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var global = __webpack_require__(6);
var ctx = __webpack_require__(8);
var classof = __webpack_require__(74);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(9);
var anInstance = __webpack_require__(85);
var forOf = __webpack_require__(86);
var speciesConstructor = __webpack_require__(118);
var task = __webpack_require__(119).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(122);
var perform = __webpack_require__(123);
var userAgent = __webpack_require__(124);
var promiseResolve = __webpack_require__(125);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(30)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(84)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(29)($Promise, PROMISE);
__webpack_require__(87)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(75)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(9);
var SPECIES = __webpack_require__(30)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var invoke = __webpack_require__(120);
var html = __webpack_require__(52);
var cel = __webpack_require__(17);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(38)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(119).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(38)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(9);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(122);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(7);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(118);
var promiseResolve = __webpack_require__(125);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(122);
var perform = __webpack_require__(123);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Application = exports.Blockly = undefined;

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

__webpack_require__(143);

__webpack_require__(147);

__webpack_require__(165);

var _application = __webpack_require__(169);

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

var _dispose = Blockly.Block.prototype.dispose;
Blockly.Block.prototype.dispose = function () {
  if (this.destroyed) {
    this.destroyed();
  }

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _dispose.apply(this, args);
};

Blockly.Workspace.prototype.getBlocksByType = function (type) {
  return this.getAllBlocks().filter(function (b) {
    return b.type === type;
  });
};

Object.defineProperty(Blockly.Workspace.prototype, 'toolboxWorkspace', {
  get: function get() {
    var flyout = this.getFlyout_();
    if (flyout) {
      return flyout.workspace_;
    }
    return null;
  }
});

Blockly.Block.prototype.getAllDescendants = function () {
  function getDescendants(block) {
    var children = block.getChildren();
    if (children) {
      return children.reduce(function (list, child) {
        return [].concat((0, _toConsumableArray3.default)(list), (0, _toConsumableArray3.default)(getDescendants(child)));
      }, [block]);
    }
    return [block];
  }
  return getDescendants(this).slice(1);
};

exports.Blockly = Blockly;
exports.Application = _application2.default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(144);

__webpack_require__(146);

var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;


Msg.$ = function (key) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'COMMON';

  var k = prefix + '_' + key.toUpperCase();
  if (k in Msg) return Msg[k];
  return key;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;


Msg.SPRITE_HUE = 330;
Msg.ATTRS_HUE = 130;
Msg.ATTRS_SPRITE_HUE = 140;
Msg.ATTRS_LABEL_HUE = 150;
Msg.ATTRS_PATH_HUE = 160;
Msg.EASING_HUE = 90;
Msg.ANIMATE_HUE = 345;
Msg.SIGNALS_HUE = 55;
Msg.LITERAL_HUE = 250;
Msg.GETTER_SETTER_HUE = 120;
Msg.STORE_HUE = 70;
Msg.FLOWS_HUE = 220;
Msg.MATH_HUE = 270;
Msg.LOG_HUE = 310;
Msg.SOUND_HUE = 45;
Msg.PROCEDURE_HUE = 290;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__145__;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;


Msg.COMMON_FGLAYER = '前景图层';
Msg.COMMON_BGLAYER = '背景图层';
Msg.COMMON_TARGET = '目标元素';
Msg.COMMON_SENDER = '发送者';
Msg.COMMON_RECEIVER = '接收者';
Msg.COMMON_SPRITE = '精灵元素';
Msg.COMMON_LABEL = '文本元素';
Msg.COMMON_PATH = '矢量元素';

Msg.CATEGORY_SIGNALS = '信号';
Msg.CATEGORY_PROCEDURE = '过程';
Msg.CATEGORY_SPRITES = '元素对象';
Msg.CATEGORY_ATTRIBUTES = '元素属性';
Msg.CATEGORY_ATTRIBUTES_COMMON = '公共属性';
Msg.CATEGORY_ATTRIBUTES_SPRITE = '精灵属性';
Msg.CATEGORY_ATTRIBUTES_LABEL = '文本属性';
Msg.CATEGORY_ATTRIBUTES_PATH = '矢量属性';
Msg.CATEGORY_ANIM_ASYNC = '动画和异步';
Msg.CATEGORY_GETTER_SETTER = '属性读写';
Msg.CATEGORY_STORE = '共享数据';
Msg.CATEGORY_LITERALS = '字面量';
Msg.CATEGORY_LISTS = '列表对象';
Msg.CATEGORY_MATH = '数学计算';
Msg.CATEGORY_LOGIC = '逻辑判断';
Msg.CATEGORY_FLOWS = '循环和条件';
Msg.CATEGORY_LOG = '日志输出';
Msg.CATEGORY_SOUND = '音效';

Msg.SENDER_RECEIVER_TARGET_TOOLTIP = '\u53D1\u9001\u8005\uFF1A\u53D1\u9001\u4FE1\u53F7\u7684\u5143\u7D20\u3002\n\u63A5\u6536\u8005\uFF1A\u63A5\u6536\u4FE1\u53F7\u7684\u5143\u7D20\u3002\n\u76EE\u6807\u5143\u7D20\uFF1A\u5982\u679C\u4FE1\u53F7\u7531\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u76EE\u6807\u5143\u7D20\u662F\u5B9E\u9645\u4E8B\u4EF6\u76EE\u6807\u3002';

Msg.FGLAYER_BGLAYER_TOOTIP = '\u524D\u666F\u56FE\u5C42\u63A5\u6536DOM\u4E8B\u4EF6\uFF0C\n\u80CC\u666F\u56FE\u5C42\u4E0D\u63A5\u6536DOM\u4E8B\u4EF6\u3002';

Msg.LITERAL_NULL = '空';
Msg.LITERAL_UNDEFINED = '未定义';

Msg.NIL_TOOLTIP = '%1值。';
Msg.OBJECT_CREATE_TOOLTIP = '构造一个对象。';
Msg.LOOP_GET_INDEX_MSG0 = '索引值';
Msg.LOOP_GET_INDEX_TOOLTIP = '循环中的索引值。';

Msg.ATTR_ID = 'ID';
Msg.ATTR_NAME = '名字';
Msg.ATTR_ANCHORX = 'X向锚';
Msg.ATTR_ANCHORY = 'Y向锚';
Msg.ATTR_X = 'X坐标';
Msg.ATTR_Y = 'Y坐标';
Msg.ATTR_WIDTH = '宽';
Msg.ATTR_HEIGHT = '高';
Msg.ATTR_BGCOLOR = '背景色';
Msg.ATTR_OPACITY = '透明度';
Msg.ATTR_SCALEX = 'X向拉伸';
Msg.ATTR_SCALEY = 'Y向拉伸';
Msg.ATTR_TRANSLATEX = 'X向平移';
Msg.ATTR_TRANSLATEY = 'Y向平移';
Msg.ATTR_SKEWX = 'X向扭曲';
Msg.ATTR_SKEWY = 'Y向扭曲';
Msg.ATTR_ROTATE = '逆时针旋转';
Msg.ATTR_BORDERRADIUS = '圆角半径';
Msg.ATTR_BORDERWIDTH = '边框线宽';
Msg.ATTR_BORDERSTYLE = '边框样式';
Msg.ATTR_BORDERCOLOR = '边框颜色';
Msg.ATTR_DASHOFFSET = '虚线框偏移';
Msg.ATTR_TEXTURE = '图片纹理';
Msg.ATTR_TEXT = '文本';
Msg.ATTR_FONTSIZE = '字号';
Msg.ATTR_FONTFAMILY = '字体';
Msg.ATTR_FONTSTYLE = '字体样式';
Msg.ATTR_FONTVARIANT = '字体变体';
Msg.ATTR_FONTWEIGHT = '字体粗细';
Msg.ATTR_TEXTALIGN = '文本对齐';
Msg.ATTR_LINEHEIGHT = '文本行高';
Msg.ATTR_D = 'SVG路径';
Msg.ATTR_LINEWIDTH = '路径线宽';
Msg.ATTR_LINEDASH = '路径虚线样式';
Msg.ATTR_LINEDASHOFFSET = '路径虚线偏移';
Msg.ATTR_LINECAP = '线帽样式';
Msg.ATTR_LINEJOIN = '连线样式';
Msg.ATTR_BOUNDING = '碰撞边界';
Msg.ATTR_STROKECOLOR = '描线颜色';
Msg.ATTR_FILLCOLOR = '填充颜色';
Msg.ATTR_CURSOR = '鼠标样式';
Msg.ATTR_DRAGGABLE = '可拖拽？';

Msg.ATTR_VALUE_YES = '是';
Msg.ATTR_VALUE_NO = '否';
Msg.ATTR_VALUE_SOLID = '实线';
Msg.ATTR_VALUE_DASHED = '虚线';
Msg.ATTR_VALUE_NORMAL = '常规';
Msg.ATTR_VALUE_BOLD = '粗体';
Msg.ATTR_VALUE_LIGHTER = '细体';
Msg.ATTR_VALUE_ITALIC = '斜体';
Msg.ATTR_VALUE_OBLIQUE = '倾斜';
Msg['ATTR_VALUE_SMALL-CAPS'] = '小型大写';
Msg.ATTR_VALUE_LEFT = '靠左';
Msg.ATTR_VALUE_RIGHT = '靠右';
Msg.ATTR_VALUE_CENTER = '居中';
Msg.ATTR_VALUE_BUTT = '平直';
Msg.ATTR_VALUE_ROUND = '圆形';
Msg.ATTR_VALUE_SQUARE = '方形';
Msg.ATTR_VALUE_MITER = '尖角';
Msg.ATTR_VALUE_BEVEL = '斜角';
Msg.ATTR_VALUE_BOX = '基于盒子';
Msg.ATTR_VALUE_PATH = '基于路径';

Msg.ATTR_VALUE_DEFAULT = '默认';
Msg.ATTR_VALUE_CROSSHAIR = '十字线';
Msg.ATTR_VALUE_POINTER = '手形';
Msg.ATTR_VALUE_MOVE = '可被移动';
Msg['ATTR_VALUE_E-RESIZE'] = '可右移';
Msg['ATTR_VALUE_NE-RESIZE'] = '可右上移';
Msg['ATTR_VALUE_SE-RESIZE'] = '可右下移';
Msg['ATTR_VALUE_W-RESIZE'] = '可左移';
Msg['ATTR_VALUE_NW-RESIZE'] = '可左上移';
Msg['ATTR_VALUE_SW-RESIZE'] = '可左下移';
Msg['ATTR_VALUE_N-RESIZE'] = '可上移';
Msg['ATTR_VALUE_S-RESIZE'] = '可下移';
Msg.ATTR_VALUE_TEXT = '文本';
Msg.ATTR_VALUE_WAIT = '等待';
Msg.ATTR_VALUE_HELP = '帮助';

Msg.AWAIT_MSG0 = '等待 %1 毫秒 🕙';
Msg.AWAIT_TOOLTIP = '等待 %1 毫秒后继续执行后续操作。';
Msg.AWAIT_FRAME_MSG0 = '等待 %1 更新到下一帧 ⌛';
Msg.AWAIT_FRAME_TOOLTIP = '等待图层更新后继续执行后续操作。';

Msg.SPRITE_ANIMATE_MSG0 = '%1 %2 动画持续 %3 秒';
Msg.SPRITE_ANIMATE_MSG1 = '起始状态 %1';
Msg.SPRITE_ANIMATE_MSG2 = '结束状态 %1';
Msg.SPRITE_ANIMATE_MSG3 = '缓动策略 %1';
Msg.SPRITE_ANIMATE_TOOLTIP = '在指定元素上执行动画操作。';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT = '⚡️ 立即执行';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT = '⌛️ 执行并等待';

Msg.EASING_MSG0 = '%1';
Msg.EASING_OPTION_EASING_EASE = '匀速';
Msg.EASING_OPTION_EASING_EASEIN = '匀加速';
Msg.EASING_OPTION_EASING_EASEOUT = '匀减速';
Msg.EASING_OPTION_EASING_EASEINOUT = '先加速后减速';
Msg.EASING_OPTION_TOOLTIP = '为动画设置缓动策略。';

Msg.BEZIER_EASING_MSG0 = '贝塞尔曲线 %1 %2 %3 %4';
Msg.BEZIER_EASING_TOOLTIP = '将动画缓动策略设置为贝塞尔曲线。';

Msg.FIELD_ATTR_INC_MSG0 = '%1 %2';
Msg.FIELD_ATTR_INC_TOOLTIP = '在原值基础上改变属性值。';

Msg.KEYVALUE_MSG0 = '%1: %2,';
Msg.KEYVALUE_TOOLTIP = '设置“属性-值”对。';

Msg.FIELD_ATTR_ANCHOR_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_XY_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SIZE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BGCOLOR_TOOLTIP = '设置元素的背景色。';
Msg.FIELD_ATTR_OPACITY_TOOLTIP = '设置元素的透明度。';
Msg.FIELD_ATTR_ROTATE_TOOLTIP = '设置元素的逆时针旋转角度。';
Msg.FIELD_ATTR_SCALE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_TRANSLATE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SKEW_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP = '设置元素的圆角半径。';
Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP = '设置元素的边框宽度。';
Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP = '设置元素的边框样式。';
Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP = '设置元素的边框颜色。';
Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP = '如果元素边框样式为虚线，设置边框虚线的偏移量。';
Msg.FIELD_ATTR_TEXTURE_TOOLTIP = '设置精灵元素的图片纹理。';
Msg.FIELD_ATTR_TEXT_TOOLTIP = '设置文本元素的内容。';
Msg.FIELD_ATTR_FONTSIZE_TOOLTIP = '设置文本元素的字号。';
Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP = '设置文本元素的字体。';
Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP = '设置文本元素的字体样式。';
Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP = '设置文本元素的字体变体。';
Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP = '设置文本元素的字体粗细。';
Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP = '设置文本元素的文字对齐方式。';
Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP = '设置文本元素的行高。';
Msg.FIELD_ATTR_D_TOOLTIP = '设置矢量元素的SVG路径。';
Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP = '设置矢量元素的线宽。';
Msg.FIELD_ATTR_LINEDASH_TOOLTIP = '将矢量元素的描线设为虚线。';
Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP = '如果矢量元素的描线是虚线，设置虚线偏移量。';
Msg.FIELD_ATTR_LINECAP_TOOLTIP = '设置矢量元素的线帽样式。';
Msg.FIELD_ATTR_LINEJOIN_TOOLTIP = '设置矢量元素的连线样式。';
Msg.FIELD_ATTR_BOUNDING_TOOLTIP = '使用%1的边界方式来检测碰撞。';
Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP = '设置一个矢量元素或文本元素的描线颜色。';
Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP = '设置一个矢量元素或文本元素的填充颜色。';
Msg.FIELD_ATTR_CURSOR_TOOLTIP = '设置光标形状。';
Msg.FIELD_ATTR_DRAGGABLE_TOOLTIP = '可拖拽？';

Msg.RANDOM_STRING_MSG0 = '🎲 随机字符串';
Msg.RANDOM_STRING_TOOLTIP = '获得一个11个字符长度的随机字符串。';

Msg.RANDOM_COLOUR_RGB_MSG0 = '🎲 随机颜色';
Msg.RANDOM_COLOUR_RGB_TOOLTIP = '获得一个随机的RGB颜色。';

Msg.RANDOM_COLOUR_HUE_MSG0 = '🎲 随机色调';
Msg.RANDOM_COLOUR_HUE_MSG1 = '饱和 %1% 亮 %2% 透明 %3.';
Msg.RANDOM_COLOUR_HUE_TOOLTIP = '获得一个随机的HSLA颜色。';

Msg.LOG_OPTION_LOG_LOG = '记录';
Msg.LOG_OPTION_LOG_WARN = '警告';
Msg.LOG_OPTION_LOG_ERROR = '错误';
Msg.LOG_TOOLTIP = '输出信息到控制台。';
Msg.LOG_ALERT_MSG0 = '🔔 弹出 %1';
Msg.LOG_ALERT_TOOLTIP = '弹出一个会话框。';

Msg.SIGNAL_DO_MSG0 = '当收到信号为 %1 🚩 执行';
Msg.SIGNAL_DO_TOOLTIP = '当收到指定信号时，执行动作。';
Msg.SIGNAL_DO_OPTION_SIGNAL_START = '开始运行';
Msg.SIGNAL_DO_OPTION_SIGNAL_STORE_PROPERTY_UPDATE = '共享数据内容更新';
Msg.SIGNAL_DO_OPTION_SIGNAL_LAYER_CLICKED = '前景图层被鼠标点击';
Msg.SIGNAL_DO_OPTION_SIGNAL_KEYDOWN = '键盘按键按下';
Msg.SIGNAL_DO_OPTION_SIGNAL_KEYUP = '键盘按键松开';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_CREATED = '元素被创建';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_DESTROYED = '元素被销毁';

Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0 = '收到信号为 %1 🚩 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1 = '创建 %1 作为接收者';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2 = 'ID设为 %1';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号时，新建一个元素作为接收者并执行动作。';

Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0 = '收到信号 %1 🚩';
Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1 = '当接收者为 %1 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号且接收者为特定元素时，执行动作。';

Msg.GET_DATA_MSG0 = '消息';
Msg.GET_DATA_TOOLTIP = '读取信号消息。';
Msg.GET_DATA_PROP_MSG0 = '消息的 %1';
Msg.GET_DATA_PROP_TOOLTIP = '读取信号的数据属性。如果信号是由事件触发，可读取这些属性。';
Msg.GET_DATA_PROP_TOOLTIP2 = '读取信号的数据属性。如果信号是存储数据改变，可读取这些属性。';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETX = '相对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETY = '相对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERX = '绝对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERY = '绝对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_ALTKEY = '按下ALT键';
Msg.GET_DATA_PROP_OPTION_PROP_CTRLKEY = '按下CTRL键';
Msg.GET_DATA_PROP_OPTION_PROP_SHIFTKEY = '按下SHIFT键';
Msg.GET_DATA_PROP_OPTION_PROP_BUTTONS = '鼠标按键值';
Msg.GET_DATA_PROP_OPTION_PROP_KEY = '键盘按键值';
Msg.GET_DATA_PROP_OPTION_PROP_KEYCODE = '键盘按键值编码';
Msg.GET_DATA_PROP_OPTION_PROP_PROPERTY = '更新的存储属性';
Msg.GET_DATA_PROP_OPTION_PROP_OLDVALUE = '属性原值';
Msg.GET_DATA_PROP_OPTION_PROP_NEWVALUE = '属性新值';

Msg.EVENT_IMMEDIATELY = '立即';
Msg.EVENT_ONCLICK = '被单击';
Msg.EVENT_ONDBLCLICK = '被双击';
Msg.EVENT_ONMOUSEDOWN = '按下鼠标按键';
Msg.EVENT_ONMOUSEMOVE = '鼠标在它内部移动';
Msg.EVENT_ONMOUSEUP = '释放鼠标按键';
Msg.EVENT_ONMOUSEENTER = '鼠标进入它';
Msg.EVENT_ONMOUSELEAVE = '鼠标离开它';
Msg.EVENT_ONTAP = '触屏短按';
Msg.EVENT_ONLONGTAP = '触屏长按';
Msg.EVENT_ONDRAGGED = '被拖拽';
Msg.EVENT_ONDRAGGEDONTO = '其它元素拖拽入';
Msg.EVENT_ONCOLLISION = '与其他元素碰撞';

Msg.SIGNAL_ONEVENT_SEND_MSG0 = '%1 %2 发送 %3 🚩';
Msg.SIGNAL_ONEVENT_SEND_MSG1 = '包含消息 %1';
Msg.SIGNAL_ONEVENT_SEND_TOOLTIP = '当事件发生时，发送信号。';

Msg.SPRITE_MSG0_TOOLTIP = '\u6307\u5B9A\u5143\u7D20\u3002\n' + Msg.SENDER_RECEIVER_TARGET_TOOLTIP;

Msg.SPRITE_APPEND_TO_MSG0 = '将 %1 添加到 %2';
Msg.SPRITE_APPEND_TO_TOOLTIP = '添加元素到层。';

Msg.SPRITE_ATTRS_MSG0 = '设置 %1 属性';
Msg.SPRITE_ATTRS_TOOLTIP = '设置属性值到元素。';

Msg.SPRITE_CREATE_ATTRS_MSG0 = '创建 %1';
Msg.SPRITE_CREATE_ATTRS_MSG1 = '命名为 %1 包含属性';
Msg.SPRITE_CREATE_ATTRS_TOOLTIP = '创建一个指定名字的元素。可以使用循环语句创建多个同名元素。';

Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0 = '所有名为 %1 的元素';
Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP = '获得指定名字的全部元素。';

Msg.SPRITE_DESTROY_MSG0 = '💣 销毁 %1';
Msg.SPRITE_DESTROY_TOOLTIP = '将元素移除层并销毁。';

Msg.SPRITE_GET_ATTR_MSG0 = '%1 的 %2';
Msg.SPRITE_GET_ATTR_TOOLTIP = '读取目标元素的属性值。';

Msg.MATH_RANDOM_INT_TITLE = '\uD83C\uDFB2 ' + Msg.MATH_RANDOM_INT_TITLE;
Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = '\uD83C\uDFB2 ' + Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM;

Msg.LIST_FOREACH_MSG0 = '遍历列表 %1:';
Msg.LIST_FOREACH_MSG1 = '执行 %1';
Msg.LIST_FOREACH_MSG2 = '%1 代表每个元素, %2 代表索引';
Msg.LIST_FOREACH_TOOLTIP = '遍历列表每个元素，执行动作。';

Msg.LIST_INDEX_TOOLTIP = '获取迭代索引。';
Msg.LIST_ITEM_TOOLTIP = '获取迭代元素。';

Msg.OBJECT_GET_PROP_MSG0 = '%1.%2';
Msg.OBJECT_GET_PROP_TOOLTIP = '读取对象属性。';

Msg.LISTS_CREATE_RANGE_MSG0 = '创建列表范围';
Msg.LISTS_CREATE_RANGE_MSG1 = '从 %1 到 %2';
Msg.LISTS_CREATE_RANGE_TOOLTIP = '通过整数范围创建列表。';

Msg.STORE_SET_MSG0 = '📝 设置 %1 的值为 %2';
Msg.STORE_SET_TOOLTIP = '设置共享数据的值。';

Msg.STORE_GET_MSG0 = '📝 获取 %1 的值';
Msg.STORE_GET_TOOLTIP = '获取共享数据的值。';

Msg.STORE_DELETE_MSG0 = '✂️ 删除 %1 的值';
Msg.STORE_DELETE_TOOLTIP = '删除共享数据的值。';

Msg.FIELD_ATTR_TEXTUREFRAME_MSG0 = '动画帧 %1';
Msg.FIELD_ATTR_TEXTUREFRAME_MSG1 = '持续时间 %1秒';
Msg.FIELD_ATTR_TEXTUREFRAME_TOOLTIP = '在元素上设置动画帧，动画帧会自动循环播放。';

Msg.SOUND_PLAY_MSG0 = '🔔 %1';
Msg.SOUND_PLAY_TOOLTIP = '播放声音。';

Msg.PROCEDURES_DEFRETURN_TITLE = '定义：';
Msg.PROCEDURES_DEFNORETURN_DO = '执行';
Msg.PROCEDURES_MUTATORARG_TITLE = '参数名称';
Msg.PROCEDURES_BEFORE_PARAMS = '参数：';
Msg.PROCEDURES_CALL_BEFORE_PARAMS = '令：';

Msg.PROCEDURES_AWAIT_MSG0 = '⌛️ 得到异步执行结果 %1';
Msg.PROCEDURES_AWAIT_TOOLTIP = '等待直到得到异步执行结果。';

Msg.SPRITE_DELETED = '该元素已被删除。';

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(148);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(156);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(164);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(149);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);
var Msg = Blockly.Msg;

Blockly.Blocks.field_attr_inc = {
  init: function init() {
    this.jsonInit({
      message0: Msg.FIELD_ATTR_INC_MSG0,
      args0: [{ type: 'field_dropdown',
        name: 'OP',
        options: [['+', '+'], ['-', '-'], ['*', '*'], ['/', '/'], ['^', '**']] }, { type: 'input_value', name: 'VALUE', check: 'Number' }],
      colour: Blockly.Msg.ATTRS_HUE,
      tooltip: Msg.FIELD_ATTR_INC_TOOLTIP
    });
    this.setOutput(true, 'Number');
  }
};

Blockly.JavaScript.field_attr_inc = function (block) {
  var op = block.getFieldValue('OP');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 0;
  return ['v => v ' + op + ' ' + value, Blockly.JavaScript.ORDER_NONE];
};

function createKVConf() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'key';
  var valueType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var colour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Blockly.Msg.ATTRS_HUE;
  var statementType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'KeyValue';

  var arg0 = { name: 'KEY', type: 'field_dropdown' };
  var arg1 = { type: 'input_value', name: 'VALUE', check: valueType };

  if (typeof keys === 'string') {
    keys = [keys];
  }

  if (Array.isArray(keys)) {
    arg0.options = keys.map(function (key) {
      return [Msg.$(key, 'ATTR'), key];
    });
  } else if (typeof keys !== 'string' && keys.prop && keys.options) {
    arg0.options = [[Msg.$(keys.prop, 'ATTR'), keys.prop]];
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(function (s) {
      return [Msg.$(s, 'ATTR_VALUE'), s];
    });
  }

  return {
    message0: Msg.KEYVALUE_MSG0,
    args0: [arg0, arg1],
    colour: colour,
    previousStatement: statementType,
    nextStatement: statementType
  };
}

Blockly.Blocks.field_attr_anchor = {
  init: function init() {
    var _this = this;

    this.jsonInit(createKVConf(['anchorX', 'anchorY'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_ANCHOR_TOOLTIP.replace('%1', Msg.$(_this.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_xy = {
  init: function init() {
    var _this2 = this;

    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_XY_TOOLTIP.replace('%1', Msg.$(_this2.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_size = {
  init: function init() {
    var _this3 = this;

    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_SIZE_TOOLTIP.replace('%1', Msg.$(_this3.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_bgcolor = {
  init: function init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BGCOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_opacity = {
  init: function init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_OPACITY_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_rotate = {
  init: function init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_ROTATE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_scale = {
  init: function init() {
    var _this4 = this;

    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_SCALE_TOOLTIP.replace('%1', Msg.$(_this4.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_translate = {
  init: function init() {
    var _this5 = this;

    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_TRANSLATE_TOOLTIP.replace('%1', Msg.$(_this5.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_skew = {
  init: function init() {
    var _this6 = this;

    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_SKEW_TOOLTIP.replace('%1', Msg.$(_this6.getFieldValue('KEY'), 'ATTR'));
    });
  }
};

Blockly.Blocks.field_attr_borderRadius = {
  init: function init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderWidth = {
  init: function init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderStyle = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'borderStyle', options: ['solid', 'dashed'] }, 'String'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_borderColour = {
  init: function init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_dashOffset = {
  init: function init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_texture = {
  init: function init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTURE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_text = {
  init: function init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontSize = {
  init: function init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSIZE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontFamily = {
  init: function init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontStyle = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'fontStyle', options: ['normal', 'italic', 'oblique'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontVariant = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'fontVariant', options: ['normal', 'small-caps'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fontWeight = {
  init: function init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_textAlign = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'textAlign', options: ['left', 'right', 'center'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineHeight = {
  init: function init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_d = {
  init: function init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_D_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineWidth = {
  init: function init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineDash = {
  init: function init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASH_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineDashOffset = {
  init: function init() {
    this.jsonInit(createKVConf('lineDashOffset', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineCap = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'lineCap', options: ['butt', 'round', 'square'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINECAP_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_lineJoin = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'lineJoin', options: ['miter', 'round', 'bevel'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEJOIN_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_bounding = {
  init: function init() {
    var _this7 = this;

    this.jsonInit(createKVConf({ prop: 'bounding', options: ['box', 'path'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(function () {
      return Msg.FIELD_ATTR_BOUNDING_TOOLTIP.replace('%1', Msg.$(_this7.getFieldValue('VALUE'), 'ATTR_VALUE'));
    });
  }
};

Blockly.Blocks.field_attr_strokeColour = {
  init: function init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_fillColour = {
  init: function init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_cursor = {
  init: function init() {
    this.jsonInit(createKVConf({
      prop: 'cursor',
      options: ['default', 'crosshair', 'pointer', 'move', 'e-resize', 'ne-resize', 'nw-resize', 'n-resize', 'se-resize', 'sw-resize', 's-resize', 'w-resize', 'text', 'wait', 'help']
    }, 'String', Blockly.Msg.ATTRS_HUE));
    this.setTooltip(Msg.FIELD_ATTR_CURSOR_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_draggable = {
  init: function init() {
    this.jsonInit(createKVConf({
      prop: 'draggable',
      options: ['yes', 'no']
    }, 'String', Blockly.Msg.ATTRS_HUE));
    this.setTooltip(Msg.FIELD_ATTR_DRAGGABLE_TOOLTIP);
  }
};

Blockly.Blocks.field_attr_textureFrame = {
  init: function init() {
    this.jsonInit({
      message0: Msg.FIELD_ATTR_TEXTUREFRAME_MSG0,
      args0: [{
        type: 'input_value',
        name: 'FRAME',
        check: 'String'
      }],
      message1: Msg.FIELD_ATTR_TEXTUREFRAME_MSG1,
      args1: [{
        type: 'input_value',
        name: 'DURATION',
        check: 'Number'
      }],
      nextStatement: 'KeyValue',
      previousStatement: 'KeyValue',
      colour: Blockly.Msg.ATTRS_SPRITE_HUE,
      tooltip: Msg.FIELD_ATTR_TEXTUREFRAME_TOOLTIP
    });
  }
};

Blockly.JavaScript.field_attr_textureFrame = function (block) {
  var key = 'textureFrame$' + Math.random().toString(36).slice(2);
  var frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_NONE) || 'null';
  var duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || '100';
  var value = '[' + frame + ', ' + duration + ']';
  return '\n\'' + key + '\': ' + value + ',';
};

function gencode(block) {
  var key = block.getFieldValue('KEY');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '\'' + block.getFieldValue('VALUE') + '\'' || 'null';
  return '\n\'' + key + '\': ' + value + ',';
}

(0, _keys2.default)(Blockly.Blocks).forEach(function (key) {
  if (key.indexOf('field_attr') === 0 && !Blockly.JavaScript[key]) {
    Blockly.JavaScript[key] = gencode;
  }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(49);
var $keys = __webpack_require__(34);

__webpack_require__(152)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(7);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);
var Msg = Blockly.Msg;

var colour = Msg.ANIMATE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

function detectAsync(block) {
  var parent = block.getParent();
  while (parent != null) {
    if (parent.type === 'procedures_defreturn') {
      parent.isAsync_ = true;
      break;
    }
    parent = parent.getParent();
  }
}

Blockly.Blocks.await = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: Msg.AWAIT_MSG0,
      args0: [{ type: 'field_number', name: 'MILLISEC', value: 16 }],
      colour: colour,
      previousStatement: 'Statement',
      nextStatement: null,
      tooltip: function tooltip() {
        return Msg.AWAIT_TOOLTIP.replace('%1', _this.getFieldValue('MILLISEC'));
      }
    });
  }
};

Blockly.JavaScript.await = function (block) {
  var ms = parseInt(block.getFieldValue('MILLISEC'), 10);
  detectAsync(block);
  return 'await spritly.runtime.wait(' + ms + ');\n';
};

Blockly.Blocks.await_frame = {
  init: function init() {
    this.jsonInit({
      message0: Msg.AWAIT_FRAME_MSG0,
      args0: [{ type: 'field_dropdown',
        name: 'LAYER',
        options: [[Msg.COMMON_FGLAYER, 'fglayer'], [Msg.COMMON_BGLAYER, 'bglayer']]
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.AWAIT_FRAME_TOOLTIP
    });
  }
};

Blockly.JavaScript.await_frame = function (block) {
  var layerName = block.getFieldValue('LAYER');
  detectAsync(block);
  return 'await spritly.runtime.scene.layer(\'' + layerName + '\').prepareRender();\n';
};

Blockly.Blocks.sprite_animate = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_ANIMATE_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'ASYNC?',
        options: [[Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT, '-'], [Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT, 'await']]
      }, {
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'input_value',
        name: 'DURATION',
        check: 'Number'
      }],
      message1: Msg.SPRITE_ANIMATE_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'FROM_ATTRS',
        check: 'KeyValue'
      }],
      message2: Msg.SPRITE_ANIMATE_MSG2,
      args2: [{
        type: 'input_statement',
        name: 'TO_ATTRS',
        check: 'KeyValue'
      }],
      message3: Msg.SPRITE_ANIMATE_MSG3,
      args3: [{
        type: 'input_value',
        name: 'EASING',
        check: 'String'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SPRITE_ANIMATE_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_animate = function (block) {
  var isAsync = block.getFieldValue('ASYNC?') === 'await';
  var sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  var duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  var easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  var from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  var to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  var code = sprite + '.animate([{' + from + '\n},{' + to + '\n}], {duration: ' + duration * 1000 + ', fill: \'forwards\', easing: ' + easing + '})';
  if (isAsync) {
    detectAsync(block);
    code = 'if(!' + sprite + '.layer) console.error(\'' + sprite + ' must append to layer before animated!\'); \nawait ' + code + '.finished';
  }

  return code + ';\n';
};

Blockly.Blocks.easing = {
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'EASING',
        options: [[Msg.EASING_OPTION_EASING_EASE, 'ease'], [Msg.EASING_OPTION_EASING_EASEIN, 'ease-in'], [Msg.EASING_OPTION_EASING_EASEOUT, 'ease-out'], [Msg.EASING_OPTION_EASING_EASEINOUT, 'ease-in-out']]
      }],
      colour: colour,
      output: 'String',
      tooltip: Msg.EASING_OPTION_TOOLTIP
    });
  }
};

Blockly.JavaScript.easing = function (block) {
  var easing = block.getFieldValue('EASING');
  return ['\'' + easing + '\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.bezier_easing = {
  init: function init() {
    this.jsonInit({
      message0: Msg.BEZIER_EASING_MSG0,
      args0: [{
        type: 'field_number',
        name: 'X0',
        value: 0.68
      }, {
        type: 'field_number',
        name: 'Y0',
        value: -0.55
      }, {
        type: 'field_number',
        name: 'X1',
        value: 0.265
      }, {
        type: 'field_number',
        name: 'Y1',
        value: 1.55
      }],
      colour: colour,
      output: 'String',
      tooltip: Msg.BEZIER_EASING_TOOLTIP
    });
  }
};

Blockly.JavaScript.bezier_easing = function (block) {
  var x0 = block.getFieldValue('X0');
  var y0 = block.getFieldValue('Y0');
  var x1 = block.getFieldValue('X1');
  var y1 = block.getFieldValue('Y1');
  return ['\'cubic-bezier(' + x0 + ',' + y0 + ',' + x1 + ',' + y1 + ')\'', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var controls_if_init = Blockly.Blocks.controls_if.init;

Blockly.Blocks.controls_if.init = function () {
  controls_if_init.call(this);
  for (var i = 0; i < 20; i++) {
    var input = this.getInput('DO' + i);
    if (input) {
      input.setCheck('Statement');
    } else {
      break;
    }
  }
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.saveConnections = function (containerBlock) {
  var clauseBlock = containerBlock.nextConnection.targetBlock();
  var i = 1;
  var inputIf = void 0,
      inputDo = void 0;
  while (clauseBlock) {
    switch (clauseBlock.type) {
      case 'controls_if_elseif':
        inputIf = this.getInput('IF' + i);
        inputDo = this.getInput('DO' + i);
        inputDo.setCheck('Statement');
        clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
        clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
        i++;
        break;
      case 'controls_if_else':
        inputDo = this.getInput('ELSE');
        inputDo.setCheck('Statement');
        clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
        break;
      default:
        throw TypeError('Unknown block type: ' + clauseBlock.type);
    }
    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
  }
};

var controls_repeat_ext_init = Blockly.Blocks.controls_repeat_ext.init;
Blockly.Blocks.controls_repeat_ext.init = function () {
  controls_repeat_ext_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.JavaScript.controls_repeat_ext = function (block) {
  // Repeat n times.
  var repeats = void 0;
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  var endVarDef = '';
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    endVar = Blockly.JavaScript.variableDB_.getDistinctName('repeat_end', Blockly.Variables.NAME_TYPE);
    endVarDef = ', ' + endVar + ' = ' + repeats;
  }
  code += 'for(let ' + loopVar + ' = 0' + endVarDef + '; ' + loopVar + ' < ' + endVar + '; ' + loopVar + '++){\n' + branch + '}\n';

  return code;
};

var controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init;
Blockly.Blocks.controls_whileUntil.init = function () {
  controls_whileUntil_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.Blocks.list_foreach = {
  init: function init() {
    this.jsonInit({
      message0: Msg.LIST_FOREACH_MSG0,
      args0: [{
        type: 'input_value',
        name: 'LIST',
        check: ['String', 'Array']
      }],
      message1: Msg.LIST_FOREACH_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'DO',
        check: 'Statement'
      }],
      message2: Msg.LIST_FOREACH_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ITEM',
        text: 'item'
      }, {
        type: 'field_dropdown',
        name: 'INDEX',
        options: ['i', 'j', 'k', 'l', 'm'].map(function (s) {
          return [s, s];
        })
      }],
      colour: Msg.FLOWS_HUE,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.LIST_FOREACH_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_foreach = function (block) {
  var list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_NONE) || '[]';
  var item = block.getFieldValue('ITEM');
  var index = block.getFieldValue('INDEX');
  var code = Blockly.JavaScript.statementToCode(block, 'DO');

  var indent = /^([\s\t]+)/.exec(code);
  if (indent) indent = '\n' + indent[0];else indent = '\n' + Blockly.Generator.prototype.INDENT;
  if (code) code = code + '\n';

  return 'await ' + list + '.reduce(async function($$prestep, ' + item + ', ' + index + ') {' + indent + 'await $$prestep;\n' + code + '}, null);\n';
};

Blockly.Blocks.list_index = {
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'INDEX',
        options: ['i', 'j', 'k', 'l', 'm'].map(function (s) {
          return [s, s];
        })
      }],
      output: 'Number',
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_INDEX_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_index = function (block) {
  var index = block.getFieldValue('INDEX');
  return [index, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.list_item = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'ITEM',
        options: function options() {
          var blocks = _this.workspace.getBlocksByType('list_foreach');
          if (blocks.length) {
            return blocks.map(function (block) {
              var name = block.getFieldValue('ITEM');
              return [name, name];
            });
          }
          return [['item', 'item']];
        }
      }],
      output: null,
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_ITEM_TOOLTIP
    });
  }
};

Blockly.JavaScript.list_item = function (block) {
  var index = block.getFieldValue('ITEM');
  return [index, Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;

Blockly.Blocks.nil = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'VALUE',
        options: [[Msg.LITERAL_NULL, 'null'], [Msg.LITERAL_UNDEFINED, 'undefined']]
      }],
      colour: Msg.LITERAL_HUE
    });
    this.setOutput(true);
    this.setTooltip(function () {
      return Msg.NIL_TOOLTIP.replace('%1', _this.getFieldValue('VALUE'));
    });
  }
};

Blockly.JavaScript.nil = function (block) {
  var value = block.getFieldValue('VALUE');
  return [value, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.boolean = {
  init: function init() {
    Blockly.Blocks.logic_boolean.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.boolean = Blockly.JavaScript.logic_boolean;

Blockly.Blocks.number = {
  init: function init() {
    Blockly.Blocks.math_number.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.number = Blockly.JavaScript.math_number;

Blockly.Blocks.string = {
  init: function init() {
    this.jsonInit({
      message0: '%1 %2',
      args0: [{ type: 'field_input', name: 'TEXT', text: '' }, { type: 'input_value', name: 'NEXT' }],
      output: 'String',
      colour: Blockly.Msg.LITERAL_HUE,
      helpUrl: Blockly.Msg.TEXT_TEXT_HELPURL,
      tooltip: Blockly.Msg.TEXT_TEXT_TOOLTIP,
      extensions: ['text_quotes', 'parent_tooltip_when_inline']
    });
  }
};

Blockly.JavaScript.string = function (block) {
  var code = Blockly.JavaScript.text(block);
  var next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  if (next) {
    return [code[0] + ' + ' + next, code[1]];
  }
  return code;
};

Blockly.Blocks.object_create = {
  init: function init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS').setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Msg.LITERAL_HUE);
    this.setTooltip(Msg.OBJECT_CREATE_TOOLTIP);
  }
};
Blockly.JavaScript.object_create = function (block) {
  var fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  return ['{' + fields + '\n}', Blockly.JavaScript.ORDER_MEMBER];
};

var colour_picker_init = Blockly.Blocks.colour_picker.init;

Blockly.Blocks.colour_picker.init = function () {
  colour_picker_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.loop_get_index = {
  init: function init() {
    this.jsonInit({
      message0: Msg.LOOP_GET_INDEX_MSG0,
      colour: Msg.LITERAL_HUE,
      output: 'Number',
      tooltip: Msg.LOOP_GET_INDEX_TOOLTIP
    });
  }
};

Blockly.JavaScript.loop_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.SIGNALS_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

function listSignal(workspace) {
  for (var _len = arguments.length, extras = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extras[_key - 1] = arguments[_key];
  }

  var signals = ['START', 'STORE_PROPERTY_UPDATE', 'LAYER_CLICKED', 'KEYDOWN', 'KEYUP', 'ELEMENT_CREATED', 'ELEMENT_DESTROYED'];
  return function () {
    var blocks = workspace.getBlocksByType('signal_onevent_send').map(function (block) {
      return block.getFieldValue('SIGNAL');
    });
    return [].concat(signals, extras, (0, _toConsumableArray3.default)(blocks)).map(function (s) {
      return [Msg.$(s, 'SIGNAL_DO_OPTION_SIGNAL'), s];
    });
  };
}

function listSprite(workspace) {
  var blocks = workspace.getBlocksByType('signal_new_sprite_as_receiver').map(function (block) {
    return block.getFieldValue('ID');
  });
  if (blocks.length > 0) {
    return blocks.map(function (s) {
      return [s, s];
    });
  }
  return [['', '']];
}

Blockly.Blocks.signal_do = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SIGNAL_DO_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal(this.workspace)
      }],
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_DO_TOOLTIP
    });
  },
  scope: function scope(generator, code) {
    var signal = this.getFieldValue('SIGNAL');
    return 'spritly.runtime.Signal.on(\'' + signal + '\', async function(sender, data){\n  let target = data[spritly.runtime.Symbols.target] || sender;\n  let receiver = target;\n\n' + generator.indent(code) + '});';
  }
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init: function init() {
    var id = 'Sprite_' + Math.random().toString().slice(2, 7);
    this.jsonInit({
      message0: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal(this.workspace)
      }],
      message1: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [[Msg.COMMON_SPRITE, 'Sprite'], [Msg.COMMON_LABEL, 'Label'], [Msg.COMMON_PATH, 'Path']]
      }],
      message2: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ID',
        text: id
      }],
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
  },
  updated: function updated(event) {
    if (event.element === 'field' && event.name === 'ID') {
      var sprites = this.workspace.getBlocksByType('sprite');
      sprites.forEach(function (sprite) {
        var key = sprite.getFieldValue('SPRITE');
        if (key === event.oldValue) {
          sprite.setFieldValue(event.newValue, 'SPRITE');
        }
      });
    }
  },
  destroyed: function destroyed() {
    var id = this.getFieldValue('ID');
    var sprites = this.workspace.getBlocksByType('sprite');
    sprites.forEach(function (sprite) {
      var key = sprite.getFieldValue('SPRITE');
      if (key === id) {
        sprite.setDisabled(true);
        sprite.setWarningText(Blockly.Msg.SPRITE_DELETED);
      }
    });
  },
  scope: function scope(generator, code) {
    var signal = this.getFieldValue('SIGNAL');
    var id = this.getFieldValue('ID');
    var nodeType = this.getFieldValue('TYPE');
    return 'spritly.runtime.Signal.on(\'' + signal + '\', async function(sender, data){\n  let receiver = spritly.runtime.ElementList.getElementById(\'' + id + '\');\n  if(receiver == null){\n    receiver = spritly.runtime.spritejs.createElement(\'' + nodeType + '\', {id: \'' + id + '\'});\n    spritly.runtime.ElementList.add(receiver);\n  }\n  let target = data[spritly.runtime.Symbols.target] || receiver;\n\n' + generator.indent(code) + '});';
  }
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal(this.workspace, 'ELEMENT_CREATED')
      }],
      message1: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'ID',
        options: function options() {
          return listSprite(_this.workspace);
        }
      }],
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
  },
  scope: function scope(generator, code) {
    var signal = this.getFieldValue('SIGNAL');
    var id = this.getFieldValue('ID');

    return 'spritly.runtime.Signal.on(\'' + signal + '\', async function(sender, data){\n  const receiver = spritly.runtime.ElementList.getElementById(\'' + id + '\');\n  let target = data[spritly.runtime.Symbols.target] || receiver;\n\n' + generator.indent(code) + ';});';
  }
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.get_data = {
  init: function init() {
    this.jsonInit({
      message0: Msg.GET_DATA_MSG0,
      colour: colour,
      output: 'Object',
      tooltip: Msg.GET_DATA_TOOLTIP
    });
  }
};

Blockly.JavaScript.get_data = function (block) {
  return ['data', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.get_data_prop = {
  init: function init() {
    this.jsonInit({
      message0: Msg.GET_DATA_PROP_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: ['offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'buttons', 'key', 'keyCode'].map(function (s) {
          return [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s];
        })
      }],
      colour: colour,
      output: ['Number', 'String', 'Boolean'],
      tooltip: Msg.GET_DATA_PROP_TOOLTIP
    });
  }
};

Blockly.JavaScript.get_data_prop = function (block) {
  var prop = block.getFieldValue('PROP');
  return ['data[spritly.runtime.Symbols.' + prop + ']', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.get_store_data_prop = {
  init: function init() {
    this.jsonInit({
      message0: Msg.GET_DATA_PROP_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: ['property', 'oldValue', 'newValue'].map(function (s) {
          return [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s];
        })
      }],
      colour: colour,
      output: null,
      tooltip: Msg.GET_DATA_PROP_TOOLTIP2
    });
  }
};

Blockly.JavaScript.get_store_data_prop = function (block) {
  var prop = block.getFieldValue('PROP');
  return ['data[spritly.runtime.Symbols.' + prop + ']', Blockly.JavaScript.ORDER_MEMBER];
};

var events = ['immediately', 'onclick', 'ondblclick', 'onmousedown', 'onmousemove', 'onmouseup', 'onmouseenter', 'onmouseleave', 'ontap', 'onlongtap', 'ondragged', 'ondraggedonto', 'oncollision'];

Blockly.Blocks.signal_onevent_send = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SIGNAL_ONEVENT_SEND_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'field_dropdown',
        name: 'EVENT',
        options: events.map(function (s) {
          return [Msg.$(s, 'EVENT'), s];
        })
      }, {
        type: 'field_input',
        name: 'SIGNAL',
        text: 'MY_SIGNAL'
      }],
      message1: Msg.SIGNAL_ONEVENT_SEND_MSG1,
      args1: [{
        type: 'input_statement',
        name: 'DATA',
        check: 'KeyValue'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_ONEVENT_SEND_TOOLTIP + '\n' + Msg.SENDER_RECEIVER_TARGET_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_onevent_send = function (block) {
  var target = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  var event = block.getFieldValue('EVENT');
  var signal = block.getFieldValue('SIGNAL');
  var data = Blockly.JavaScript.statementToCode(block, 'DATA');

  if (event !== 'immediately' && event !== 'oncollision') {
    var eventName = event.slice(2);
    return target + '.on(\'' + eventName + '\', \n  evt => {\n    const {altKey, buttons, ctrlKey, shiftKey} = evt.originalEvent;\n    const runtime = spritly.runtime;\n    runtime.Signal.send(\'' + signal + '\', ' + target + ',\n      Object.assign(\n        {\n          [runtime.Symbols.target]: evt.target,\n          [runtime.Symbols.offsetX]: evt.offsetX,\n          [runtime.Symbols.offsetY]: evt.offsetY,\n          [runtime.Symbols.layerX]: evt.layerX,\n          [runtime.Symbols.layerY]: evt.layerY,\n          [runtime.Symbols.altKey]: altKey,\n          [runtime.Symbols.buttons]: buttons,\n          [runtime.Symbols.ctrlKey]: ctrlKey,\n          [runtime.Symbols.shiftKey]: shiftKey,\n        },\n        {' + data + '},\n      ));\n  });';
  }
  if (event === 'oncollision') {
    return target + '.on(\'update\', () => {\n  spritly.runtime.getCollisions(' + target + ').forEach((s) => {\n    spritly.runtime.Signal.send(\'' + signal + '\', ' + target + ', {[spritly.runtime.Symbols.target]: s});      \n  });\n});\n' + target + '.forceUpdate();\n';
  }
  return 'spritly.runtime.Signal.send(\'' + signal + '\', ' + target + ', {' + data + '});\n';
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.SPRITE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

Blockly.Blocks.sprite = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'SPRITE',
        options: function options() {
          var blocks = _this.workspace.getBlocksByType('signal_new_sprite_as_receiver').map(function (block) {
            return block.getFieldValue('ID');
          });
          return [[Msg.COMMON_TARGET, 'target'], [Msg.COMMON_SENDER, 'sender'], [Msg.COMMON_RECEIVER, 'receiver']].concat((0, _toConsumableArray3.default)(blocks.map(function (s) {
            return [s, s];
          })));
        }
      }],
      colour: colour,
      output: 'Sprite',
      tooltip: Msg.SPRITE_MSG0_TOOLTIP
    });
  },
  updated: function updated(event) {
    if (event.element === 'field' && event.name === 'SPRITE') {
      this.setWarningText(null);
      this.setDisabled(false);
    }
  }
};

Blockly.JavaScript.sprite = function (block) {
  var sprite = block.getFieldValue('SPRITE');
  if (sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = 'spritly.runtime.ElementList.getElementById(\'' + sprite + '\')';
  }

  return [sprite, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_append_to = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_APPEND_TO_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, { type: 'field_dropdown',
        name: 'LAYER',
        options: [[Msg.COMMON_FGLAYER, 'fglayer'], [Msg.COMMON_BGLAYER, 'bglayer']]
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SPRITE_APPEND_TO_TOOLTIP + '\n' + Msg.FGLAYER_BGLAYER_TOOTIP
    });
  }
};

Blockly.JavaScript.sprite_append_to = function (block) {
  var sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  var layerName = block.getFieldValue('LAYER');

  return 'spritly.runtime.scene.layer(\'' + layerName + '\').append(' + sprite + ');\n';
};

Blockly.Blocks.sprite_attrs = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_ATTRS_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }],
      message1: '%1',
      args1: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SPRITE_ATTRS_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_attrs = function (block) {
  var sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  var attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  return sprite + '.attr(spritly.runtime.parse_attr(' + sprite + ', {' + attrs + '\n}));\n';
};

Blockly.Blocks.sprite_create_attrs = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_CREATE_ATTRS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [[Msg.COMMON_SPRITE, 'Sprite'], [Msg.COMMON_LABEL, 'Label'], [Msg.COMMON_PATH, 'Path']]
      }],
      message1: Msg.SPRITE_CREATE_ATTRS_MSG1,
      args1: [{
        type: 'field_input',
        name: 'NAME',
        text: 'MyName'
      }],
      message2: '%1',
      args2: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SPRITE_CREATE_ATTRS_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_create_attrs = function (block) {
  var type = block.getFieldValue('TYPE');
  var name = block.getFieldValue('NAME');
  var attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return 'spritly.runtime.ElementList.add((function () {\n  const sprite = spritly.runtime.spritejs.createElement(\'' + type + '\');\n  sprite.attr(spritly.runtime.parse_attr(sprite, {name: \'' + name + '\'}, {' + attrs.split(/\n/g).join('\n' + Blockly.Generator.prototype.INDENT) + '\n  }));\n  return sprite;\n}()));\n';
};

Blockly.Blocks.sprite_each_elements_named = {
  init: function init() {
    var _this2 = this;

    this.jsonInit({
      message0: Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'NAME',
        options: function options() {
          var blocks = _this2.workspace.getBlocksByType('sprite_create_attrs').map(function (block) {
            return block.getFieldValue('NAME');
          });
          if (blocks.length > 0) {
            return blocks.map(function (s) {
              return [s, s];
            });
          }
          return [['', '']];
        }
      }],
      colour: colour,
      output: 'Array',
      tooltip: Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  var name = block.getFieldValue('NAME');
  return ['spritly.runtime.ElementList.getElementsByName(\'' + name + '\')', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_destroy = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_DESTROY_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.SPRITE_DESTROY_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_destroy = function (block) {
  var sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return 'spritly.runtime.ElementList.remove(' + sprite + ');\n';
};

function attrs_dropdown() {
  var attrs = ['id', 'name', 'anchorX', 'anchorY', 'x', 'y', 'width', 'height', 'bgcolor', 'opacity', 'rotate', 'scaleX', 'scaleY', 'translateX', 'translateY', 'skewX', 'skewY', 'borderRadius', 'borderWidth', 'borderStyle', 'borderColor', 'dashOffset', 'texture', 'text', 'fontSize', 'fontFamily', 'fontStyle', 'fontVariant', 'fontWeight', 'textAlign', 'lineHeight', 'd', 'lineWidth', 'lineDash', 'lineDashOffset', 'lineCap', 'lineJoin', 'bounding', 'strokeColor', 'fillColor'];
  return attrs.map(function (s) {
    return [Msg.$(s, 'ATTR'), s];
  });
}

Blockly.Blocks.sprite_get_attr = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_GET_ATTR_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite'
      }, {
        type: 'field_dropdown',
        name: 'ATTR',
        options: attrs_dropdown
      }],
      colour: colour,
      output: true,
      tooltip: Msg.SPRITE_GET_ATTR_TOOLTIP
    });
  }
};

Blockly.JavaScript.sprite_get_attr = function (block) {
  var sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  var attr = block.getFieldValue('ATTR');
  return ['spritly.runtime.get_attr(' + sprite + ', \'' + attr + '\')', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.LOG_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

Blockly.Blocks.log_log = {
  init: function init() {
    this.jsonInit({
      message0: '📋 %1 %2',
      args0: [{
        type: 'field_dropdown',
        name: 'LOG',
        options: [[Msg.LOG_OPTION_LOG_LOG, 'log'], [Msg.LOG_OPTION_LOG_WARN, 'warn'], [Msg.LOG_OPTION_LOG_ERROR, 'error']]
      }, {
        type: 'input_value',
        name: 'MSG'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.LOG_TOOLTIP
    });
  }
};

Blockly.JavaScript.log_log = function (block) {
  var msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  var level = block.getFieldValue('LOG');
  return 'console.' + level + '(' + msg + ');\n';
};

Blockly.Blocks.log_alert = {
  init: function init() {
    this.jsonInit({
      message0: Msg.LOG_ALERT_MSG0,
      args0: [{
        type: 'input_value',
        name: 'MSG'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement,
      tooltip: Msg.LOG_ALERT_TOOLTIP
    });
  }
};

Blockly.JavaScript.log_alert = function (block) {
  var msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  return 'alert(' + msg + ');\n';
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.MATH_HUE;

Blockly.Blocks.random_string = {
  init: function init() {
    this.jsonInit({
      message0: Msg.RANDOM_STRING_MSG0,
      colour: colour,
      output: 'String',
      tooltip: Msg.RANDOM_STRING_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_string = function (block) {
  return ['\'Math.random().toString(36).slice(2)\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_rgb = {
  init: function init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_RGB_MSG0,
      colour: colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_RGB_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_colour_rgb = function (block) {
  return ['spritly.runtime.random_color()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_hue = {
  init: function init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_HUE_MSG0,
      message1: Msg.RANDOM_COLOUR_HUE_MSG1,
      args1: [{
        type: 'field_number',
        name: 'S',
        value: 100
      }, {
        type: 'field_number',
        name: 'L',
        value: 50
      }, {
        type: 'field_number',
        name: 'A',
        value: 1.0
      }],
      colour: colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_HUE_TOOLTIP
    });
  }
};

Blockly.JavaScript.random_colour_hue = function (block) {
  var h = Math.floor(Math.random() * 360);
  var s = block.getFieldValue('S');
  var l = block.getFieldValue('L');
  var a = block.getFieldValue('A');

  return ['spritly.runtime.random_color_hue(' + s + ',' + l + ',' + a + ')', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Msg.LISTS_HUE;

Blockly.Blocks.lists_create_range = {
  init: function init() {
    this.jsonInit({
      message0: Msg.LISTS_CREATE_RANGE_MSG0,
      message1: Msg.LISTS_CREATE_RANGE_MSG1,
      args1: [{
        type: 'input_value',
        name: 'FROM',
        check: 'Number'
      }, {
        type: 'input_value',
        name: 'TO',
        check: 'Number'
      }],
      inputsInline: true,
      output: 'Array',
      colour: colour,
      tooltip: Msg.LISTS_CREATE_RANGE_TOOLTIP
    });
  }
};

Blockly.JavaScript.lists_create_range = function (block) {
  var from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

  return ['(Array.from({length: Math.abs(' + from + ' - ' + to + ') + 1}).map((_, i) => ' + from + ' + (' + from + ' - ' + to + ' > 0 ? -1 : 1) * i))', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;

Blockly.Blocks.key_value = {
  init: function init() {
    this.jsonInit({
      message0: Msg.KEYVALUE_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Msg.GETTER_SETTER_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue'
    });
    this.setTooltip(Msg.KEYVALUE_TOOLTIP);
  }
};

Blockly.JavaScript.key_value = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_NONE) || 'key';
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return '\n' + key + ': ' + value + ',';
};

Blockly.Blocks.object_get_prop = {
  init: function init() {
    this.jsonInit({
      message0: Msg.OBJECT_GET_PROP_MSG0,
      args0: [{
        type: 'input_value',
        name: 'OBJECT'
      }, {
        type: 'input_value',
        name: 'PROP',
        check: 'String'
      }],
      inputsInline: true,
      output: null,
      colour: Msg.GETTER_SETTER_HUE
    });
    this.setTooltip(Msg.OBJECT_GET_PROP_TOOLTIP);
  }
};

Blockly.JavaScript.object_get_prop = function (block) {
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || 'Object()';
  var propName = Blockly.JavaScript.valueToCode(block, 'PROP', Blockly.JavaScript.ORDER_NONE) || 'key';

  return [object + '[' + propName + ']', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;
var colour = Msg.STORE_HUE;

Blockly.Blocks.store_set = {
  init: function init() {
    this.jsonInit({
      message0: Msg.STORE_SET_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      inputsInline: true,
      colour: colour,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.STORE_SET_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_set = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';

  return 'spritly.runtime.Store.set(' + key + ', ' + value + ', target);\n';
};

Blockly.Blocks.store_get = {
  init: function init() {
    this.jsonInit({
      message0: Msg.STORE_GET_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }],
      colour: colour,
      output: null,
      tooltip: Msg.STORE_GET_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_get = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return ['spritly.runtime.Store.get(' + key + ')', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.store_delete = {
  init: function init() {
    this.jsonInit({
      message0: Msg.STORE_DELETE_MSG0,
      args0: [{
        type: 'input_value',
        name: 'KEY',
        check: 'String'
      }],
      colour: colour,
      output: null,
      tooltip: Msg.STORE_DELETE_TOOLTIP
    });
  }
};

Blockly.JavaScript.store_delete = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return ['spritly.runtime.Store.delete(' + key + ')', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);
var Msg = Blockly.Msg;

var colour = Msg.SOUND_HUE;

Blockly.Blocks.sound_play = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SOUND_PLAY_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SOUND',
        check: 'String'
      }],
      colour: colour,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.SOUND_PLAY_TOOLTIP
    });
  }
};

Blockly.JavaScript.sound_play = function (block) {
  var src = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_NONE);
  return 'spritly.runtime.Audio.play(' + src + ');\n';
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(145);

var Msg = Blockly.Msg;

Blockly.Blocks.procedures_mutatorarg.validator_ = function (varName) {
  var outerWs = Blockly.Mutator.findParentWs(this.sourceBlock_.workspace);
  varName = varName.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
  if (!varName) {
    return null;
  }
  var model = outerWs.getVariable(varName, '');
  if (model && model.name !== varName) {
    // Rename the variable (case change)
    outerWs.renameVarById(model.getId(), varName);
  }
  if (!model) {
    model = outerWs.createVariable(varName, null, 'ARGS$$' + Math.random().toString(36).slice(2));
    if (model && this.createdVariables_) {
      this.createdVariables_.push(model);
    }
  }
  return varName;
};

/* eslint-disable */
Blockly.Blocks.procedures_defreturn.updateVarName = function (variable) {
  var newName = variable.name;
  var change = false;
  for (var i = 0; i < this.argumentVarModels_.length; i++) {
    if (this.argumentVarModels_[i].getId() == variable.getId()) {
      var oldName = this.arguments_[i];
      this.arguments_[i] = newName;
      change = true;
    }
  }
  if (change) {
    this.displayRenamedVar_(oldName, newName);
    Blockly.Procedures.mutateCallers(this);
  }
};

Blockly.Blocks.procedures_callreturn.setProcedureParameters_ = function (paramNames, paramIds) {
  // Data structures:
  // this.arguments = ['x', 'y']
  //     Existing param names.
  // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
  //     Look-up of paramIds to connections plugged into the call block.
  // this.quarkIds_ = ['piua', 'f8b_']
  //     Existing param IDs.
  // Note that quarkConnections_ may include IDs that no longer exist, but
  // which might reappear if a param is reattached in the mutator.
  var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace);
  var mutatorOpen = defBlock && defBlock.mutator && defBlock.mutator.isVisible();
  if (!mutatorOpen) {
    this.quarkConnections_ = {};
    this.quarkIds_ = null;
  }
  if (!paramIds) {
    // Reset the quarks (a mutator is about to open).
    return;
  }
  // Test arguments (arrays of strings) for changes. '\n' is not a valid
  // argument name character, so it is a valid delimiter here.
  if (paramNames.join('\n') == this.arguments_.join('\n')) {
    // No change.
    this.quarkIds_ = paramIds;
    return;
  }
  if (paramIds.length != paramNames.length) {
    throw RangeError('paramNames and paramIds must be the same length.');
  }
  this.setCollapsed(false);
  if (!this.quarkIds_) {
    // Initialize tracking for this block.
    this.quarkConnections_ = {};
    this.quarkIds_ = [];
  }
  // Switch off rendering while the block is rebuilt.
  var savedRendered = this.rendered;
  this.rendered = false;
  // Update the quarkConnections_ with existing connections.
  for (var i = 0; i < this.arguments_.length; i++) {
    var input = this.getInput('ARG' + i);
    if (input) {
      var connection = input.connection.targetConnection;
      this.quarkConnections_[this.quarkIds_[i]] = connection;
      if (mutatorOpen && connection && paramIds.indexOf(this.quarkIds_[i]) == -1) {
        // This connection should no longer be attached to this block.
        connection.disconnect();
        connection.getSourceBlock().bumpNeighbours_();
      }
    }
  }
  // Rebuild the block's arguments.
  this.arguments_ = [].concat(paramNames);
  // And rebuild the argument model list.

  // this.argumentVarModels_ = [];
  // for (var i = 0; i < this.arguments_.length; i++) {
  //   var variable = Blockly.Variables.getOrCreateVariablePackage(
  //       this.workspace, null, this.arguments_[i], '');
  //   this.argumentVarModels_.push(variable);
  // }

  this.updateShape_();
  this.quarkIds_ = paramIds;
  // Reconnect any child blocks.
  if (this.quarkIds_) {
    for (var i = 0; i < this.arguments_.length; i++) {
      var quarkId = this.quarkIds_[i];
      if (quarkId in this.quarkConnections_) {
        var connection = this.quarkConnections_[quarkId];
        if (!Blockly.Mutator.reconnect(connection, this, 'ARG' + i)) {
          // Block no longer exists or has been attached elsewhere.
          delete this.quarkConnections_[quarkId];
        }
      }
    }
  }
  // Restore rendering and show the changes.
  this.rendered = savedRendered;
  if (this.rendered) {
    this.render();
  }
};

Blockly.JavaScript.procedures_defreturn = function (block) {
  // Define a procedure with a return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    var id = block.id.replace(/\$/g, '$$$$'); // Issue 251.
    branch = Blockly.JavaScript.prefixLines(Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g, '\'' + id + '\''), Blockly.JavaScript.INDENT) + branch;
  }
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = Blockly.JavaScript.INDENT + 'return ' + returnValue + ';\n';
  }
  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i], Blockly.Variables.NAME_TYPE);
  }

  var asyncTag = '';
  if (this.isAsync_) {
    asyncTag = 'async ';
    funcName = funcName.replace(/^⌛️/, '');
  }

  var code = asyncTag + 'function ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Blockly.JavaScript.definitions_['%' + funcName] = code;
  return null;
};
/* eslint-enable */

Blockly.Blocks.procedures_await = {
  init: function init() {
    this.jsonInit({
      message0: Msg.PROCEDURES_AWAIT_MSG0,
      args0: [{
        type: 'input_value',
        name: 'PROMISE'
      }],
      colour: Msg.PROCEDURE_HUE,
      output: null,
      tooltip: Msg.PROCEDURES_AWAIT_TOOLTIP
    });
  }
};

Blockly.JavaScript.procedures_await = function (block) {
  var promise = Blockly.JavaScript.valueToCode(block, 'PROMISE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return ['(await ' + promise + ')', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.procedures_call = {
  init: function init() {
    this.jsonInit({
      message0: '%1 %2',
      args0: [{
        type: 'field_dropdown',
        name: 'CALLTYPE',
        options: [[Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT, 'void'], [Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT, 'await']]
      }, {
        type: 'input_value',
        name: 'PROC'
      }],
      colour: Msg.PROCEDURE_HUE,
      nextStatement: 'Statement',
      previousStatement: 'Statement'
    });
  }
};

Blockly.JavaScript.procedures_call = function (block) {
  var type = block.getFieldValue('CALLTYPE');
  var funcall = Blockly.JavaScript.valueToCode(block, 'PROC', Blockly.JavaScript.ORDER_NONE) || 'null';
  return type + ' ' + funcall + ';\n';
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(166);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);

Blockly.Generator.prototype.indent = function (code) {
  return this.prefixLines(code, this.INDENT);
};

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.JavaScript.init = function (workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.JavaScript.definitions_ = (0, _create2.default)(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.JavaScript.functionNames_ = (0, _create2.default)(null);

  if (!Blockly.JavaScript.variableDB_) {
    Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);
  } else {
    Blockly.JavaScript.variableDB_.reset();
  }

  Blockly.JavaScript.variableDB_.setVariableMap(workspace.getVariableMap());

  var defvars = [];
  // Add developer variables (not created or named by the user).
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    defvars.push(Blockly.JavaScript.variableDB_.getName(devVarList[i], Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  // Add user variables, but only ones that are being used.
  var variables = Blockly.Variables.allUsedVarModels(workspace).filter(function (v) {
    return v.getId().indexOf('ARGS$$') !== 0;
  });
  for (var _i = 0; _i < variables.length; _i++) {
    defvars.push(Blockly.JavaScript.variableDB_.getName(variables[_i].getId(), Blockly.Variables.NAME_TYPE));
  }

  // Declare all of the variables.
  if (defvars.length) {
    Blockly.JavaScript.definitions_.variables = 'let ' + defvars.join(', ') + ';';
  }
};

Blockly.Generator.prototype.workspaceToCode = function (workspace) {
  if (!workspace) {
    // Backwards compatibility from before there could be multiple workspaces.
    console.warn('No workspace specified in workspaceToCode call.  Guessing.');
    workspace = Blockly.getMainWorkspace();
  }
  var code = [];
  this.init(workspace);

  var blocks = workspace.getTopBlocks(true);

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var line = this.blockToCode(block);
    if (!block.disabled && block.scope) {
      if (Array.isArray(line)) {
        // Value blocks return tuples of code and operator order.
        // Top-level blocks don't care about operator order.
        line = line[0];
      }
      if (line != null) {
        if (line === '') line = 'void(0);\n';
        if (block.outputConnection) {
          // This block is a naked value.  Ask the language's code generator if
          // it wants to append a semicolon, or something.
          line = this.scrubNakedValue(line);
        }
        if (typeof block.scope === 'function') {
          line = block.scope(this, line);
        }
        code.push(line);
        code.push('\n');
      }
    }
  }
  code = code.slice(0, -1).join('\n'); // Blank line between each section.
  code = this.finish(code);
  // Final scrubbing of whitespace.
  code = code.replace(/^\s+\n/, '');
  code = code.replace(/\n\s+$/, '\n');
  code = code.replace(/[ \t]+\n/g, '\n');
  return code;
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(168);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(50) });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(170);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(172);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(176);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(177);

var _createClass3 = _interopRequireDefault(_createClass2);

var _block3 = __webpack_require__(178);

var _block4 = _interopRequireDefault(_block3);

var _packer = __webpack_require__(180);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(145);
Blockly.BlockSvg.START_HAT = true;
Blockly.Field.prototype.maxDisplayLength = 20;

function setCollapsedAll(block, isCollapsed) {
  var nextBlock = block;

  do {
    nextBlock = nextBlock.getNextBlock();
    if (nextBlock) nextBlock.setCollapsed(isCollapsed);
  } while (nextBlock);
}

var Application = function () {
  function Application(container) {
    (0, _classCallCheck3.default)(this, Application);

    if (typeof container === 'string') {
      container = document.getElementById(container) || document.querySelector(container);
    }
    this.container = container;
  }

  (0, _createClass3.default)(Application, [{
    key: 'initWorkspace',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
        var config, _ref2, externals, toolbox, toolboxSrc, blockXml, preload_res, scriptsBefore, scriptsAfter, workspace, lastClickedTime, changedHandler, toolboxWorkspace;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.workspace) {
                  this.workspace.dispose();
                }

                config = options.config;

                delete options.config;

                _context.next = 5;
                return (0, _block4.default)(config);

              case 5:
                _ref2 = _context.sent;
                externals = _ref2.externals;
                toolbox = _ref2.toolbox;
                toolboxSrc = _ref2.toolboxSrc;
                blockXml = _ref2.blockXml;
                preload_res = _ref2.preload_res;
                scriptsBefore = _ref2.scriptsBefore;
                scriptsAfter = _ref2.scriptsAfter;

                options.toolbox = toolbox;

                this.toolboxSrc = toolboxSrc;
                this.preload_res = preload_res;
                this.externals = externals;
                this.scriptsBefore = scriptsBefore;
                this.scriptsAfter = scriptsAfter;

                workspace = Blockly.inject(this.container, options);


                Blockly.Xml.domToWorkspace(blockXml.documentElement, workspace);

                workspace.getAllBlocks().forEach(function (block) {
                  var parent = block.getParent();
                  if (!parent) {
                    // is root block
                    var isCollapsed = block.isCollapsed();
                    if (isCollapsed) setCollapsedAll(block, true);
                  }
                });

                lastClickedTime = null;

                workspace.addChangeListener(function (event) {
                  if (event.type === Blockly.Events.UI && event.element === 'click') {
                    var clickedTime = Date.now();
                    if (lastClickedTime && clickedTime - lastClickedTime <= 300) {
                      lastClickedTime = null;
                      var block = workspace.getBlockById(event.blockId);
                      var isCollapsed = block.isCollapsed();
                      var parent = block.getParent();
                      if (!parent) {
                        setCollapsedAll(block, !isCollapsed);
                      }
                      block.setCollapsed(!isCollapsed);
                    }
                    lastClickedTime = clickedTime;
                  }
                  if (event.type === Blockly.Events.CHANGE && event.element === 'collapsed') {
                    var _block = workspace.getBlockById(event.blockId);
                    var _parent = _block.getParent();
                    if (!_parent) {
                      var _isCollapsed = event.newValue;
                      setCollapsedAll(_block, _isCollapsed);
                    }
                  }
                });

                changedHandler = function changedHandler(event) {
                  if (event instanceof Blockly.Events.Change) {
                    var id = event.blockId;
                    var block = void 0;
                    if (event.workspaceId === workspace.id) {
                      block = workspace.getBlockById(id);
                    } else if (workspace.toolboxWorkspace && event.workspaceId === workspace.toolboxWorkspace.id) {
                      block = workspace.toolboxWorkspace.getBlockById(id);
                    }
                    if (block && block.updated) {
                      if (!block.oldValue_) {
                        block.oldValue_ = event.oldValue;
                      }
                      clearTimeout(block.changeIdTimer_);
                      block.changeIdTimer_ = setTimeout(function () {
                        var oldValue = block.oldValue_;
                        delete block.oldValue_;
                        event.oldValue = oldValue;
                        block.updated(event);
                      }, 500);
                    }
                  } else if (event instanceof Blockly.Events.Create) {
                    var _id = event.blockId;
                    var _block2 = void 0;
                    if (event.workspaceId === workspace.id) {
                      _block2 = workspace.getBlockById(_id);
                    } else if (workspace.toolboxWorkspace && event.workspaceId === workspace.toolboxWorkspace.id) {
                      _block2 = workspace.toolboxWorkspace.getBlockById(_id);
                    }
                    if (_block2.created) {
                      _block2.created(event);
                    }
                    var blocks = _block2.getAllDescendants();
                    blocks.forEach(function (block) {
                      if (block.created) {
                        block.created(event);
                      }
                    });
                  }
                };

                workspace.addChangeListener(changedHandler);

                toolboxWorkspace = workspace.toolboxWorkspace;

                if (toolboxWorkspace) {
                  toolboxWorkspace.addChangeListener(changedHandler);
                }

                this.workspace = workspace;
                return _context.abrupt('return', workspace);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initWorkspace(_x) {
        return _ref.apply(this, arguments);
      }

      return initWorkspace;
    }()
  }, {
    key: 'xml',
    get: function get() {
      if (!this.workspace) return '';
      var workspace = this.workspace,
          preload_res = this.preload_res,
          scriptsBefore = this.scriptsBefore,
          scriptsAfter = this.scriptsAfter,
          toolboxSrc = this.toolboxSrc,
          externals = this.externals;

      var xml = Blockly.Xml.workspaceToDom(workspace);
      (0, _packer.pack)(xml);
      var code = xml.innerHTML;
      if (preload_res) {
        var resources = [];
        preload_res.forEach(function (res) {
          if (Array.isArray(res)) {
            resources.push('<resource type="texture_packer" texture="' + res[0] + '" data="' + res[1] + '"/>');
          } else if (res.id === res.src) {
            resources.push('<resource type="image" src="' + res.src + '"/>');
          } else {
            resources.push('<resource type="image" src="' + res.src + '" id="' + res.id + '"/>');
          }
        });
        code = '<preload>' + resources.join('') + '</preload>' + code;
      }
      if (scriptsBefore) {
        code = '' + scriptsBefore.map(function (_ref3) {
          var src = _ref3.src;
          return '<script src="' + src + '"/>';
        }).join('') + code;
      }
      if (scriptsAfter) {
        code = '' + code + scriptsAfter.map(function (_ref4) {
          var src = _ref4.src;
          return '<script src="' + src + '"/>';
        }).join('');
      }
      if (externals) {
        var modules = externals.map(function (eb) {
          return '<module src="' + eb + '"/>';
        });
        code = '<externals>' + modules.join('') + '</externals>' + code;
      }
      code = '<xml toolbox="' + toolboxSrc + '">' + code + '</xml>';
      var indent = 0;
      return code.replace(/></g, '>\n<').split(/\n/g).map(function (line) {
        var ret = line;
        if (/^<\//.test(line)) {
          indent -= 2;
        }
        if (indent > 0) {
          ret = '' + new Array(indent + 1).join(' ') + line;
        }
        if (!/(<\/\w+>|\/>)$/.test(line)) {
          indent += 2;
        }
        return ret;
      }).join('\n');
    }
  }, {
    key: 'code',
    get: function get() {
      if (!this.workspace) return '';

      var workspace = this.workspace,
          preload_res = this.preload_res,
          scriptsBefore = this.scriptsBefore,
          scriptsAfter = this.scriptsAfter;

      var xml = Blockly.Xml.workspaceToDom(workspace);
      // Add each top block one by one and generate code.
      var allCode = [];

      // Generate JavaScript code and run it.
      window.LoopTrap = 1e7;
      Blockly.JavaScript.INFINITE_LOOP_TRAP = Blockly.Generator.prototype.INDENT + 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';

      Blockly.JavaScript.init(workspace);
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      allCode.push(code);

      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      if (preload_res) {
        allCode.push('spritly.runtime.scene.preload(...' + (0, _stringify2.default)(preload_res) + ')\n  .then(() => spritly.runtime.Signal.send(\'START\', spritly.runtime.scene));\n');
      } else {
        allCode.push("spritly.runtime.Signal.send('START', spritly.runtime.scene);\n");
      }
      var comment = '/** \n  Generated by spritly ' + new Date().toLocaleString() + ';\n  Usage: \n  <script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>\n  <script src="https://unpkg.com/spritly/dist/spritly-runtime.min.js"></script>\n  <div id="stage" style="width:100%;height:100%;"></div>\n*/'; /* eslint-enable */
      allCode.unshift(comment, 'spritly.runtime.use(spritejs);');

      if (scriptsBefore.length) {
        allCode.unshift.apply(allCode, ['/* -- external scripts start -- */'].concat((0, _toConsumableArray3.default)(scriptsBefore.map(function (_ref5) {
          var code = _ref5.code;
          return code;
        })), ['/* -- external scripts end -- */']));
      }
      if (scriptsAfter.length) {
        allCode.push.apply(allCode, ['/* -- external scripts start -- */'].concat((0, _toConsumableArray3.default)(scriptsAfter.map(function (_ref6) {
          var code = _ref6.code;
          return code;
        })), ['/* -- external scripts end -- */']));
      }
      return allCode.join('\n\n');
    }
  }]);
  return Application;
}();

exports.default = Application;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(174);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 174 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(115);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(2);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(172);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _from = __webpack_require__(61);

var _from2 = _interopRequireDefault(_from);

var _asyncToGenerator2 = __webpack_require__(175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toolbox = __webpack_require__(179);

var _toolbox2 = _interopRequireDefault(_toolbox);

var _packer = __webpack_require__(180);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'index.xml';

    var blockXml, toolboxSrc, _ref2, externals, toolbox, preload_res, scriptsBefore, scriptsAfter, scripts, children, i, child, scriptLink, code;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (src.indexOf('/') !== 0) {
              src = '/blocks/' + src;
            }
            if (!/xml$/.test(src)) {
              src = src + '.xml';
            }
            _context.next = 4;
            return fetch(src).then(function (res) {
              return res.text();
            }).then(function (str) {
              return new DOMParser().parseFromString(str, 'text/xml');
            });

          case 4:
            blockXml = _context.sent;
            toolboxSrc = blockXml.documentElement.getAttribute('toolbox') || 'toolboxs/default.xml';
            _context.next = 8;
            return (0, _toolbox2.default)(toolboxSrc);

          case 8:
            _ref2 = _context.sent;
            externals = _ref2.externals;
            toolbox = _ref2.toolbox;
            preload_res = (0, _from2.default)(blockXml.querySelectorAll('preload resource')).map(function (res) {
              var type = res.getAttribute('type');
              if (type === 'texture_packer') {
                var texture = res.getAttribute('texture');
                var data = res.getAttribute('data');
                return [texture, data];
              }

              var src = res.getAttribute('src');
              var id = res.getAttribute('id') || src;
              return { id: id, src: src };
            });
            scriptsBefore = [];
            scriptsAfter = [];
            scripts = scriptsBefore;
            children = blockXml.documentElement.children;
            i = 0;

          case 17:
            if (!(i < children.length)) {
              _context.next = 32;
              break;
            }

            child = children[i];

            if (!(child.tagName.toLowerCase() === 'script')) {
              _context.next = 28;
              break;
            }

            scriptLink = child.getAttribute('src');

            if (!scriptLink) {
              _context.next = 26;
              break;
            }

            _context.next = 24;
            return fetch(scriptLink) // eslint-disable-line
            .then(function (res) {
              return res.text();
            });

          case 24:
            code = _context.sent;

            scripts.push({ code: code, src: scriptLink });

          case 26:
            _context.next = 29;
            break;

          case 28:
            if (child.tagName.toLowerCase() === 'block') {
              scripts = scriptsAfter;
            }

          case 29:
            i++;
            _context.next = 17;
            break;

          case 32:
            (0, _packer.unpack)(blockXml);

            return _context.abrupt('return', { externals: externals, toolbox: toolbox, toolboxSrc: toolboxSrc, blockXml: blockXml, preload_res: preload_res, scriptsBefore: scriptsBefore, scriptsAfter: scriptsAfter });

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function loadBlocks() {
    return _ref.apply(this, arguments);
  }

  return loadBlocks;
}();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(172);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(175);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(115);

var _promise2 = _interopRequireDefault(_promise);

var _packer = __webpack_require__(180);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadExternalModule(src) {
  if (src.indexOf('/') !== 0) {
    src = '/toolboxs/' + src;
  }
  var script = document.querySelector('script[src="' + src + '"]');
  if (!script) {
    var _script = document.createElement('script');
    var promise = new _promise2.default(function (resolve) {
      _script.onload = function () {
        resolve(_script);
      };
    });
    _script.src = src;
    document.body.appendChild(_script);
    return promise;
  }
  return _promise2.default.resolve();
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'toolboxs/default.xml';
    var toolbox, externals;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(src).then(function (res) {
              return res.text();
            }).then(function (str) {
              return new DOMParser().parseFromString(str, 'text/xml');
            });

          case 2:
            toolbox = _context.sent;


            (0, _packer.unpack)(toolbox);

            externals = toolbox.querySelectorAll('externals module');

            externals = [].concat((0, _toConsumableArray3.default)(externals)).map(function (eb) {
              return eb.getAttribute('src');
            });

            _context.next = 8;
            return _promise2.default.all(externals.map(function (src) {
              return loadExternalModule(src);
            }));

          case 8:
            return _context.abrupt('return', { externals: externals, toolbox: toolbox.documentElement, toolboxSrc: src });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function loadToolbox() {
    return _ref.apply(this, arguments);
  }

  return loadToolbox;
}();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(60);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(108);

var _set2 = _interopRequireDefault(_set);

exports.pack = pack;
exports.unpack = unpack;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pack(xml) {
  var nexts = xml.querySelectorAll('next > block');
  var allBlocks = [];

  function getBlocksSet(block) {
    for (var i = 0; i < allBlocks.length; i++) {
      var _blockSet = allBlocks[i];
      if (_blockSet.has(block)) return _blockSet;
    }
    var blockSet = new _set2.default();
    blockSet.add(block);
    allBlocks.push(blockSet);
    return blockSet;
  }

  nexts.forEach(function (nextBlock) {
    var parentBlock = nextBlock.parentNode.parentNode;
    nextBlock.parentNode.remove();
    nextBlock.remove();
    var blockSet = getBlocksSet(parentBlock);
    blockSet.add(nextBlock);
  });

  allBlocks.forEach(function (blockSet) {
    var blocks = [].concat((0, _toConsumableArray3.default)(blockSet));
    var parent = blocks[0].parentNode;
    var blocksNode = document.createElement('blocks');
    parent.insertBefore(blocksNode, blocks[0]);
    blocks[0].remove();
    blocks.forEach(function (block) {
      return blocksNode.appendChild(block);
    });
  });
}

function unpack(xml) {
  var allBlocks = xml.querySelectorAll('blocks');
  allBlocks.forEach(function (blocks) {
    var root = blocks.children[0];
    if (root) {
      var parent = root;
      var children = [].concat((0, _toConsumableArray3.default)(blocks.children));
      for (var i = 1; i < children.length; i++) {
        var block = children[i];
        block.remove();
        var next = document.createElement('next');
        next.appendChild(block);
        parent.appendChild(next);
        parent = block;
      }
      root.remove();
      blocks.parentNode.insertBefore(root, blocks);
      blocks.remove();
    }
  });
}

/***/ })
/******/ ]);
});