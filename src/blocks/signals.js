import {Dropdown} from '../dropdown';
import {plugEachItemInForEachScope} from './utils';

const Blockly = require('blockly');

const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal(...extras) {
  const signals = ['START'];
  return () => {
    return [...signals, ...extras, ...Dropdown.get('Signals')].map(s => [s, s]);
  };
}

function listSprite() {
  const sprites = Dropdown.get('Sprites');
  if(sprites.length > 0) {
    return sprites.map(s => [s, s]);
  }
  return [['', '']];
}

Blockly.Blocks.signal_do = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩 do',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal('LAYER_CLICKED', 'ELEMENT_DESTROYED'),
        },
      ],
      // message1: '(sender, receiver, data)',
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init() {
    this.jsonInit({
      message0: 'On signal %1 🚩',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal(),
        },
      ],
      message1: 'new %1 as receiver',
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [
          ['Sprite', 'Sprite'],
          ['Label', 'Label'],
          ['Path', 'Path'],
        ],
      }],
      message2: 'ID is %1',
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: `Sprite_${Math.random().toString().slice(2, 7)}`,
      }],
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init() {
    this.jsonInit({
      message0: 'On signals %1 🚩',
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIG',
          options: listSignal(),
        },
      ],
      message1: 'when receiver is %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'ID',
          options: listSprite,
        },
      ],
      colour,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.get_data_prop = {
  init() {
    this.jsonInit({
      message0: 'data get %1',
      args0: [{
        type: 'field_dropdown',
        name: 'PROP',
        options: [
          'offsetX',
          'offsetY',
          'layerX',
          'layerY',
          'altKey',
          'ctrlKey',
          'shiftKey',
          'button',
          'buttons',
        ].map(s => [s, s]),
      }],
      colour,
      output: true,
      tooltip: 'get signal data property value.',
    });
  },
};

Blockly.JavaScript.get_data_prop = function (block) {
  const prop = block.getFieldValue('PROP');
  return [`data.${prop}`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks.get_data_prop_custom = {
  init() {
    this.jsonInit({
      message0: 'data get %1',
      args0: [{
        type: 'field_input',
        name: 'PROP',
        text: 'key',
      }],
      colour,
      output: true,
      tooltip: 'get signal data property value.',
    });
  },
};

Blockly.JavaScript.get_data_prop_custom = function (block) {
  const prop = block.getFieldValue('PROP');
  return [`data.${prop}`, Blockly.JavaScript.ORDER_MEMBER];
};

const events = ['immediately', 'onclick', 'ondblclick',
  'onmousedown', 'onmousemove', 'onmouseup', 'onmouseenter', 'onmouseleave'];

Blockly.Blocks.signal_onevent_send = {
  init() {
    this.jsonInit({
      message0: '%1 %2 send %3 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'TARGET',
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
        type: 'field_dropdown',
        name: 'EVENT',
        options: events.map(s => [s, s]),
      }, {
        type: 'field_input',
        name: 'SIGNAL',
        text: 'MY_SIGNAL',
      }],
      message1: 'with data %1',
      args1: [
        {
          type: 'input_statement',
          name: 'DATA',
          check: 'KeyValue',
        },
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: 'When event send signal.',
    });
  },
};

Blockly.JavaScript.signal_onevent_send = function (block) {
  const target = block.getFieldValue('TARGET');
  const event = block.getFieldValue('EVENT');
  const signal = block.getFieldValue('SIGNAL');
  const data = Blockly.JavaScript.statementToCode(block, 'DATA');

  if(event !== 'immediately') {
    const eventName = event.slice(2);
    return `${target}.on('${eventName}', 
      evt => {
        const {altKey, button, buttons, ctrlKey, shiftKey} = evt.originalEvent;
        utils.Signal.send('${signal}', 
          {
            sender:${target},
            data: Object.assign(
              {
                target: evt.target,
                offsetX: evt.offsetX,
                offsetY: evt.offsetY,
                layerX: evt.layerX,
                layerY: evt.layerY,
                altKey,
                button,
                buttons,
                ctrlKey,
                shiftKey,
              },
              {${data}},
            ),
          });
      });`;
  }
  return `utils.Signal.send('${signal}', {sender:${target}, data: Object.assign({target: ${target}}, {${data}})});\n`;
};
