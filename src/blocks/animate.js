import {Dropdown} from '../dropdown';
import {plugEachItemInForEachScope} from './utils';
const Blockly = require('blockly');

const colour = Blockly.Msg.ANIMATE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.await = {
  init() {
    this.jsonInit({
      message0: 'wait %1 millsec 🕙',
      args0: [
        {type: 'field_number', name: 'SEC', value: 16},
      ],
      colour,
      previousStatement: 'Statement',
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.await = function (block) {
  const ms = parseInt(block.getFieldValue('SEC'), 10);

  return `await utils.wait(${ms});\n`;
};

Blockly.Blocks.await_frame = {
  init() {
    this.jsonInit({
      message0: 'next frame of %1 ⌛',
      args0: [
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            ['fglayer', 'fglayer'],
            ['bglayer', 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.await_frame = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `await scene.layer('${layerName}').prepareRender();\n`;
};

Blockly.Blocks.sprite_animate = {
  init() {
    this.jsonInit({
      message0: '%1 %2 animate %3 s',
      args0: [
        {
          type: 'field_dropdown',
          name: 'ASYNC?',
          options: [
            ['⚡️', '-'],
            ['⌛️', 'await'],
          ],
        }, {
          type: 'field_dropdown',
          name: 'SPRITE',
          options: () => {
            const sprites = Dropdown.get('Sprites');
            return [
              ['target', 'target'],
              ['sender', 'sender'],
              ['receiver', 'receiver'],
              ['item', 'item'],
            ].concat(sprites.map(s => [s, s]));
          },
        }, {
          type: 'input_value',
          name: 'DURATION',
          check: 'Number',
        },
      ],
      message1: 'from %1',
      args1: [
        {
          type: 'input_statement',
          name: 'FROM_ATTRS',
          check: 'KeyValue',
        },
      ],
      message2: 'to %1',
      args2: [
        {
          type: 'input_statement',
          name: 'TO_ATTRS',
          check: 'KeyValue',
        },
      ],
      message3: 'easing %1',
      args3: [
        {
          type: 'input_value',
          name: 'EASING',
          check: 'String',
        },
      ],
      colour,
      previousStatement,
      nextStatement,
    });
  },
  onchange: plugEachItemInForEachScope(),
};

Blockly.JavaScript.sprite_animate = function (block) {
  const isAsync = block.getFieldValue('ASYNC?') === 'await';
  const sprite = block.getFieldValue('SPRITE');
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  const easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  const from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  const to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  let code = `${sprite}.animate([{${from}}, {${to}}], {duration: ${duration * 1000}, fill: 'forwards', easing: ${easing}})`;
  if(isAsync) code = `if(!${sprite}.layer){console.error('${sprite} must append to layer before animated!');} await ${code}.finished`;

  return `${code};\n`;
};

Blockly.Blocks.easing = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'EASING',
          options: [
            ['ease', 'ease'],
            ['ease-in', 'ease-in'],
            ['ease-out', 'ease-out'],
            ['ease-in-out', 'ease-in-out'],
          ],
        },
      ],
      colour,
      output: 'String',
    });
  },
};

Blockly.JavaScript.easing = function (block) {
  const easing = block.getFieldValue('EASING');
  return [`'${easing}'`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.bezier_easing = {
  init() {
    this.jsonInit({
      message0: 'cubic-bezier %1 %2 %3 %4',
      args0: [
        {
          type: 'field_number',
          name: 'X0',
          value: 0.68,
        },
        {
          type: 'field_number',
          name: 'Y0',
          value: -0.55,
        },
        {
          type: 'field_number',
          name: 'X1',
          value: 0.265,
        },
        {
          type: 'field_number',
          name: 'Y1',
          value: 1.55,
        },
      ],
      colour,
      output: 'String',
    });
  },
};

Blockly.JavaScript.bezier_easing = function (block) {
  const x0 = block.getFieldValue('X0');
  const y0 = block.getFieldValue('Y0');
  const x1 = block.getFieldValue('X1');
  const y1 = block.getFieldValue('Y1');
  return [`'cubic-bezier(${x0},${y0},${x1},${y1})'`, Blockly.JavaScript.ORDER_NONE];
};
