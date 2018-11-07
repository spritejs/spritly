const Blockly = require('blockly');

const {Msg} = Blockly;

Msg.COMMON_FGLAYER = 'fglayer';
Msg.COMMON_BGLAYER = 'bglayer';
Msg.COMMON_TARGET = 'target';
Msg.COMMON_SENDER = 'sender';
Msg.COMMON_RECEIVER = 'receiver';
Msg.COMMON_SPRITE = 'Sprite';
Msg.COMMON_LABEL = 'Label';
Msg.COMMON_PATH = 'Path';

Msg.CATEGORY_SIGNALS = 'Signals';
Msg.CATEGORY_PROCEDURE = 'Procedure';
Msg.CATEGORY_SPRITES = 'Sprites';
Msg.CATEGORY_ATTRIBUTES = 'Attributes';
Msg.CATEGORY_ATTRIBUTES_COMMON = 'Common';
Msg.CATEGORY_ATTRIBUTES_SPRITE = 'Sprite';
Msg.CATEGORY_ATTRIBUTES_LABEL = 'Lable';
Msg.CATEGORY_ATTRIBUTES_PATH = 'Path';
Msg.CATEGORY_ANIM_ASYNC = 'Anim & Async';
Msg.CATEGORY_GETTER_SETTER = 'Getter & Setter';
Msg.CATEGORY_STORE = 'Store';
Msg.CATEGORY_LITERALS = 'Literals';
Msg.CATEGORY_LISTS = 'Lists';
Msg.CATEGORY_MATH = 'Math';
Msg.CATEGORY_LOGIC = 'Logic';
Msg.CATEGORY_FLOWS = 'Flows';
Msg.CATEGORY_LOG = 'Log';
Msg.CATEGORY_SOUND = 'Sound';

Msg.SENDER_RECEIVER_TARGET_TOOLTIP = `sender: the element who send the signal.
receiver: the element who receive the signal.
target: if the signal trigger by event, target is event.target.`;

Msg.FGLAYER_BGLAYER_TOOTIP = `fglayer receive DOM events.
bglayer ignore DOM events.`;


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
Msg.ATTR_ROTATE = 'rotate';
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
Msg.ATTR_CURSOR = 'cursor';
Msg.ATTR_DRAGGABLE = 'draggable';

Msg.ATTR_VALUE_YES = 'yes';
Msg.ATTR_VALUE_NO = 'no';
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

Msg.ATTR_VALUE_DEFAULT = 'default';
Msg.ATTR_VALUE_CROSSHAIR = 'crosshair';
Msg.ATTR_VALUE_POINTER = 'pointer';
Msg.ATTR_VALUE_MOVE = 'move';
Msg['ATTR_VALUE_E-RESIZE'] = 'e-resize';
Msg['ATTR_VALUE_NE-RESIZE'] = 'ne-resize';
Msg['ATTR_VALUE_SE-RESIZE'] = 'se-resize';
Msg['ATTR_VALUE_W-RESIZE'] = 'w-resize';
Msg['ATTR_VALUE_NW-RESIZE'] = 'nw-resize';
Msg['ATTR_VALUE_SW-RESIZE'] = 'sw-resize';
Msg['ATTR_VALUE_N-RESIZE'] = 'n-resize';
Msg['ATTR_VALUE_S-RESIZE'] = 's-resize';
Msg.ATTR_VALUE_TEXT = 'text';
Msg.ATTR_VALUE_WAIT = 'wait';
Msg.ATTR_VALUE_HELP = 'help';

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
Msg.FIELD_ATTR_CURSOR_TOOLTIP = 'Set cursor shape.';
Msg.FIELD_ATTR_DRAGGABLE_TOOLTIP = 'Set draggable.';

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

Msg.SIGNAL_DO_MSG0 = 'On signal %1 🚩 do';
Msg.SIGNAL_DO_TOOLTIP = 'When receive signal do something.';
Msg.SIGNAL_DO_OPTION_SIGNAL_START = 'START';
Msg.SIGNAL_DO_OPTION_SIGNAL_STORE_PROPERTY_UPDATE = 'STORE_PROPERTY_UPDATE';
Msg.SIGNAL_DO_OPTION_SIGNAL_LAYER_CLICKED = 'LAYER_CLICKED';
Msg.SIGNAL_DO_OPTION_SIGNAL_KEYDOWN = 'KEYDOWN';
Msg.SIGNAL_DO_OPTION_SIGNAL_KEYUP = 'KEYUP';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_CREATED = 'ELEMENT_CREATED';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_DESTROYED = 'ELEMENT_DESTROYED';

Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0 = 'On signal %1 🚩';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1 = 'new %1 as receiver';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2 = 'ID is %1';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = 'When receive signal create an element as receiver.';

Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0 = 'On signals %1 🚩';
Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1 = 'when receiver is %1';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = 'When signal has been send to receiver.';

Msg.GET_DATA_MSG0 = 'get signal data';
Msg.GET_DATA_TOOLTIP = 'Get signal data.';
Msg.GET_DATA_PROP_MSG0 = 'data get %1';
Msg.GET_DATA_PROP_TOOLTIP = 'get signal data property value.';
Msg.GET_DATA_PROP_TOOLTIP2 = 'get signal data property value.';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETX = 'offsetX';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETY = 'offsetY';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERX = 'layerX';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERY = 'layerY';
Msg.GET_DATA_PROP_OPTION_PROP_ALTKEY = 'altKey';
Msg.GET_DATA_PROP_OPTION_PROP_CTRLKEY = 'ctrlKey';
Msg.GET_DATA_PROP_OPTION_PROP_SHIFTKEY = 'shiftKey';
Msg.GET_DATA_PROP_OPTION_PROP_BUTTONS = 'buttons';
Msg.GET_DATA_PROP_OPTION_PROP_KEY = 'key';
Msg.GET_DATA_PROP_OPTION_PROP_KEYCODE = 'keyCode';
Msg.GET_DATA_PROP_OPTION_PROP_PROPERTY = 'changedProperty';
Msg.GET_DATA_PROP_OPTION_PROP_OLDVALUE = 'oldValue';
Msg.GET_DATA_PROP_OPTION_PROP_NEWVALUE = 'newValue';

Msg.EVENT_IMMEDIATELY = 'immediately';
Msg.EVENT_ONCLICK = 'onclick';
Msg.EVENT_ONDBLCLICK = 'ondblclick';
Msg.EVENT_ONMOUSEDOWN = 'onmousedown';
Msg.EVENT_ONMOUSEMOVE = 'onmousemove';
Msg.EVENT_ONMOUSEUP = 'onmouseup';
Msg.EVENT_ONMOUSEENTER = 'onmouseenter';
Msg.EVENT_ONMOUSELEAVE = 'onmouseleave';
Msg.EVENT_ONTAP = 'ontap';
Msg.EVENT_ONLONGTAP = 'onlongtap';
Msg.EVENT_ONDRAGGED = 'ondragged';
Msg.EVENT_ONDRAGGEDONTO = 'ondraggedonto';
Msg.EVENT_ONCOLLISION = 'oncollision';

Msg.SIGNAL_ONEVENT_SEND_MSG0 = '%1 %2 send %3 🚩';
Msg.SIGNAL_ONEVENT_SEND_MSG1 = 'with data %1';
Msg.SIGNAL_ONEVENT_SEND_TOOLTIP = 'When event send signal.';

Msg.SPRITE_MSG0_TOOLTIP = `Get sprite element.\n${Msg.SENDER_RECEIVER_TARGET_TOOLTIP}`;

Msg.SPRITE_APPEND_TO_MSG0 = 'append %1 to %2';
Msg.SPRITE_APPEND_TO_TOOLTIP = 'Append the element to layer.';

Msg.SPRITE_ATTRS_MSG0 = 'set %1 attrs';
Msg.SPRITE_ATTRS_TOOLTIP = 'Set attribute value to the element.';

Msg.SPRITE_CREATE_ATTRS_MSG0 = 'create %1';
Msg.SPRITE_CREATE_ATTRS_MSG1 = 'named %1 attrs';
Msg.SPRITE_CREATE_ATTRS_TOOLTIP = 'Create an element by name.\nYou can use loop statement to creat sevaral elements with the same name.';

Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0 = 'Elements named %1';
Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP = 'Get elements by name.';

Msg.SPRITE_DESTROY_MSG0 = '💣 destroy %1';
Msg.SPRITE_DESTROY_TOOLTIP = 'Remove the element from layer and destruct.';

Msg.SPRITE_GET_ATTR_MSG0 = '%1 get %2';
Msg.SPRITE_GET_ATTR_TOOLTIP = 'Get attribute value from the element.';

Msg.MATH_RANDOM_INT_TITLE = `🎲 ${Msg.MATH_RANDOM_INT_TITLE}`;
Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = `🎲 ${Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM}`;

Msg.LIST_FOREACH_MSG0 = 'foreach %1:';
Msg.LIST_FOREACH_MSG1 = 'do %1';
Msg.LIST_FOREACH_MSG2 = '%1 as item, %2 as index';
Msg.LIST_FOREACH_TOOLTIP = 'For each member of list, do something.';

Msg.LIST_INDEX_TOOLTIP = 'Get list iterate index.';
Msg.LIST_ITEM_TOOLTIP = 'Get list iterate item.';

Msg.OBJECT_GET_PROP_MSG0 = '%1.%2';
Msg.OBJECT_GET_PROP_TOOLTIP = 'Get object property.';

Msg.LISTS_CREATE_RANGE_MSG0 = 'Create list';
Msg.LISTS_CREATE_RANGE_MSG1 = 'from %1 to %2';
Msg.LISTS_CREATE_RANGE_TOOLTIP = 'Create list by range.';

Msg.STORE_SET_MSG0 = '📝 set key %1 value %2.';
Msg.STORE_SET_TOOLKIT = 'Set data {key, value} to global store.';

Msg.STORE_GET_MSG0 = '📝 get key %1';
Msg.STORE_GET_TOOLTIP = 'Get data[key] from global store.';

Msg.STORE_DELETE_MSG0 = '✂️ delete key %1';
Msg.STORE_DELETE_TOOLTIP = 'Delete data[key] from global store.';

Msg.FIELD_ATTR_TEXTUREFRAME_MSG0 = 'Frame %1';
Msg.FIELD_ATTR_TEXTUREFRAME_MSG1 = 'duration %1s';
Msg.FIELD_ATTR_TEXTUREFRAME_TOOLTIP = 'Set keyframe animations to element.';

Msg.SOUND_PLAY_MSG0 = '🔔 %1';
Msg.SOUND_PLAY_TOOLTIP = 'Play sound.';
