import {Dropdown} from '../dropdown';

const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Blockly.Msg.SIGNALS_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

function listSignal(...extras) {
  const signals = ['START'];
  return () => {
    return [...signals, ...extras, ...Dropdown.get('Signals')].map(s => [Msg.$(s, 'SIGNAL_DO_OPTION_SIGNAL'), s]);
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
      message0: Msg.SIGNAL_DO_MSG0,
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIGNAL',
          options: listSignal('LAYER_CLICKED', 'ELEMENT_CREATED', 'ELEMENT_DESTROYED'),
        },
      ],
      // message1: '(sender, receiver, data)',
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_DO_TOOLTIP,
    });
  },
};

Blockly.JavaScript.signal_do = function (block) {
  return '';
};

Blockly.Blocks.signal_new_sprite_as_receiver = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0,
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIGNAL',
          options: listSignal(),
        },
      ],
      message1: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1,
      args1: [{
        type: 'field_dropdown',
        name: 'RECEIVER',
        options: [
          [Msg.COMMON_SPRITE, 'Sprite'],
          [Msg.COMMON_LABEL, 'Label'],
          [Msg.COMMON_PATH, 'Path'],
        ],
      }],
      message2: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2,
      args2: [{
        type: 'field_input',
        name: 'ID',
        check: 'String',
        text: `Sprite_${Math.random().toString().slice(2, 7)}`,
      }],
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP,
    });
  },
};

Blockly.JavaScript.signal_new_sprite_as_receiver = function (block) {
  return '';
};

Blockly.Blocks.signal_when_receiver_is = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0,
      args0: [
        {
          type: 'field_dropdown',
          name: 'SIGNAL',
          options: listSignal('ELEMENT_CREATED'),
        },
      ],
      message1: Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1,
      args1: [
        {
          type: 'field_dropdown',
          name: 'ID',
          options: listSprite,
        },
      ],
      colour,
      nextStatement,
      tooltip: Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP,
    });
  },
};

Blockly.JavaScript.signal_when_receiver_is = function () {
  return '';
};

Blockly.Blocks.get_data = {
  init() {
    this.jsonInit({
      message0: Msg.GET_DATA_MSG0,
      colour,
      output: 'Object',
      tooltip: Msg.GET_DATA_TOOLTIP,
    });
  },
};

Blockly.JavaScript.get_data = function (block) {
  return ['data', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.get_data_prop = {
  init() {
    this.jsonInit({
      message0: Msg.GET_DATA_PROP_MSG0,
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
          'buttons',
        ].map(s => [Msg.$(s, 'GET_DATA_PROP_OPTION_PROP'), s]),
      }],
      colour,
      output: ['Number', 'Boolean'],
      tooltip: Msg.GET_DATA_PROP_TOOLTIP,
    });
  },
};

Blockly.JavaScript.get_data_prop = function (block) {
  const prop = block.getFieldValue('PROP');
  return [`data[spritly.runtime.Symbols.${prop}]`, Blockly.JavaScript.ORDER_MEMBER];
};

const events = ['immediately', 'onclick', 'ondblclick',
  'onmousedown', 'onmousemove', 'onmouseup', 'onmouseenter', 'onmouseleave'];

Blockly.Blocks.signal_onevent_send = {
  init() {
    this.jsonInit({
      message0: Msg.SIGNAL_ONEVENT_SEND_MSG0,
      args0: [{
        type: 'input_value',
        name: 'SPRITE',
        check: 'Sprite',
      }, {
        type: 'field_dropdown',
        name: 'EVENT',
        options: events.map(s => [Msg.$(s, 'EVENT'), s]),
      }, {
        type: 'field_input',
        name: 'SIGNAL',
        text: 'MY_SIGNAL',
      }],
      message1: Msg.SIGNAL_ONEVENT_SEND_MSG1,
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
      tooltip: `${Msg.SIGNAL_ONEVENT_SEND_TOOLTIP}\n${Msg.SENDER_RECEIVER_TARGET_TOOLTIP}`,
    });
  },
};

Blockly.JavaScript.signal_onevent_send = function (block) {
  const target = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const event = block.getFieldValue('EVENT');
  const signal = block.getFieldValue('SIGNAL');
  const data = Blockly.JavaScript.statementToCode(block, 'DATA');

  if(event !== 'immediately') {
    const eventName = event.slice(2);
    return `${target}.on('${eventName}', 
  evt => {
    const {altKey, buttons, ctrlKey, shiftKey} = evt.originalEvent;
    const runtime = spritly.runtime;
    runtime.Signal.send('${signal}', 
      {
        sender:${target},
        data: Object.assign(
          {
            [runtime.Symbols.target]: evt.target,
            [runtime.Symbols.offsetX]: evt.offsetX,
            [runtime.Symbols.offsetY]: evt.offsetY,
            [runtime.Symbols.layerX]: evt.layerX,
            [runtime.Symbols.layerY]: evt.layerY,
            [runtime.Symbols.altKey]: altKey,
            [runtime.Symbols.buttons]: buttons,
            [runtime.Symbols.ctrlKey]: ctrlKey,
            [runtime.Symbols.shiftKey]: shiftKey,
          },
          {${data}},
        ),
      });
  });`;
  }
  return `spritly.runtime.Signal.send('${signal}', {sender:${target}, data: {${data}}});\n`;
};
