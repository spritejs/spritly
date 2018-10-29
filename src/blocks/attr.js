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
      colour: Blockly.Msg.ATTRS_HUE,
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
  const arg1 = {type: 'input_value', name: 'VALUE', check: valueType};

  if(typeof keys !== 'string' && keys.prop && keys.options) {
    arg0.text = keys.prop;
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(s => [s, s]);
  } else if(Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(key => [key, key]);
  } else {
    arg0.text = keys;
  }
  return {
    message0: '%1: %2,',
    args0: [
      arg0,
      arg1,
    ],
    colour,
    previousStatement: statementType,
    nextStatement: statementType,
  };
}

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

Blockly.Blocks.field_attr_borderWidth = {
  init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
  },
};

Blockly.Blocks.field_attr_borderStyle = {
  init() {
    this.jsonInit(createKVConf({prop: 'borderStyle', options: ['solid', 'dashed']}, 'String'));
  },
};

Blockly.Blocks.field_attr_borderColour = {
  init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
  },
};

Blockly.Blocks.field_attr_dashOffset = {
  init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
  },
};

Blockly.Blocks.field_attr_texture = {
  init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
  },
};

Blockly.Blocks.field_attr_text = {
  init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_fontSize = {
  init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_fontFamily = {
  init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_fontStyle = {
  init() {
    this.jsonInit(createKVConf({prop: 'fontStyle', options: ['normal', 'italic', 'oblique']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_fontVariant = {
  init() {
    this.jsonInit(createKVConf({prop: 'fontVariant', options: ['normal', 'small-caps']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_fontWeight = {
  init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_textAlign = {
  init() {
    this.jsonInit(createKVConf({prop: 'textAlign', options: ['left', 'right', 'center']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_lineHeight = {
  init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
  },
};

Blockly.Blocks.field_attr_d = {
  init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_lineWidth = {
  init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_lineDash = {
  init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_lineDashOffset = {
  init() {
    this.jsonInit(createKVConf('lineDashOffset', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_lineCap = {
  init() {
    this.jsonInit(createKVConf({prop: 'lineCap', options: ['butt', 'round', 'square']},
      'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_lineJoin = {
  init() {
    this.jsonInit(createKVConf({prop: 'lineJoin', options: ['miter', 'round', 'bevel']},
      'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_bounding = {
  init() {
    this.jsonInit(createKVConf({prop: 'bounding', options: ['box', 'path']}, 'String', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_strokeColour = {
  init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

Blockly.Blocks.field_attr_fillColour = {
  init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
  },
};

function gencode(block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE)
    || `'${block.getFieldValue('VALUE')}'` || 'null';
  return `\n'${key}': ${value},`;
}

Object.keys(Blockly.Blocks).forEach((key) => {
  if(key.indexOf('field_attr') === 0 && key !== 'field_attr_inc') {
    Blockly.JavaScript[key] = gencode;
  }
});
