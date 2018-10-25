const Blockly = require('blockly');

Blockly.Blocks.field_attr_inc = {
  init() {
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {type: 'field_dropdown',
          name: 'OP',
          options: [
            ['+', '+'],
            ['-', '-'],
            ['*', '*'],
            ['/', '/'],
            ['^', '**'],
          ]},
        {type: 'input_value', name: 'VALUE', check: 'Number'},
      ],
      colour: Blockly.Msg.ATTRS_KV_HUE,
    });
    this.setOutput(true, 'Number');
  },
};

Blockly.JavaScript.field_attr_inc = function (block) {
  const op = block.getFieldValue('OP');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ADDITION) || 0;
  return [`v => v ${op} ${value}`, Blockly.JavaScript.ORDER_MEMBER];
};

function createKVConf(keys = 'key', valueType = '', colour = Blockly.Msg.ATTRS_HUE, statementType = 'KeyValue') {
  const arg0 = {name: 'KEY', type: 'field_input'};
  if(Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(key => [key, key]);
  } else {
    arg0.text = keys;
  }
  return {
    message0: '%1: %2,',
    args0: [
      arg0,
      {type: 'input_value', name: 'VALUE', check: valueType},
    ],
    colour,
    previousStatement: statementType,
    nextStatement: statementType,
  };
}

Blockly.Blocks.field_attr = {
  init() {
    this.jsonInit(createKVConf('key', '', Blockly.Msg.ATTRS_KV_HUE));
    this.setTooltip(() => {
      return 'Pair key values';
    });
  },
};

Blockly.Blocks.field_attr_anchor = {
  init() {
    this.jsonInit(createKVConf(['anchorX', 'anchorY'], 'Number'));
  },
};

Blockly.Blocks.field_attr_xy = {
  init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
  },
};

Blockly.Blocks.field_attr_size = {
  init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
  },
};

Blockly.Blocks.field_attr_bgcolor = {
  init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
  },
};

Blockly.Blocks.field_attr_opacity = {
  init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
  },
};

Blockly.Blocks.field_attr_rotate = {
  init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
  },
};

Blockly.Blocks.field_attr_scale = {
  init() {
    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
  },
};

Blockly.Blocks.field_attr_translate = {
  init() {
    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
  },
};

Blockly.Blocks.field_attr_skew = {
  init() {
    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
  },
};

Blockly.Blocks.field_attr_border_radius = {
  init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
  },
};

Blockly.Blocks.field_attr_border = {
  init() {
    this.jsonInit({
      message0: 'set border with',
      message1: 'style: %1',
      args1: [{
        type: 'input_value',
        name: 'STYLE',
        check: 'String',
      }],
      message2: 'width: %1',
      args2: [{
        type: 'input_value',
        name: 'WIDTH',
        check: 'Number',
      }],
      message3: 'color: %1',
      args3: [{
        type: 'input_value',
        name: 'COLOUR',
        check: 'Colour',
      }],
      colour: Blockly.Msg.ATTRS_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue',
    });
  },
};

Blockly.JavaScript.field_attr_border = function (block) {
  const style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_NONE) || 'solid';
  const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_NONE) || 1;
  const color = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_NONE) || '#ff0000';
  return `\n'border': {
    width: ${width},
    style: ${style},
    color: ${color},
  },`;
};

Blockly.Blocks.field_attr_text = {
  init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_d = {
  init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

function gencode(block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `\n'${key}': ${value},`;
}

Object.keys(Blockly.Blocks).forEach((key) => {
  if(key.indexOf('field_attr') === 0 && key !== 'field_attr_inc' && key !== 'field_attr_border') {
    Blockly.JavaScript[key] = gencode;
  }
});
