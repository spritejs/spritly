(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Blockly"));
	else if(typeof define === 'function' && define.amd)
		define(["Blockly"], factory);
	else if(typeof exports === 'object')
		exports["spritly"] = factory(require("Blockly"));
	else
		root["spritly"] = factory(root["Blockly"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__115__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(3);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
__webpack_require__(49);
module.exports = __webpack_require__(13).Array.from;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(6)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(9)(String, 'String', function (iterated) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var defined = __webpack_require__(8);
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
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(10);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(27);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(29);
var setToStringTag = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(47);
var ITERATOR = __webpack_require__(46)('iterator');
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
/* 10 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(12);
var core = __webpack_require__(13);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(16);
var has = __webpack_require__(26);
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
/* 12 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(12).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(45);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(46)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(31);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(44).appendChild(iframe);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(17);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(26);
var toIObject = __webpack_require__(34);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(39);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(12);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(10) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(12).document;
module.exports = document && document.documentElement;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(17).f;
var has = __webpack_require__(26);
var TAG = __webpack_require__(46)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(42);
var Symbol = __webpack_require__(12).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(26);
var toObject = __webpack_require__(48);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(14);
var $export = __webpack_require__(11);
var toObject = __webpack_require__(48);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var toLength = __webpack_require__(38);
var createProperty = __webpack_require__(52);
var getIterFn = __webpack_require__(53);

$export($export.S + $export.F * !__webpack_require__(55)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(18);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(28);
var ITERATOR = __webpack_require__(46)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(17);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(54);
var ITERATOR = __webpack_require__(46)('iterator');
var Iterators = __webpack_require__(28);
module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(46)('toStringTag');
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(46)('iterator');
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(5);
__webpack_require__(59);
__webpack_require__(63);
__webpack_require__(76);
__webpack_require__(79);
__webpack_require__(81);
module.exports = __webpack_require__(13).Set;


/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
var global = __webpack_require__(12);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(46)('toStringTag');

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61);
var step = __webpack_require__(62);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(34);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(9)(Array, 'Array', function (iterated, kind) {
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
/* 61 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(64);
var validate = __webpack_require__(70);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(71)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(17).f;
var create = __webpack_require__(30);
var redefineAll = __webpack_require__(65);
var ctx = __webpack_require__(14);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(67);
var $iterDefine = __webpack_require__(9);
var step = __webpack_require__(62);
var setSpecies = __webpack_require__(68);
var DESCRIPTORS = __webpack_require__(21);
var fastKey = __webpack_require__(69).fastKey;
var validate = __webpack_require__(70);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var anObject = __webpack_require__(18);
var toLength = __webpack_require__(38);
var getIterFn = __webpack_require__(53);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(12);
var core = __webpack_require__(13);
var dP = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(21);
var SPECIES = __webpack_require__(46)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(42)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(26);
var setDesc = __webpack_require__(17).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(12);
var $export = __webpack_require__(11);
var meta = __webpack_require__(69);
var fails = __webpack_require__(22);
var hide = __webpack_require__(16);
var redefineAll = __webpack_require__(65);
var forOf = __webpack_require__(67);
var anInstance = __webpack_require__(66);
var isObject = __webpack_require__(19);
var setToStringTag = __webpack_require__(45);
var dP = __webpack_require__(17).f;
var each = __webpack_require__(72)(0);
var DESCRIPTORS = __webpack_require__(21);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(14);
var IObject = __webpack_require__(35);
var toObject = __webpack_require__(48);
var toLength = __webpack_require__(38);
var asc = __webpack_require__(73);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(74);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var isArray = __webpack_require__(75);
var SPECIES = __webpack_require__(46)('species');

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(11);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(77)('Set') });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(54);
var from = __webpack_require__(78);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(67);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(80)('Set');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(11);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(82)('Set');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(11);
var aFunction = __webpack_require__(15);
var ctx = __webpack_require__(14);
var forOf = __webpack_require__(67);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(5);
__webpack_require__(59);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
module.exports = __webpack_require__(13).Map;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(64);
var validate = __webpack_require__(70);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(71)(MAP, function (get) {
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(11);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(77)('Map') });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(80)('Map');


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(82)('Map');


/***/ }),
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
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.initWorkspace = exports.Blockly = undefined;

__webpack_require__(113);

__webpack_require__(116);

var _dropdown = __webpack_require__(123);

var Blockly = __webpack_require__(115);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(114);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(115);

var Msg = Blockly.Msg;


Msg.SPRITE_HUE = 330;
Msg.ATTRS_HUE = 230;
Msg.ATTRS_SPRITE_HUE = 245;
Msg.ATTRS_LABEL_HUE = 260;
Msg.ATTRS_PATH_HUE = 275;
Msg.EASING_HUE = 90;
Msg.ANIMATE_HUE = 195;
Msg.SIGNALS_HUE = 55;
Msg.LOG_HUE = 350;
Msg.LITERAL_HUE = 160;
Msg.FLOWS_HUE = 120;
Msg.MATH_HUE = 230;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__115__;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(117);

__webpack_require__(122);

__webpack_require__(125);

__webpack_require__(126);

__webpack_require__(127);

__webpack_require__(128);

__webpack_require__(129);

__webpack_require__(130);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(118);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(115);

Blockly.Blocks.field_attr_inc = {
  init: function init() {
    this.jsonInit({
      message0: '%1 %2',
      args0: [{ type: 'field_dropdown',
        name: 'OP',
        options: [['+', '+'], ['-', '-'], ['*', '*'], ['/', '/'], ['^', '**']] }, { type: 'input_value', name: 'VALUE', check: 'Number' }],
      colour: Blockly.Msg.ATTRS_HUE
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

  var arg0 = { name: 'KEY', type: 'field_input' };
  var arg1 = { type: 'input_value', name: 'VALUE', check: valueType };

  if (typeof keys !== 'string' && keys.prop && keys.options) {
    arg0.text = keys.prop;
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(function (s) {
      return [s, s];
    });
  } else if (Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(function (key) {
      return [key, key];
    });
  } else {
    arg0.text = keys;
  }
  return {
    message0: '%1: %2,',
    args0: [arg0, arg1],
    colour: colour,
    previousStatement: statementType,
    nextStatement: statementType
  };
}

Blockly.Blocks.field_attr_anchor = {
  init: function init() {
    this.jsonInit(createKVConf(['anchorX', 'anchorY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_xy = {
  init: function init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
  }
};

Blockly.Blocks.field_attr_size = {
  init: function init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
  }
};

Blockly.Blocks.field_attr_bgcolor = {
  init: function init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
  }
};

Blockly.Blocks.field_attr_opacity = {
  init: function init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
  }
};

Blockly.Blocks.field_attr_rotate = {
  init: function init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
  }
};

Blockly.Blocks.field_attr_scale = {
  init: function init() {
    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_translate = {
  init: function init() {
    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_skew = {
  init: function init() {
    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_border_radius = {
  init: function init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
  }
};

Blockly.Blocks.field_attr_borderWidth = {
  init: function init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
  }
};

Blockly.Blocks.field_attr_borderStyle = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'borderStyle', options: ['solid', 'dashed'] }, 'String'));
  }
};

Blockly.Blocks.field_attr_borderColour = {
  init: function init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
  }
};

Blockly.Blocks.field_attr_dashOffset = {
  init: function init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
  }
};

Blockly.Blocks.field_attr_texture = {
  init: function init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
  }
};

Blockly.Blocks.field_attr_text = {
  init: function init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontSize = {
  init: function init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontFamily = {
  init: function init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontStyle = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'fontStyle', options: ['normal', 'italic', 'oblique'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontVariant = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'fontVariant', options: ['normal', 'small-caps'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontWeight = {
  init: function init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_textAlign = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'textAlign', options: ['left', 'right', 'center'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_lineHeight = {
  init: function init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_d = {
  init: function init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineWidth = {
  init: function init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineDash = {
  init: function init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineDashOffset = {
  init: function init() {
    this.jsonInit(createKVConf('lineDashOffset', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineCap = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'lineCap', options: ['butt', 'round', 'square'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineJoin = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'lineJoin', options: ['miter', 'round', 'bevel'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_bounding = {
  init: function init() {
    this.jsonInit(createKVConf({ prop: 'bounding', options: ['box', 'path'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_strokeColour = {
  init: function init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_fillColour = {
  init: function init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
module.exports = __webpack_require__(13).Object.keys;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(48);
var $keys = __webpack_require__(32);

__webpack_require__(121)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(13);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(123);

var _utils = __webpack_require__(124);

var Blockly = __webpack_require__(115);

var colour = Blockly.Msg.ANIMATE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

Blockly.Blocks.await = {
  init: function init() {
    this.jsonInit({
      message0: 'wait %1 millsec 🕙',
      args0: [{ type: 'field_number', name: 'SEC', value: 16 }],
      colour: colour,
      previousStatement: 'Statement',
      nextStatement: null
    });
  }
};

Blockly.JavaScript.await = function (block) {
  var ms = parseInt(block.getFieldValue('SEC'), 10);

  return 'await utils.wait(' + ms + ');\n';
};

Blockly.Blocks.await_frame = {
  init: function init() {
    this.jsonInit({
      message0: 'next frame of %1 ⌛',
      args0: [{ type: 'field_dropdown',
        name: 'LAYER',
        options: [['fglayer', 'fglayer'], ['bglayer', 'bglayer']]
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.await_frame = function (block) {
  var layerName = block.getFieldValue('LAYER');
  return 'await scene.layer(\'' + layerName + '\').prepareRender();\n';
};

Blockly.Blocks.sprite_animate = {
  init: function init() {
    this.jsonInit({
      message0: '%1 %2 animate %3 s',
      args0: [{
        type: 'field_dropdown',
        name: 'ASYNC?',
        options: [['⚡️', '-'], ['⌛️', 'await']]
      }, {
        type: 'field_dropdown',
        name: 'SPRITE',
        options: function options() {
          var sprites = _dropdown.Dropdown.get('Sprites');
          return [['target', 'target'], ['sender', 'sender'], ['receiver', 'receiver'], ['item', 'item']].concat(sprites.map(function (s) {
            return [s, s];
          }));
        }
      }, {
        type: 'input_value',
        name: 'DURATION',
        check: 'Number'
      }],
      message1: 'from %1',
      args1: [{
        type: 'input_statement',
        name: 'FROM_ATTRS',
        check: 'KeyValue'
      }],
      message2: 'to %1',
      args2: [{
        type: 'input_statement',
        name: 'TO_ATTRS',
        check: 'KeyValue'
      }],
      message3: 'easing %1',
      args3: [{
        type: 'input_value',
        name: 'EASING',
        check: 'String'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)()
};

Blockly.JavaScript.sprite_animate = function (block) {
  var isAsync = block.getFieldValue('ASYNC?') === 'await';
  var sprite = block.getFieldValue('SPRITE');
  var duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  var easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  var from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  var to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  var code = sprite + '.animate([{' + from + '}, {' + to + '}], {duration: ' + duration * 1000 + ', fill: \'forwards\', easing: ' + easing + '})';
  if (isAsync) code = 'if(!' + sprite + '.layer){console.error(\'' + sprite + ' must append to layer before animated!\');} await ' + code + '.finished';

  return code + ';\n';
};

Blockly.Blocks.easing = {
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'EASING',
        options: [['ease', 'ease'], ['ease-in', 'ease-in'], ['ease-out', 'ease-out'], ['ease-in-out', 'ease-in-out']]
      }],
      colour: colour,
      output: 'String'
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
      message0: 'cubic-bezier %1 %2 %3 %4',
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
      output: 'String'
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _toConsumableArray2 = __webpack_require__(2);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__(56);

var _set2 = _interopRequireDefault(_set);

var _map = __webpack_require__(83);

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugEachItemInForEachScope = plugEachItemInForEachScope;
function plugEachItemInForEachScope() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SPRITE';

  return function () {
    var el = this.getFieldValue(field);
    if (el === 'item') {
      var parent = this.getParent();
      var top = parent;
      var isInScope = false;
      while (top) {
        if (top.type === 'sprite_each_elements_named') {
          isInScope = true;
          break;
        }
        top = top.getParent();
      }
      if (parent && !isInScope) {
        console.error('Block \'' + this.type + '\' must be placed inside the Block \'sprite_each_elements_named\'.');
        this.unplug(true);
      }
    }
  };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(115);

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
  this.setColour(Blockly.Msg.FLOWS_HUE);
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
  this.setColour(Blockly.Msg.FLOWS_HUE);
};

var controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init;
Blockly.Blocks.controls_whileUntil.init = function () {
  controls_whileUntil_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Blockly.Msg.FLOWS_HUE);
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(115);

Blockly.Blocks.key_value = {
  init: function init() {
    this.jsonInit({
      message0: '%1: %2,',
      args0: [{
        type: 'field_input',
        name: 'KEY',
        text: 'key'
      }, {
        type: 'input_value',
        name: 'VALUE'
      }],
      colour: Blockly.Msg.LITERAL_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue'
    });
  }
};

Blockly.JavaScript.key_value = function (block) {
  var key = block.getFieldValue('KEY');
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return '\n\'' + key + '\': ' + value + ',';
};

Blockly.Blocks.nil = {
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_dropdown',
        name: 'VALUE',
        options: [['null', 'null'], ['undefined', 'undefined']]
      }],
      colour: Blockly.Msg.LITERAL_HUE
    });
    this.setOutput(true);
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

var lists_create_with_init = Blockly.Blocks.lists_create_with.init;
Blockly.Blocks.lists_create_with.init = function () {
  lists_create_with_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.object_create = {
  init: function init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS').setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Blockly.Msg.LITERAL_HUE);
    this.setTooltip(function () {
      return 'Create object';
    });
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
      message0: 'index',
      colour: Blockly.Msg.LITERAL_HUE,
      output: 'Number'
    });
  }
};

Blockly.JavaScript.loop_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(2);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _dropdown = __webpack_require__(123);

var _utils = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockly = __webpack_require__(115);

var colour = Blockly.Msg.SIGNALS_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

function listSignal() {
  for (var _len = arguments.length, extras = Array(_len), _key = 0; _key < _len; _key++) {
    extras[_key] = arguments[_key];
  }

  var signals = ['START', 'ELEMENT_CREATED', 'ELEMENT_CLICK', 'ELEMENT_DBLCLICK', 'ELEMENT_MOUSEDOWN', 'ELEMENT_MOUSEMOVE', 'ELEMENT_MOUSEUP', 'ELEMENT_MOUSEENTER', 'ELEMENT_MOUDELEAVE'];
  return function () {
    return [].concat(signals, extras, (0, _toConsumableArray3.default)(_dropdown.Dropdown.get('Signals'))).map(function (s) {
      return [s, s];
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
      message0: 'On signal %1 🚩 do',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal('LAYER_CLICKED', 'ELEMENT_DESTROYED')
      }],
      // message1: '(sender, receiver, data)',
      colour: colour,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init: function init() {
    this.jsonInit({
      message0: 'On signal %1 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal()
      }],
      message1: 'new %1 as receiver',
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [['Sprite', 'Sprite'], ['Label', 'Label'], ['Path', 'Path']]
      }],
      message2: 'ID is %1',
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: 'Sprite_' + Math.random().toString().slice(2, 7)
      }],
      colour: colour,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init: function init() {
    this.jsonInit({
      message0: 'On signals %1 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal()
      }],
      message1: 'when receiver is %1',
      args1: [{
        type: 'field_dropdown',
        name: 'ID',
        options: listSprite
      }],
      colour: colour,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.signal_send = {
  init: function init() {
    this.jsonInit({
      message0: '%1 send signal %2 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'TARGET',
        options: function options() {
          var sprites = _dropdown.Dropdown.get('Sprites');
          return [['target', 'target'], ['sender', 'sender'], ['receiver', 'receiver'], ['item', 'item']].concat(sprites.map(function (s) {
            return [s, s];
          }));
        }
      }, {
        type: 'field_input',
        name: 'NAME',
        text: 'MY_SIGNAL',
        check: 'String'
      }],
      message1: 'data %1',
      args1: [{
        type: 'input_statement',
        name: 'DATA',
        check: 'KeyValue'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)('TARGET')
};

Blockly.JavaScript.signal_send = function (block) {
  var target = block.getFieldValue('TARGET');
  var signal = block.getFieldValue('NAME');
  var data = Blockly.JavaScript.statementToCode(block, 'DATA');

  return 'utils.Signal.send(\'' + signal + '\', {sender:' + target + ', data: Object.assign({target: ' + target + '}, {' + data + '})});\n';
};

Blockly.Blocks.get_data_prop = {
  init: function init() {
    this.jsonInit({
      message0: 'data get %1',
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: ['offsetX', 'offsetY', 'layerX', 'layerY', 'altKey', 'ctrlKey', 'shiftKey', 'button', 'buttons'].map(function (s) {
          return [s, s];
        })
      }],
      colour: colour,
      output: true,
      tooltip: 'get signal data property value.'
    });
  }
};

Blockly.JavaScript.get_data_prop = function (block) {
  var prop = block.getFieldValue('PROP');
  return ['data.' + prop, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks.get_data_prop_custom = {
  init: function init() {
    this.jsonInit({
      message0: 'data get %1',
      args0: [{
        type: 'field_input',
        name: 'PROP',
        text: 'key'
      }],
      colour: colour,
      output: true,
      tooltip: 'get signal data property value.'
    });
  }
};

Blockly.JavaScript.get_data_prop_custom = function (block) {
  var prop = block.getFieldValue('PROP');
  return ['data.' + prop, Blockly.JavaScript.ORDER_MEMBER];
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(123);

var _utils = __webpack_require__(124);

var Blockly = __webpack_require__(115);

var colour = Blockly.Msg.SPRITE_HUE;
var previousStatement = 'Statement';
var nextStatement = 'Statement';

var sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: function options() {
    var sprites = _dropdown.Dropdown.get('Sprites');
    return [['target', 'target'], ['sender', 'sender'], ['receiver', 'receiver'], ['item', 'item']].concat(sprites.map(function (s) {
      return [s, s];
    }));
  }
};

Blockly.Blocks.sprite_append_to = {
  init: function init() {
    this.jsonInit({
      message0: 'append %1 to %2',
      args0: [sender_receiver_dropdown, { type: 'field_dropdown',
        name: 'LAYER',
        options: [['fglayer', 'fglayer'], ['bglayer', 'bglayer']]
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)()
};

Blockly.JavaScript.sprite_append_to = function (block) {
  var sprite = block.getFieldValue('SPRITE');
  var layerName = block.getFieldValue('LAYER');

  if (sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = 'utils.ElementList.getElementById(\'' + sprite + '\')';
  }

  return 'scene.layer(\'' + layerName + '\').append(' + sprite + ');\n';
};

Blockly.Blocks.sprite_attrs = {
  init: function init() {
    this.jsonInit({
      message0: 'set %1 attrs',
      args0: [sender_receiver_dropdown],
      message1: '%1',
      args1: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)()
};

Blockly.JavaScript.sprite_attrs = function (block) {
  var sprite = block.getFieldValue('SPRITE');
  var attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  if (sprite !== 'target' && sprite !== 'sender' && sprite !== 'receiver' && sprite !== 'item') {
    sprite = 'utils.ElementList.getElementById(\'' + sprite + '\')';
  }

  return sprite + '.attr(utils.parse_attr({' + attrs + '\n}));\n';
};

Blockly.Blocks.sprite_create_attrs = {
  init: function init() {
    this.jsonInit({
      message0: 'create %1',
      args0: [{
        type: 'field_dropdown',
        name: 'TYPE',
        options: [['Sprite', 'Sprite'], ['Label', 'Label'], ['Path', 'Path']]
      }],
      message1: 'named %1 attrs',
      args1: [{
        type: 'field_input',
        name: 'NAME',
        text: 'MyName',
        check: 'String'
      }],
      message2: '%1',
      args2: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.sprite_create_attrs = function (block) {
  var type = block.getFieldValue('TYPE');
  var name = block.getFieldValue('NAME');
  var attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return 'utils.ElementList.add(spritejs.createElement(\'' + type + '\', utils.parse_attr({name: \'' + name + '\'}, {' + attrs + '\n})));\n';
};

Blockly.Blocks.sprite_each_elements_named = {
  init: function init() {
    this.jsonInit({
      message0: 'each elements named %1',
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
      message1: 'do %1',
      args1: [{
        type: 'input_statement',
        name: 'DO',
        check: 'Statement'
      }],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  var name = block.getFieldValue('NAME');
  var code = Blockly.JavaScript.statementToCode(block, 'DO');
  return 'await Promise.all(utils.ElementList.getElementsByName(\'' + name + '\').map(async (item, index) => {\n' + code + '\n}));\n';
};

Blockly.Blocks.sprite_destroy = {
  init: function init() {
    this.jsonInit({
      message0: '💣 destroy %1',
      args0: [sender_receiver_dropdown],
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)()
};

Blockly.JavaScript.sprite_destroy = function (block) {
  var sprite = block.getFieldValue('SPRITE');
  return 'utils.ElementList.remove(' + sprite + ');\n';
};

function attrs_dropdown() {
  var attrs = ['id', 'name', 'anchorX', 'anchorY', 'x', 'y', 'width', 'height', 'bgcolor', 'opacity', 'rotate', 'scaleX', 'scaleY', 'translateX', 'translateY', 'skewX', 'skewY', 'borderRadius', 'borderWidth', 'borderStyle', 'borderColor', 'dashOffset', 'texture', 'text', 'fontSize', 'fontFamily', 'fontStyle', 'fontVariant', 'fontWeight', 'textAlign', 'lineHeight', 'd', 'lineWidth', 'lineDash', 'lineDashOffset', 'lineCap', 'lineJoin', 'bounding', 'strokeColor', 'fillColor'];
  return attrs.sort().map(function (s) {
    return [s, s];
  });
}

Blockly.Blocks.sprite_get_attr = {
  init: function init() {
    this.jsonInit({
      message0: '%1 get %2',
      args0: [sender_receiver_dropdown, {
        type: 'field_dropdown',
        name: 'ATTR',
        options: attrs_dropdown
      }],
      colour: colour,
      output: true
    });
  },

  onchange: (0, _utils.plugEachItemInForEachScope)()
};

Blockly.JavaScript.sprite_get_attr = function (block) {
  var sprite = block.getFieldValue('SPRITE');
  var attr = block.getFieldValue('ATTR');
  return ['utils.get_attr(' + sprite + ', \'' + attr + '\')', Blockly.JavaScript.ORDER_MEMBER];
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(115);

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
        options: [['log', 'log'], ['warn', 'warn'], ['error', 'error']]
      }, {
        type: 'input_value',
        name: 'MSG'
      }],
      // message1: '(sender, receiver, data)',
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
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
      message0: '🔔 alert %1',
      args0: [{
        type: 'input_value',
        name: 'MSG'
      }],
      // message1: '(sender, receiver, data)',
      colour: colour,
      previousStatement: previousStatement,
      nextStatement: nextStatement
    });
  }
};

Blockly.JavaScript.log_alert = function (block) {
  var msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  return 'alert(' + msg + ');\n';
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Blockly = __webpack_require__(115);

var colour = Blockly.Msg.MATH_HUE;

Blockly.Blocks.random_number = {
  init: function init() {
    this.jsonInit({
      message0: '🎲 random number',
      colour: colour,
      output: 'Number',
      tooltip: 'Get a random number ≥ 0 and < 1.'
    });
  }
};

Blockly.JavaScript.random_number = function (block) {
  return ['Math.random()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_integer_from_to = {
  init: function init() {
    var _this = this;

    this.jsonInit({
      message0: '🎲 random int ≥ %1 < %2',
      args0: [{
        type: 'field_number',
        name: 'FROM',
        value: 0
      }, {
        type: 'field_number',
        name: 'TO',
        value: 10
      }],
      colour: colour,
      output: 'Number'
    });

    this.setTooltip(function () {
      var from = _this.getFieldValue('FROM'),
          to = _this.getFieldValue('TO');
      return 'Get a random integer \u2265 ' + from + ' and < ' + to + '.';
    });
  },
  onchange: function onchange(evt) {
    var from = this.getFieldValue('FROM'),
        to = this.getFieldValue('TO');

    this.setFieldValue(Math.round(from), 'FROM');
    this.setFieldValue(Math.round(to), 'TO');
  }
};

Blockly.JavaScript.random_integer_from_to = function (block) {
  var from = block.getFieldValue('FROM'),
      to = block.getFieldValue('TO');

  return ['utils.random(' + from + ', ' + to + ')', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_string = {
  init: function init() {
    this.jsonInit({
      message0: '🎲 random string',
      colour: colour,
      output: 'String',
      tooltip: 'Get a 11 bytes length random string.'
    });
  }
};

Blockly.JavaScript.random_string = function (block) {
  return ['\'Math.random().toString(36).slice(2)\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_rgb = {
  init: function init() {
    this.jsonInit({
      message0: '🎲 COLOUR',
      colour: colour,
      output: 'Colour',
      tooltip: 'Get a random hsla color.'
    });
  }
};

Blockly.JavaScript.random_colour_rgb = function (block) {
  return ['utils.random_color()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_hue = {
  init: function init() {
    this.jsonInit({
      message0: '🎲 random COLOUR_HUE',
      message1: 'S %1% L %2% A %3.',
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
      tooltip: 'Get a random hsla color.'
    });
  }
};

Blockly.JavaScript.random_colour_hue = function (block) {
  var h = Math.floor(Math.random() * 360);
  var s = block.getFieldValue('S');
  var l = block.getFieldValue('L');
  var a = block.getFieldValue('A');

  return ['\'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')\'', Blockly.JavaScript.ORDER_NONE];
};

/***/ })
/******/ ]);
});