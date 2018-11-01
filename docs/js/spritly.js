(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Blockly"));
	else if(typeof define === 'function' && define.amd)
		define(["Blockly"], factory);
	else if(typeof exports === 'object')
		exports["spritly"] = factory(require("Blockly"));
	else
		root["spritly"] = factory(root["Blockly"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__131__) {
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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

var core = module.exports = { version: '2.5.7' };
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(23);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(53);
module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(26)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(29)(String, 'String', function (iterated) {
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var defined = __webpack_require__(28);
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
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(31);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(32);
var $iterCreate = __webpack_require__(33);
var setToStringTag = __webpack_require__(49);
var getPrototypeOf = __webpack_require__(51);
var ITERATOR = __webpack_require__(50)('iterator');
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
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(34);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(49);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(50)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(35);
var enumBugKeys = __webpack_require__(47);
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
  __webpack_require__(48).appendChild(iframe);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(36);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(20);
var toIObject = __webpack_require__(38);
var arrayIndexOf = __webpack_require__(41)(false);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(40);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(38);
var toLength = __webpack_require__(42);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys');
var uid = __webpack_require__(46);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(20);
var TAG = __webpack_require__(50)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(45)('wks');
var uid = __webpack_require__(46);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(20);
var toObject = __webpack_require__(52);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(8);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(52);
var call = __webpack_require__(54);
var isArrayIter = __webpack_require__(55);
var toLength = __webpack_require__(42);
var createProperty = __webpack_require__(56);
var getIterFn = __webpack_require__(57);

$export($export.S + $export.F * !__webpack_require__(59)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(32);
var ITERATOR = __webpack_require__(50)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(58);
var ITERATOR = __webpack_require__(50)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(40);
var TAG = __webpack_require__(50)('toStringTag');
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(50)('iterator');
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(25);
__webpack_require__(63);
__webpack_require__(67);
__webpack_require__(80);
__webpack_require__(83);
__webpack_require__(85);
module.exports = __webpack_require__(7).Set;


/***/ }),
/* 62 */
/***/ (function(module, exports) {



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(6);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(32);
var TO_STRING_TAG = __webpack_require__(50)('toStringTag');

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(32);
var toIObject = __webpack_require__(38);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
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
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(68);
var validate = __webpack_require__(74);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(75)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(11).f;
var create = __webpack_require__(34);
var redefineAll = __webpack_require__(69);
var ctx = __webpack_require__(8);
var anInstance = __webpack_require__(70);
var forOf = __webpack_require__(71);
var $iterDefine = __webpack_require__(29);
var step = __webpack_require__(66);
var setSpecies = __webpack_require__(72);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(73).fastKey;
var validate = __webpack_require__(74);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(8);
var call = __webpack_require__(54);
var isArrayIter = __webpack_require__(55);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(42);
var getIterFn = __webpack_require__(57);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(50)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(46)('meta');
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(5);
var meta = __webpack_require__(73);
var fails = __webpack_require__(16);
var hide = __webpack_require__(10);
var redefineAll = __webpack_require__(69);
var forOf = __webpack_require__(71);
var anInstance = __webpack_require__(70);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(49);
var dP = __webpack_require__(11).f;
var each = __webpack_require__(76)(0);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(52);
var toLength = __webpack_require__(42);
var asc = __webpack_require__(77);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(78);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(79);
var SPECIES = __webpack_require__(50)('species');

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(40);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(81)('Set') });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(58);
var from = __webpack_require__(82);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(71);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(84)('Set');


/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(86)('Set');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);
var aFunction = __webpack_require__(9);
var ctx = __webpack_require__(8);
var forOf = __webpack_require__(71);

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
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(25);
__webpack_require__(63);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
module.exports = __webpack_require__(7).Map;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(68);
var validate = __webpack_require__(74);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(75)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(81)('Map') });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(84)('Map');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(86)('Map');


/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.initWorkspace = exports.Blockly = undefined;

__webpack_require__(129);

__webpack_require__(133);

var _dropdown = __webpack_require__(141);

var Blockly = __webpack_require__(131);
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

function initWorkspace(el, options) {
  var workspace = Blockly.inject(el, options);

  // workspace.createVariable('sprite', '');

  return workspace;
}

exports.Blockly = Blockly;
exports.initWorkspace = initWorkspace;
exports.Dropdown = _dropdown.Dropdown;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(130);

__webpack_require__(132);

var Blockly = __webpack_require__(131);

var Msg = Blockly.Msg;


Msg.$ = function (key) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'COMMON';

  var k = prefix + '_' + key.toUpperCase();
  if (k in Msg) return Msg[k];
  return key;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

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
Msg.FLOWS_HUE = 220;
Msg.MATH_HUE = 270;
Msg.LOG_HUE = 310;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__131__;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

var Msg = Blockly.Msg;


Msg.COMMON_FGLAYER = '前景图层';
Msg.COMMON_BGLAYER = '背景图层';
Msg.COMMON_TARGET = '目标元素';
Msg.COMMON_SENDER = '发送者';
Msg.COMMON_RECEIVER = '接收者';
Msg.COMMON_SPRITE = '精灵元素';
Msg.COMMON_LABEL = '文本元素';
Msg.COMMON_PATH = '矢量元素';

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
Msg.SIGNAL_DO_OPTION_SIGNAL_LAYER_CLICKED = '前景图层被鼠标点击';
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
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETX = '相对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETY = '相对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERX = '绝对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERY = '绝对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_ALTKEY = '按下ALT键';
Msg.GET_DATA_PROP_OPTION_PROP_CTRLKEY = '按下CTRL键';
Msg.GET_DATA_PROP_OPTION_PROP_SHIFTKEY = '按下SHIFT键';
Msg.GET_DATA_PROP_OPTION_PROP_BUTTONS = '鼠标按键值';

Msg.EVENT_IMMEDIATELY = '立即';
Msg.EVENT_ONCLICK = '当被鼠标单击';
Msg.EVENT_ONDBLCLICK = '被鼠标双击';
Msg.EVENT_ONMOUSEDOWN = '按下鼠标按键';
Msg.EVENT_ONMOUSEMOVE = '鼠标在元素内部移动';
Msg.EVENT_ONMOUSEUP = '释放鼠标按键';
Msg.EVENT_ONMOUSEENTER = '鼠标进入元素';
Msg.EVENT_ONMOUSELEAVE = '鼠标离开元素';

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

Msg.LISTS_CREATE_RANGE_MSG0 = 'Create list';
Msg.LISTS_CREATE_RANGE_MSG1 = 'from %1 to %2';
Msg.LISTS_CREATE_RANGE_TOOLTIP = 'Create list by range.';

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(134);

__webpack_require__(139);

__webpack_require__(140);

__webpack_require__(142);

__webpack_require__(143);

__webpack_require__(144);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(149);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(135);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(131);
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
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ADDITION) || 0;
  return ['v => v ' + op + ' ' + value, Blockly.JavaScript.ORDER_MEMBER];
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

function gencode(block) {
  var key = block.getFieldValue('KEY');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '\'' + block.getFieldValue('VALUE') + '\'' || 'null';
  return '\n\'' + key + '\': ' + value + ',';
}

(0, _keys2.default)(Blockly.Blocks).forEach(function (key) {
  if (key.indexOf('field_attr') === 0 && key !== 'field_attr_inc') {
    Blockly.JavaScript[key] = gencode;
  }
});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(52);
var $keys = __webpack_require__(36);

__webpack_require__(138)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 138 */
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);
var Msg = Blockly.Msg;

var colour = Msg.ANIMATE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(141);

var Blockly = __webpack_require__(131);

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

  return list + '.reduce(async function($$prestep, ' + item + ', ' + index + ') {' + indent + 'await $$prestep;\n' + code + '}, null);\n';
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
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'ITEM',
        options: function options() {
          var items = _dropdown.Dropdown.get('ListItems');
          if (items.length) {
            return items.map(function (s) {
              return [s, s];
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(60);

var _set2 = _interopRequireDefault(_set);

var _map = __webpack_require__(100);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdowns = new _map2.default();

var Dropdown = exports.Dropdown = {
  set: function set(key, value) {
    var dropdown = dropdowns.get(key) || new _set2.default();
    dropdown.add(value);
    dropdowns.set(key, dropdown);
    return dropdown;
  },
  get: function get(key) {
    return [].concat((0, _toConsumableArray3.default)(dropdowns.get(key) || []));
  },
  clear: function clear() {
    dropdowns.clear();
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

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
    Blockly.Blocks.text.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.string = Blockly.JavaScript.text;

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _dropdown = __webpack_require__(141);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(131);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.SIGNALS_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

function listSignal() {
  for (var _len = arguments.length, extras = Array(_len), _key = 0; _key < _len; _key++) {
    extras[_key] = arguments[_key];
  }

  var signals = ['START'];
  return function () {
    return [].concat(signals, extras, (0, _toConsumableArray3.default)(_dropdown.Dropdown.get('Signals'))).map(function (s) {
      return [Msg.$(s, 'SIGNAL_DO_OPTION_SIGNAL'), s];
    });
  };
}

function listSprite() {
  var sprites = _dropdown.Dropdown.get('Sprites');
  if (sprites.length > 0) {
    return sprites.map(function (s) {
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
        options: listSignal('LAYER_CLICKED', 'ELEMENT_CREATED', 'ELEMENT_DESTROYED')
      }],
      // message1: '(sender, receiver, data)',
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_DO_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal()
      }],
      message1: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [[Msg.COMMON_SPRITE, 'Sprite'], [Msg.COMMON_LABEL, 'Label'], [Msg.COMMON_PATH, 'Path']]
      }],
      message2: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: 'Sprite_' + Math.random().toString().slice(2, 7)
      }],
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
  }
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'SIGNAL',
        options: listSignal('ELEMENT_CREATED')
      }],
      message1: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'ID',
        options: listSprite
      }],
      colour: colour,
      nextStatement: nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP
    });
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
        options: ['offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'buttons'].map(function (s) {
          return [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s];
        })
      }],
      colour: colour,
      output: ['Number', 'Boolean'],
      tooltip: Msg.GET_DATA_PROP_TOOLTIP
    });
  }
};

Blockly.JavaScript.get_data_prop = function (block) {
  var prop = block.getFieldValue('PROP');
  return ['data[spritly.runtime.Symbols.' + prop + ']', Blockly.JavaScript.ORDER_MEMBER];
};

var events = ['immediately', 'onclick', 'ondblclick', 'onmousedown', 'onmousemove', 'onmouseup', 'onmouseenter', 'onmouseleave'];

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

  if (event !== 'immediately') {
    var eventName = event.slice(2);
    return target + '.on(\'' + eventName + '\', \n  evt => {\n    const {altKey, buttons, ctrlKey, shiftKey} = evt.originalEvent;\n    const runtime = spritly.runtime;\n    runtime.Signal.send(\'' + signal + '\', \n      {\n        sender:' + target + ',\n        data: Object.assign(\n          {\n            [runtime.Symbols.target]: evt.target,\n            [runtime.Symbols.offsetX]: evt.offsetX,\n            [runtime.Symbols.offsetY]: evt.offsetY,\n            [runtime.Symbols.layerX]: evt.layerX,\n            [runtime.Symbols.layerY]: evt.layerY,\n            [runtime.Symbols.altKey]: altKey,\n            [runtime.Symbols.buttons]: buttons,\n            [runtime.Symbols.ctrlKey]: ctrlKey,\n            [runtime.Symbols.shiftKey]: shiftKey,\n          },\n          {' + data + '},\n        ),\n      });\n  });';
  }
  return 'spritly.runtime.Signal.send(\'' + signal + '\', {sender:' + target + ', data: {' + data + '}});\n';
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(141);

var _utils = __webpack_require__(145);

var Blockly = __webpack_require__(131);

var Msg = Blockly.Msg;
var colour = Blockly.Msg.SPRITE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

var sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: _utils.spriteOptions
};

Blockly.Blocks.sprite = {
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [sender_receiver_dropdown],
      colour: colour,
      output: 'Sprite',
      tooltip: Msg.SPRITE_MSG0_TOOLTIP
    });
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

  return sprite + '.attr(spritly.runtime.parse_attr({' + attrs + '\n}));\n';
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
  return 'spritly.runtime.ElementList.add(spritejs.createElement(\'' + type + '\', spritly.runtime.parse_attr({name: \'' + name + '\'}, {' + attrs + '\n})));\n';
};

Blockly.Blocks.sprite_each_elements_named = {
  init: function init() {
    this.jsonInit({
      message0: Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0,
      args0: [{
        type: 'field_dropdown',
        name: 'NAME',
        options: function options() {
          var spriteNames = _dropdown.Dropdown.get('SpriteNames');
          if (spriteNames.length > 0) {
            return spriteNames.map(function (s) {
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
  return ['spritly.runtime.get_attr(' + sprite + ', \'' + attr + '\')', Blockly.JavaScript.ORDER_MEMBER];
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spriteOptions = spriteOptions;

var _dropdown = __webpack_require__(141);

var Blockly = __webpack_require__(131);
var Msg = Blockly.Msg;

function spriteOptions() {
  var sprites = _dropdown.Dropdown.get('Sprites');
  return [[Msg.COMMON_TARGET, 'target'], [Msg.COMMON_SENDER, 'sender'], [Msg.COMMON_RECEIVER, 'receiver']].concat(sprites.map(function (s) {
    return [s, s];
  }));
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

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
      // message1: '(sender, receiver, data)',
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
      // message1: '(sender, receiver, data)',
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(131);

var Msg = Blockly.Msg;

Blockly.Blocks.key_value = {
  init: function init() {
    this.jsonInit({
      message0: Msg.KEYVALUE_MSG0,
      args0: [{
        type: 'field_input',
        name: 'KEY',
        text: 'key'
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
  var key = block.getFieldValue('KEY');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return '\n\'' + key + '\': ' + value + ',';
};

Blockly.Blocks.object_get_prop = {
  init: function init() {
    this.jsonInit({
      message0: Msg.OBJECT_GET_PROP_MSG0,
      args0: [{
        type: 'input_value',
        name: 'OBJECT'
      }, {
        type: 'field_input',
        name: 'PROP',
        text: 'key'
      }],
      inputsInline: true,
      output: null,
      colour: Msg.GETTER_SETTER_HUE
    });
    this.setTooltip(Msg.OBJECT_GET_PROP_TOOLTIP);
  }
};

Blockly.JavaScript.object_get_prop = function (block) {
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || 'null';
  var propName = block.getFieldValue('PROP');

  return [object + '[\'' + propName + '\']', Blockly.JavaScript.ORDER_NONE];
};

/***/ })
/******/ ]);
});