const Blockly = require('blockly');
const Msg = Blockly.Msg;

Blockly.Blocks.field_attr_inc = {
  init() {
    this.jsonInit({
      message0: Msg.FIELD_ATTR_INC_MSG0,
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
      tooltip: Msg.FIELD_ATTR_INC_TOOLTIP,
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
    arg0.text = Msg.$(keys.prop, 'ATTR');
    arg1.type = 'field_dropdown';
    arg1.options = keys.options.map(s => [Msg.$(s, 'ATTR_VALUE'), s]);
  } else if(Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(key => [Msg.$(key, 'ATTR'), key]);
  } else {
    arg0.text = keys;
  }
  return {
    message0: Msg.KEYVALUE_MSG0,
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
    this.setTooltip(() => Msg.FIELD_ATTR_ANCHOR_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_xy = {
  init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_XY_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_size = {
  init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SIZE_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_bgcolor = {
  init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BGCOLOR_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_opacity = {
  init() {
    this.jsonInit(createKVConf('opacity', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_OPACITY_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_rotate = {
  init() {
    this.jsonInit(createKVConf('rotate', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_ROTATE_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_scale = {
  init() {
    this.jsonInit(createKVConf(['scaleX', 'scaleY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SCALE_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_translate = {
  init() {
    this.jsonInit(createKVConf(['translateX', 'translateY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_TRANSLATE_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_skew = {
  init() {
    this.jsonInit(createKVConf(['skewX', 'skewY'], 'Number'));
    this.setTooltip(() => Msg.FIELD_ATTR_SKEW_TOOLTIP.replace('%1', this.getFieldValue('KEY')));
  },
};

Blockly.Blocks.field_attr_borderRadius = {
  init() {
    this.jsonInit(createKVConf('borderRadius', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_borderWidth = {
  init() {
    this.jsonInit(createKVConf('borderWidth', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_borderStyle = {
  init() {
    this.jsonInit(createKVConf({prop: 'borderStyle', options: ['solid', 'dashed']}, 'String'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_borderColour = {
  init() {
    this.jsonInit(createKVConf('borderColor', 'Colour'));
    this.setTooltip(Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_dashOffset = {
  init() {
    this.jsonInit(createKVConf('dashOffset', 'Number'));
    this.setTooltip(Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_texture = {
  init() {
    this.jsonInit(createKVConf('texture', 'String', Blockly.Msg.ATTRS_SPRITE_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTURE_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_text = {
  init() {
    this.jsonInit(createKVConf('text', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXT_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fontSize = {
  init() {
    this.jsonInit(createKVConf('fontSize', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSIZE_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fontFamily = {
  init() {
    this.jsonInit(createKVConf('fontFamily', 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fontStyle = {
  init() {
    this.jsonInit(createKVConf({prop: 'fontStyle', options: ['normal', 'italic', 'oblique']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fontVariant = {
  init() {
    this.jsonInit(createKVConf({prop: 'fontVariant', options: ['normal', 'small-caps']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fontWeight = {
  init() {
    this.jsonInit(createKVConf({
      prop: 'fontWeight',
      options: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    }, 'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_textAlign = {
  init() {
    this.jsonInit(createKVConf({prop: 'textAlign', options: ['left', 'right', 'center']},
      'String', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineHeight = {
  init() {
    this.jsonInit(createKVConf('lineHeight', 'Number', Blockly.Msg.ATTRS_LABEL_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_d = {
  init() {
    this.jsonInit(createKVConf('d', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_D_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineWidth = {
  init() {
    this.jsonInit(createKVConf('lineWidth', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineDash = {
  init() {
    this.jsonInit(createKVConf('lineDash', 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASH_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineDashOffset = {
  init() {
    this.jsonInit(createKVConf('lineDashOffset', 'Number', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineCap = {
  init() {
    this.jsonInit(createKVConf({prop: 'lineCap', options: ['butt', 'round', 'square']},
      'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINECAP_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_lineJoin = {
  init() {
    this.jsonInit(createKVConf({prop: 'lineJoin', options: ['miter', 'round', 'bevel']},
      'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_LINEJOIN_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_bounding = {
  init() {
    this.jsonInit(createKVConf({prop: 'bounding', options: ['box', 'path']}, 'String', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(() => Msg.FIELD_ATTR_BOUNDING_TOOLTIP.replace('%1', this.getFieldValue('VALUE')));
  },
};

Blockly.Blocks.field_attr_strokeColour = {
  init() {
    this.jsonInit(createKVConf('strokeColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP);
  },
};

Blockly.Blocks.field_attr_fillColour = {
  init() {
    this.jsonInit(createKVConf('fillColor', 'Colour', Blockly.Msg.ATTRS_PATH_HUE));
    this.setTooltip(Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP);
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
