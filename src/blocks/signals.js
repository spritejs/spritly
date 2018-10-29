import {Dropdown} from '../dropdown';
const Blockly = require('blockly');

const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal(...extras) {
  const signals = ['START', 'ELEMENT_CREATED'];
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
          options: listSignal('FGLAYER_CLICKED', 'BGLAYER_CLICKED', 'ELEMENT_DESTROYED'),
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

Blockly.Blocks.signal_send = {
  init() {
    this.jsonInit({
      message0: '%1 send signal %2 🚩',
      args0: [{
        type: 'field_dropdown',
        name: 'TARGET',
        options: [
          ['receiver', 'receiver'],
          ['sender', 'sender'],
        ],
      }, {
        type: 'field_input',
        name: 'NAME',
        text: 'MY_SIGNAL',
        check: 'String',
      }],
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.signal_send = function (block) {
  const target = block.getFieldValue('TARGET');
  const signal = block.getFieldValue('NAME');

  return `utils.Signal.send('${signal}', {sender:${target}});\n`;
};
