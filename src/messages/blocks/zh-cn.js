const Blockly = require('blockly');

const {Msg} = Blockly;

Msg.COMMON_FGLAYER = 'fglayer';
Msg.COMMON_BGLAYER = 'bglayer';
Msg.COMMON_TARGET = 'target';
Msg.COMMON_SENDER = 'sender';
Msg.COMMON_RECEIVER = 'receiver';
Msg.COMMON_ITEM = 'item';

Msg.LITERAL_NULL = 'null';
Msg.LITERAL_UNDEFINED = 'undefined';

Msg.NIL_TOOLTIP = 'A %1 value.';
Msg.OBJECT_CREATE_TOOLTIP = 'Create a object.';
Msg.LOOP_GET_INDEX_MSG0 = 'index';
Msg.LOOP_GET_INDEX_TOOLTIP = 'Index value in a loop.';

Msg.ATTR_ID = 'id';
Msg.ATTR_NAME = 'name';
Msg.ATTR_ANCHORX = 'anchorX';
Msg.ATTR_ANCHORY = 'anchorY';
Msg.ATTR_X = 'x';
Msg.ATTR_Y = 'y';
Msg.ATTR_WIDTH = 'width';
Msg.ATTR_HEIGHT = 'height';
Msg.ATTR_BGCOLOR = 'bgcolor';
Msg.ATTR_OPACITY = 'opacity';
Msg.ATTR_SCALEX = 'scaleX';
Msg.ATTR_SCALEY = 'scaleY';
Msg.ATTR_TRANSLATEX = 'translateX';
Msg.ATTR_TRANSLATEY = 'translateY';
Msg.ATTR_SKEWX = 'skewX';
Msg.ATTR_SKEWY = 'skewY';
Msg.ATTR_BORDERRADIUS = 'borderRadius';
Msg.ATTR_BORDERWIDTH = 'borderWidth';
Msg.ATTR_BORDERSTYLE = 'borderStyle';
Msg.ATTR_BORDERCOLOR = 'borderColor';
Msg.ATTR_DASHOFFSET = 'dashOffset';
Msg.ATTR_TEXTURE = 'texture';
Msg.ATTR_TEXT = 'text';
Msg.ATTR_FONTSIZE = 'fontSize';
Msg.ATTR_FONTFAMILY = 'fontFamily';
Msg.ATTR_FONTSTYLE = 'fontStyle';
Msg.ATTR_FONTVARIANT = 'fontVariant';
Msg.ATTR_FONTWEIGHT = 'fontWeight';
Msg.ATTR_TEXTALIGN = 'textAlign';
Msg.ATTR_LINEHEIGHT = 'lineHeight';
Msg.ATTR_D = 'd';
Msg.ATTR_LINEWIDTH = 'lineWidth';
Msg.ATTR_LINEDASH = 'lineDash';
Msg.ATTR_LINEDASHOFFSET = 'lineDashOffset';
Msg.ATTR_LINECAP = 'lineCap';
Msg.ATTR_LINEJOIN = 'lineJoin';
Msg.ATTR_BOUNDING = 'bounding';
Msg.ATTR_STROKECOLOR = 'strokeColor';
Msg.ATTR_FILLCOLOR = 'fillColor';

Msg.ATTR_VALUE_SOLID = 'solid';
Msg.ATTR_VALUE_DASHED = 'dashed';
Msg.ATTR_VALUE_NORMAL = 'normal';
Msg.ATTR_VALUE_BOLD = 'bold';
Msg.ATTR_VALUE_LIGHTER = 'lighter';
Msg.ATTR_VALUE_ITALIC = 'italic';
Msg.ATTR_VALUE_OBLIQUE = 'oblique';
Msg['ATTR_VALUE_SMALL-CAPS'] = 'small-caps';
Msg.ATTR_VALUE_LEFT = 'left';
Msg.ATTR_VALUE_RIGHT = 'right';
Msg.ATTR_VALUE_CENTER = 'center';
Msg.ATTR_VALUE_BUTT = 'butt';
Msg.ATTR_VALUE_ROUND = 'round';
Msg.ATTR_VALUE_SQUARE = 'square';
Msg.ATTR_VALUE_MITER = 'miter';
Msg.ATTR_VALUE_BEVEL = 'bevel';
Msg.ATTR_VALUE_BOX = 'box';
Msg.ATTR_VALUE_PATH = 'path';

Msg.AWAIT_MSG0 = 'wait %1 millisec 🕙';
Msg.AWAIT_TOOLTIP = 'Await %1 milliseconds.';
Msg.AWAIT_FRAME_MSG0 = 'next frame of %1 ⌛';
Msg.AWAIT_FRAME_TOOLTIP = 'Await until next rendering frame.';

Msg.SPRITE_ANIMATE_MSG0 = '%1 %2 animate %3 s';
Msg.SPRITE_ANIMATE_MSG1 = 'from %1';
Msg.SPRITE_ANIMATE_MSG2 = 'to %1';
Msg.SPRITE_ANIMATE_MSG3 = 'easing %1';
Msg.SPRITE_ANIMATE_TOOLTIP = 'Play animate on element.';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT = '⚡️';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT = '⌛️ await';

Msg.EASING_MSG0 = '%1';
Msg.EASING_OPTION_EASING_EASE = 'ease';
Msg.EASING_OPTION_EASING_EASEIN = 'ease-in';
Msg.EASING_OPTION_EASING_EASEOUT = 'ease-out';
Msg.EASING_OPTION_EASING_EASEINOUT = 'ease-in-out';
Msg.EASING_OPTION_TOOLTIP = 'Set easing for animation.';

Msg.BEZIER_EASING_MSG0 = 'cubic-bezier %1 %2 %3 %4';
Msg.BEZIER_EASING_TOOLTIP = 'Set cubic-bezier easing for animation.';

Msg.FIELD_ATTR_INC_MSG0 = '%1 %2';
Msg.FIELD_ATTR_INC_TOOLTIP = 'Change attribute values of element.';

Msg.KEYVALUE_MSG0 = '%1: %2,';
Msg.KEYVALUE_TOOLTIP = 'Greate key-value pair.';

Msg.FIELD_ATTR_ANCHOR_TOOLTIP = 'Set %1 of element.';
Msg.FIELD_ATTR_XY_TOOLTIP = 'Set %1-coordinate of element.';
Msg.FIELD_ATTR_SIZE_TOOLTIP = 'Set %1 of element.';
Msg.FIELD_ATTR_BGCOLOR_TOOLTIP = 'Set background color of element.';
Msg.FIELD_ATTR_OPACITY_TOOLTIP = 'Set opacity of element.';
Msg.FIELD_ATTR_ROTATE_TOOLTIP = 'Set rotation of element.';
Msg.FIELD_ATTR_SCALE_TOOLTIP = 'Set %1 of element.';
Msg.FIELD_ATTR_TRANSLATE_TOOLTIP = 'Set %1 of element.';
Msg.FIELD_ATTR_SKEW_TOOLTIP = 'Set %1 of element.';
Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP = 'Set borderRadius of element.';
Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP = 'Set borderWidth of element.';
Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP = 'Set borderStyle of element.';
Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP = 'Set borderColor of element.';
Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP = 'Set dashOffset of element, avaliable if border is dashed-line.';
Msg.FIELD_ATTR_TEXTURE_TOOLTIP = 'Set texture of a sprite.';
Msg.FIELD_ATTR_TEXT_TOOLTIP = 'Set text of a label.';
Msg.FIELD_ATTR_FONTSIZE_TOOLTIP = 'Set fontSize of a label.';
Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP = 'Set fontFamily of a label.';
Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP = 'Set fontStyle of a label.';
Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP = 'Set fontVariant of a label.';
Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP = 'Set fontWeight of a label.';
Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP = 'Set textAlign of a label.';
Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP = 'Set lineHeight of a label.';
Msg.FIELD_ATTR_D_TOOLTIP = 'Set svg-path of a path.';
Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP = 'Set lineWidth of a path.';
Msg.FIELD_ATTR_LINEDASH_TOOLTIP = 'Set stroke line of a path to dash-line.';
Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP = 'Set dash offset if a path\'s stroke line style is dashed-line.';
Msg.FIELD_ATTR_LINECAP_TOOLTIP = 'Set lineCap of a path.';
Msg.FIELD_ATTR_LINEJOIN_TOOLTIP = 'Set lineJoin of a path.';
Msg.FIELD_ATTR_BOUNDING_TOOLTIP = 'Use bounding %1 to check collision.';
Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP = 'Set strokeColor of a path or label.';
Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP = 'Set fillColor of a path or label.';

Msg.RANDOM_NUMBER_MSG0 = '🎲 random number';
Msg.RANDOM_NUMBER_TOOLTIP = 'Get a random number ≥ 0 and < 1.';

Msg.RANDOM_INTEGER_FROM_TO_MSG0 = '🎲 random int ≥ %1 < %2';
Msg.RANDOM_INTEGER_FROM_TO_TOOLTIP = 'Get a random integer ≥ %1 and < %2.';

Msg.RANDOM_STRING_MSG0 = '🎲 random string';
Msg.RANDOM_STRING_TOOLTIP = 'Get a 11 bytes length random string.';

Msg.RANDOM_COLOUR_RGB_MSG0 = '🎲 COLOUR';
Msg.RANDOM_COLOUR_RGB_TOOLTIP = 'Get a random rgb color.';

Msg.RANDOM_COLOUR_HUE_MSG0 = '🎲 random COLOUR_HUE';
Msg.RANDOM_COLOUR_HUE_MSG1 = 'S %1% L %2% A %3.';
Msg.RANDOM_COLOUR_HUE_TOOLTIP = 'Get a random hsla color.';

Msg.LOG_OPTION_LOG_LOG = 'log';
Msg.LOG_OPTION_LOG_WARN = 'warn';
Msg.LOG_OPTION_LOG_ERROR = 'error';
Msg.LOG_TOOLTIP = 'Output message to console.';
Msg.LOG_ALERT_MSG0 = '🔔 alert %1';
Msg.LOG_ALERT_TOOLTIP = 'Popup a message box.';
