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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockly", function() { return Blockly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWorkspace", function() { return initWorkspace; });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_2__["Dropdown"]; });





const Blockly = __webpack_require__(8);
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

function initWorkspace(el, options) {
  const workspace = Blockly.inject(el, options);

  // workspace.createVariable('sprite', '');

  return workspace;
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_colors__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

const { Msg } = Blockly;

Msg.SPRITE_HUE = 330;
Msg.ATTRS_HUE = 230;
Msg.ATTRS_SPRITE_HUE = 245;
Msg.ATTRS_LABEL_HUE = 260;
Msg.ATTRS_PATH_HUE = 275;
Msg.FLOW_HUE = 195;
Msg.SIGNALS_HUE = 55;
Msg.LOG_HUE = 350;
Msg.LITERAL_HUE = 160;
Msg.FLOWS_HUE = 120;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("Blockly");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_attr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_async__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _literal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _literal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_literal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_log__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

Blockly.Blocks.field_attr_inc = {
  init() {
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
  const op = block.getFieldValue('OP');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ADDITION) || 0;
  return [`v => v ${op} ${value}`, Blockly.JavaScript.ORDER_MEMBER];
};

function createKVConf(keys = 'key', valueType = '', colour = Blockly.Msg.ATTRS_HUE, statementType = 'KeyValue') {
  const arg0 = { name: 'KEY', type: 'field_input' };
  const arg1 = { type: 'input_value', name: 'VALUE', check: valueType };

  if (typeof keys !== 'string' && keys.prop && keys.options) {
    arg0.text = keys.prop;
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(s => [s, s]);
  } else if (Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(key => [key, key]);
  } else {
    arg0.text = keys;
  }
  return {
    message0: '%1: %2,',
    args0: [arg0, arg1],
    colour,
    previousStatement: statementType,
    nextStatement: statementType
  };
}

Blockly.Blocks.field_attr = {
  init() {
    this.jsonInit(createKVConf('key', '', Blockly.Msg.ATTRS_KV_HUE));
    this.setTooltip(() => {
      return 'Pair key values';
    });
  }
};

Blockly.Blocks.field_attr_anchor = {
  init() {
    this.jsonInit(createKVConf(['anchorX', 'anchorY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_xy = {
  init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
  }
};

Blockly.Blocks.field_attr_size = {
  init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
  }
};

Blockly.Blocks.field_attr_bgcolor = {
  init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
  }
};

Blockly.Blocks.field_attr_opacity = {
  init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
  }
};

Blockly.Blocks.field_attr_rotate = {
  init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
  }
};

Blockly.Blocks.field_attr_scale = {
  init() {
    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_translate = {
  init() {
    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_skew = {
  init() {
    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
  }
};

Blockly.Blocks.field_attr_border_radius = {
  init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
  }
};

Blockly.Blocks.field_attr_borderWidth = {
  init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
  }
};

Blockly.Blocks.field_attr_borderStyle = {
  init() {
    this.jsonInit(createKVConf({ prop: 'borderStyle', options: ['solid', 'dashed'] }, 'String'));
  }
};

Blockly.Blocks.field_attr_borderColour = {
  init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
  }
};

Blockly.Blocks.field_attr_dashOffset = {
  init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
  }
};

Blockly.Blocks.field_attr_texture = {
  init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
  }
};

Blockly.Blocks.field_attr_text = {
  init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontSize = {
  init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontFamily = {
  init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontStyle = {
  init() {
    this.jsonInit(createKVConf({ prop: 'fontStyle', options: ['normal', 'italic', 'oblique'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontVariant = {
  init() {
    this.jsonInit(createKVConf({ prop: 'fontVariant', options: ['normal', 'small-caps'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_fontWeight = {
  init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_textAlign = {
  init() {
    this.jsonInit(createKVConf({ prop: 'textAlign', options: ['left', 'right', 'center'] }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_lineHeight = {
  init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_d = {
  init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineWidth = {
  init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_lineDash = {
  init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  }
};

Blockly.Blocks.field_attr_lineCap = {
  init() {
    this.jsonInit(createKVConf({ prop: 'lineCap', options: ['butt', 'round', 'square'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_lineJoin = {
  init() {
    this.jsonInit(createKVConf({ prop: 'lineJoin', options: ['miter', 'round', 'bevel'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_bounding = {
  init() {
    this.jsonInit(createKVConf({ prop: 'bounding', options: ['box', 'path'] }, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_strokeColour = {
  init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

Blockly.Blocks.field_attr_fillColour = {
  init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
  }
};

function gencode(block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || `'${block.getFieldValue('VALUE')}'` || 'null';
  return `\n'${key}': ${value},`;
}

Object.keys(Blockly.Blocks).forEach(key => {
  if (key.indexOf('field_attr') === 0 && key !== 'field_attr_inc') {
    Blockly.JavaScript[key] = gencode;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

const colour = Blockly.Msg.FLOW_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.flow_wait = {
  init() {
    this.jsonInit({
      message0: 'wait %1 millsec 🕙',
      args0: [{ type: 'field_input', name: 'SEC', check: 'Number', text: '16' }],
      colour,
      previousStatement: 'Statement',
      nextStatement: null
    });
  }
};

Blockly.JavaScript.flow_wait = function (block) {
  const ms = parseInt(block.getFieldValue('SEC'), 10);

  return `await utils.wait(${ms});\n`;
};

Blockly.Blocks.flow_frame = {
  init() {
    this.jsonInit({
      message0: 'next frame of %1 ⌛',
      args0: [{ type: 'field_dropdown',
        name: 'LAYER',
        options: [['fglayer', 'fglayer'], ['bglayer', 'bglayer']]
      }],
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.flow_frame = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `await scene.layer('${layerName}').prepareRender();\n`;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

const controls_if_init = Blockly.Blocks.controls_if.init;

Blockly.Blocks.controls_if.init = function () {
  controls_if_init.call(this);
  for (let i = 0; i < 20; i++) {
    const input = this.getInput(`DO${i}`);
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
  let clauseBlock = containerBlock.nextConnection.targetBlock();
  let i = 1;
  let inputIf, inputDo;
  while (clauseBlock) {
    switch (clauseBlock.type) {
      case 'controls_if_elseif':
        inputIf = this.getInput(`IF${i}`);
        inputDo = this.getInput(`DO${i}`);
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
        throw TypeError(`Unknown block type: ${clauseBlock.type}`);
    }
    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
  }
};

const controls_repeat_ext_init = Blockly.Blocks.controls_repeat_ext.init;
Blockly.Blocks.controls_repeat_ext.init = function () {
  controls_repeat_ext_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Blockly.Msg.FLOWS_HUE);
};

const controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init;
Blockly.Blocks.controls_whileUntil.init = function () {
  controls_whileUntil_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Blockly.Msg.FLOWS_HUE);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

Blockly.Blocks.nil = {
  init() {
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
  const value = block.getFieldValue('VALUE');
  return [value, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.boolean = {
  init() {
    Blockly.Blocks.logic_boolean.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.boolean = Blockly.JavaScript.logic_boolean;

Blockly.Blocks.number = {
  init() {
    Blockly.Blocks.math_number.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.number = Blockly.JavaScript.math_number;

Blockly.Blocks.string = {
  init() {
    Blockly.Blocks.text.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  }
};
Blockly.JavaScript.string = Blockly.JavaScript.text;

const lists_create_with_init = Blockly.Blocks.lists_create_with.init;
Blockly.Blocks.lists_create_with.init = function () {
  lists_create_with_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.object_create = {
  init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS').setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Blockly.Msg.LITERAL_HUE);
    this.setTooltip(() => {
      return 'Create object';
    });
  }
};
Blockly.JavaScript.object_create = function (block) {
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  return [`{${fields}\n}`, Blockly.JavaScript.ORDER_MEMBER];
};

const colour_picker_init = Blockly.Blocks.colour_picker.init;

Blockly.Blocks.colour_picker.init = function () {
  colour_picker_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

const Blockly = __webpack_require__(8);

const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal() {
  const signals = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Signals');
  if (signals.length > 0) {
    return signals.map(s => [s, s]);
  }
  return [['START', 'START']];
}

function listSprite() {
  const sprites = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Sprites');
  if (sprites.length > 0) {
    return sprites.map(s => [s, s]);
  }
  return [['no sprites'], ['no sprites']];
}

Blockly.Blocks.signal_do = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩 do',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal
      }],
      // message1: '(sender, receiver, data)',
      colour,
      nextStatement
    });
  }
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal
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
        text: `Sprite_${Math.random().toString().slice(2, 7)}`
      }],
      colour,
      nextStatement
    });
  }
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init() {
    this.jsonInit({
      message0: 'On signals %1 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'SIG',
        options: listSignal
      }],
      message1: 'when receiver is %1',
      args1: [{
        type: 'field_dropdown',
        name: 'ID',
        options: listSprite
      }],
      colour,
      nextStatement
    });
  }
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.signal_send = {
  init() {
    this.jsonInit({
      message0: '%1 send signal %2 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'TARGET',
        options: [['receiver', 'receiver'], ['sender', 'sender']]
      }, {
        type: 'field_input',
        name: 'NAME',
        text: 'MY_SIGNAL',
        check: 'String'
      }],
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.signal_send = function (block) {
  const target = block.getFieldValue('TARGET');
  const signal = block.getFieldValue('NAME');

  return `utils.Signal.send('${signal}', {sender:${target}});\n`;
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
const dropdowns = new Map();

const Dropdown = {
  set(key, value) {
    const dropdown = dropdowns.get(key) || new Set();
    dropdown.add(value);
    dropdowns.set(key, dropdown);
    return dropdown;
  },
  get(key) {
    return [...(dropdowns.get(key) || [])];
  },
  clear() {
    dropdowns.clear();
  }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const Blockly = __webpack_require__(8);

const colour = Blockly.Msg.SPRITE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

const sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: () => {
    const sprites = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('Sprites');
    return [['receiver', 'receiver'], ['sender', 'sender']].concat(sprites.map(s => [s, s]));
  }
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: 'append %1 to %2',
      args0: [sender_receiver_dropdown, { type: 'field_dropdown',
        name: 'LAYER',
        options: [['fglayer', 'fglayer'], ['bglayer', 'bglayer']]
      }],
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.sprite_append_to = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  const layerName = block.getFieldValue('LAYER');

  if (sprite !== 'sender' && sprite !== 'receiver') {
    sprite = `utils.ElementList.getElementById('${sprite}')`;
  }

  return `scene.layer('${layerName}').append(${sprite});\n`;
};

Blockly.Blocks.sprite_attrs = {
  init() {
    this.jsonInit({
      message0: 'set %1 attrs',
      args0: [sender_receiver_dropdown],
      message1: '%1',
      args1: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.sprite_attrs = function (block) {
  let sprite = block.getFieldValue('SPRITE');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');

  if (sprite !== 'sender' && sprite !== 'receiver') {
    sprite = `utils.ElementList.getElementById('${sprite}')`;
  }

  return `${sprite}.attr(utils.parse_attr({${attrs}\n}));\n`;
};

Blockly.Blocks.sprite_create_attrs = {
  init() {
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
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.sprite_create_attrs = function (block) {
  const type = block.getFieldValue('TYPE');
  const name = block.getFieldValue('NAME');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `utils.ElementList.add(spritejs.createElement('${type}', utils.parse_attr({name: '${name}'}, {${attrs}\n})));\n`;
};

Blockly.Blocks.sprite_each_elements_named = {
  init() {
    this.jsonInit({
      message0: 'each elements named %1',
      args0: [{
        type: 'field_dropdown',
        name: 'NAME',
        options: () => {
          const spriteNames = _dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].get('SpriteNames');
          if (spriteNames.length > 0) {
            return spriteNames.map(s => [s, s]);
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
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.sprite_each_elements_named = function (block) {
  const name = block.getFieldValue('NAME');
  const code = Blockly.JavaScript.statementToCode(block, 'DO');
  return `await Promise.all(utils.ElementList.getElementsByName('${name}').map(async (item, index) => {\n${code}\n}));\n`;
};

function plugEachItemInForEachScope() {
  const parent = this.getParent();
  let top = parent;
  let isInScope = false;
  while (top) {
    if (top.type === 'sprite_each_elements_named') {
      isInScope = true;
      break;
    }
    top = top.getParent();
  }
  if (parent && !isInScope) {
    console.error(`Block '${this.type}' must be placed inside the Block 'sprite_each_elements_named'.`);
    this.unplug(true);
  }
}

Blockly.Blocks.sprite_each_item_attrs = {
  init() {
    this.jsonInit({
      message0: 'set item attrs',
      message1: '%1',
      args1: [{ type: 'input_statement', name: 'ATTRS', check: 'KeyValue' }],
      colour: colour - 15,
      previousStatement,
      nextStatement
    });
  },
  onchange: plugEachItemInForEachScope
};

Blockly.JavaScript.sprite_each_item_attrs = function (block) {
  const code = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `item.attr(utils.parse_attr({${code}\n}));\n`;
};

Blockly.Blocks.sprite_item_append_to = {
  init() {
    this.jsonInit({
      message0: 'append item to %1',
      args0: [{ type: 'field_dropdown',
        name: 'LAYER',
        options: [['fglayer', 'fglayer'], ['bglayer', 'bglayer']]
      }],
      colour: colour - 15,
      previousStatement,
      nextStatement
    });
  },
  onchange: plugEachItemInForEachScope
};

Blockly.JavaScript.sprite_item_append_to = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `scene.layer('${layerName}').append(item);\n`;
};

Blockly.Blocks.sprite_item_get_index = {
  init() {
    this.jsonInit({
      message0: 'index',
      colour: colour - 15,
      output: 'Number'
    });
  }
};

Blockly.JavaScript.sprite_item_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.sprite_animate = {
  init() {
    this.jsonInit({
      message0: '%1 %2 animate %3 ms',
      args0: [{
        type: 'field_dropdown',
        name: 'ASYNC?',
        options: [['⚡️', '-'], ['⌛️', 'await']]
      }, sender_receiver_dropdown, {
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
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.sprite_animate = function (block) {
  const isAsync = block.getFieldValue('ASYNC?') === 'await';
  const sprite = block.getFieldValue('SPRITE');
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  const easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  const from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  const to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  let code = `${sprite}.animate([{${from}}, {${to}}], {duration: ${duration}, fill: 'forwards', easing: ${easing}})`;
  if (isAsync) code = `if(!${sprite}.layer){console.error('${sprite} must append to layer before animated!');} await ${code}.finished`;

  return `${code};\n`;
};

Blockly.Blocks.sprite_item_animate = {
  init() {
    this.jsonInit({
      message0: '%1 item animate %2 ms',
      args0: [{
        type: 'field_dropdown',
        name: 'ASYNC?',
        options: [['⚡️', '-'], ['⌛️', 'await']]
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
      colour: colour - 15,
      previousStatement,
      nextStatement
    });
  },
  onchange: plugEachItemInForEachScope
};

Blockly.JavaScript.sprite_item_animate = function (block) {
  const isAsync = block.getFieldValue('ASYNC?') === 'await';
  const sprite = 'item';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  const easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  const from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  const to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  let code = `${sprite}.animate([{${from}}, {${to}}], {duration: ${duration}, fill: 'forwards', easing: ${easing}})`;
  if (isAsync) code = `if(!${sprite}.layer){console.error('${sprite} must append to layer before animated!');} await ${code}.finished`;

  return `${code};\n`;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const Blockly = __webpack_require__(8);

const colour = Blockly.Msg.LOG_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.log_log = {
  init() {
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
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.log_log = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  const level = block.getFieldValue('LOG');
  return `console.${level}(${msg});\n`;
};

Blockly.Blocks.log_alert = {
  init() {
    this.jsonInit({
      message0: '🔔 alert %1',
      args0: [{
        type: 'input_value',
        name: 'MSG'
      }],
      // message1: '(sender, receiver, data)',
      colour,
      previousStatement,
      nextStatement
    });
  }
};

Blockly.JavaScript.log_alert = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  return `alert(${msg});\n`;
};

/***/ })
/******/ ]);