const Blockly = require('blockly');

const {Msg} = Blockly;

Msg.COMMON_FGLAYER = '前景图层';
Msg.COMMON_BGLAYER = '背景图层';
Msg.COMMON_TARGET = '目标元素';
Msg.COMMON_SENDER = '发送者';
Msg.COMMON_RECEIVER = '接收者';
Msg.COMMON_ITEM = '迭代元素';
Msg.COMMON_SPRITE = '精灵元素';
Msg.COMMON_LABEL = '文本元素';
Msg.COMMON_PATH = '矢量元素';

Msg.SENDER_RECEIVER_TARGET_TOOLTIP = `发送者：发送信号的元素。
接收者：接收信号的元素。
目标元素：如果信号由事件触发，目标元素是实际事件目标。`;

Msg.FGLAYER_BGLAYER_TOOTIP = `前景图层接收DOM事件，
背景图层不接收DOM事件。`;

Msg.LITERAL_NULL = '空';
Msg.LITERAL_UNDEFINED = '未定义';

Msg.NIL_TOOLTIP = '%1值。';
Msg.OBJECT_CREATE_TOOLTIP = '构造一个对象。';
Msg.LOOP_GET_INDEX_MSG0 = '索引值';
Msg.LOOP_GET_INDEX_TOOLTIP = '循环中的索引值。';

Msg.ATTR_ID = 'ID';
Msg.ATTR_NAME = '名字';
Msg.ATTR_ANCHORX = 'X向锚';
Msg.ATTR_ANCHORY = 'Y向锚';
Msg.ATTR_X = 'X坐标';
Msg.ATTR_Y = 'Y坐标';
Msg.ATTR_WIDTH = '宽';
Msg.ATTR_HEIGHT = '高';
Msg.ATTR_BGCOLOR = '背景色';
Msg.ATTR_OPACITY = '透明度';
Msg.ATTR_SCALEX = 'X向拉伸';
Msg.ATTR_SCALEY = 'Y向拉伸';
Msg.ATTR_TRANSLATEX = 'X向平移';
Msg.ATTR_TRANSLATEY = 'Y向平移';
Msg.ATTR_SKEWX = 'X向扭曲';
Msg.ATTR_SKEWY = 'Y向扭曲';
Msg.ATTR_ROTATE = '逆时针旋转';
Msg.ATTR_BORDERRADIUS = '圆角半径';
Msg.ATTR_BORDERWIDTH = '边框线宽';
Msg.ATTR_BORDERSTYLE = '边框样式';
Msg.ATTR_BORDERCOLOR = '边框颜色';
Msg.ATTR_DASHOFFSET = '虚线框偏移';
Msg.ATTR_TEXTURE = '图片纹理';
Msg.ATTR_TEXT = '文本';
Msg.ATTR_FONTSIZE = '字号';
Msg.ATTR_FONTFAMILY = '字体';
Msg.ATTR_FONTSTYLE = '字体样式';
Msg.ATTR_FONTVARIANT = '字体变体';
Msg.ATTR_FONTWEIGHT = '字体粗细';
Msg.ATTR_TEXTALIGN = '文本对齐';
Msg.ATTR_LINEHEIGHT = '文本行高';
Msg.ATTR_D = 'SVG路径';
Msg.ATTR_LINEWIDTH = '路径线宽';
Msg.ATTR_LINEDASH = '路径虚线样式';
Msg.ATTR_LINEDASHOFFSET = '路径虚线偏移';
Msg.ATTR_LINECAP = '线帽样式';
Msg.ATTR_LINEJOIN = '连线样式';
Msg.ATTR_BOUNDING = '碰撞边界';
Msg.ATTR_STROKECOLOR = '描线颜色';
Msg.ATTR_FILLCOLOR = '填充颜色';

Msg.ATTR_VALUE_SOLID = '实线';
Msg.ATTR_VALUE_DASHED = '虚线';
Msg.ATTR_VALUE_NORMAL = '常规';
Msg.ATTR_VALUE_BOLD = '粗体';
Msg.ATTR_VALUE_LIGHTER = '细体';
Msg.ATTR_VALUE_ITALIC = '斜体';
Msg.ATTR_VALUE_OBLIQUE = '倾斜';
Msg['ATTR_VALUE_SMALL-CAPS'] = '小型大写';
Msg.ATTR_VALUE_LEFT = '靠左';
Msg.ATTR_VALUE_RIGHT = '靠右';
Msg.ATTR_VALUE_CENTER = '居中';
Msg.ATTR_VALUE_BUTT = '平直';
Msg.ATTR_VALUE_ROUND = '圆形';
Msg.ATTR_VALUE_SQUARE = '方形';
Msg.ATTR_VALUE_MITER = '尖角';
Msg.ATTR_VALUE_BEVEL = '斜角';
Msg.ATTR_VALUE_BOX = '基于盒子';
Msg.ATTR_VALUE_PATH = '基于路径';

Msg.AWAIT_MSG0 = '等待 %1 毫秒 🕙';
Msg.AWAIT_TOOLTIP = '等待 %1 毫秒后继续执行后续操作。';
Msg.AWAIT_FRAME_MSG0 = '等待 %1 更新到下一帧 ⌛';
Msg.AWAIT_FRAME_TOOLTIP = '等待图层更新后继续执行后续操作。';

Msg.SPRITE_ANIMATE_MSG0 = '%1 %2 动画持续 %3 秒';
Msg.SPRITE_ANIMATE_MSG1 = '起始状态 %1';
Msg.SPRITE_ANIMATE_MSG2 = '结束状态 %1';
Msg.SPRITE_ANIMATE_MSG3 = '缓动策略 %1';
Msg.SPRITE_ANIMATE_TOOLTIP = '在指定元素上执行动画操作。';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT = '⚡️ 立即执行';
Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT = '⌛️ 执行并等待';

Msg.EASING_MSG0 = '%1';
Msg.EASING_OPTION_EASING_EASE = '匀速';
Msg.EASING_OPTION_EASING_EASEIN = '匀加速';
Msg.EASING_OPTION_EASING_EASEOUT = '匀减速';
Msg.EASING_OPTION_EASING_EASEINOUT = '先加速后减速';
Msg.EASING_OPTION_TOOLTIP = '为动画设置缓动策略。';

Msg.BEZIER_EASING_MSG0 = '贝塞尔曲线 %1 %2 %3 %4';
Msg.BEZIER_EASING_TOOLTIP = '将动画缓动策略设置为贝塞尔曲线。';

Msg.FIELD_ATTR_INC_MSG0 = '%1 %2';
Msg.FIELD_ATTR_INC_TOOLTIP = '在原值基础上改变属性值。';

Msg.KEYVALUE_MSG0 = '%1: %2,';
Msg.KEYVALUE_TOOLTIP = '设置“属性-值”对。';

Msg.FIELD_ATTR_ANCHOR_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_XY_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SIZE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BGCOLOR_TOOLTIP = '设置元素的背景色。';
Msg.FIELD_ATTR_OPACITY_TOOLTIP = '设置元素的透明度。';
Msg.FIELD_ATTR_ROTATE_TOOLTIP = '设置元素的逆时针旋转角度。';
Msg.FIELD_ATTR_SCALE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_TRANSLATE_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_SKEW_TOOLTIP = '设置元素的%1。';
Msg.FIELD_ATTR_BORDERRADIUS_TOOLTIP = '设置元素的圆角半径。';
Msg.FIELD_ATTR_BORDERWIDTH_TOOLTIP = '设置元素的边框宽度。';
Msg.FIELD_ATTR_BORDERSTYLE_TOOLTIP = '设置元素的边框样式。';
Msg.FIELD_ATTR_BORDERCOLOR_TOOLTIP = '设置元素的边框颜色。';
Msg.FIELD_ATTR_DASHOFFSET_TOOLTIP = '如果元素边框样式为虚线，设置边框虚线的偏移量。';
Msg.FIELD_ATTR_TEXTURE_TOOLTIP = '设置精灵元素的图片纹理。';
Msg.FIELD_ATTR_TEXT_TOOLTIP = '设置文本元素的内容。';
Msg.FIELD_ATTR_FONTSIZE_TOOLTIP = '设置文本元素的字号。';
Msg.FIELD_ATTR_FONTFAMILY_TOOLTIP = '设置文本元素的字体。';
Msg.FIELD_ATTR_FONTSTYLE_TOOLTIP = '设置文本元素的字体样式。';
Msg.FIELD_ATTR_FONTVARIANT_TOOLTIP = '设置文本元素的字体变体。';
Msg.FIELD_ATTR_FONTWEIGHT_TOOLTIP = '设置文本元素的字体粗细。';
Msg.FIELD_ATTR_TEXTALIGN_TOOLTIP = '设置文本元素的文字对齐方式。';
Msg.FIELD_ATTR_LINEHEIGHT_TOOLTIP = '设置文本元素的行高。';
Msg.FIELD_ATTR_D_TOOLTIP = '设置矢量元素的SVG路径。';
Msg.FIELD_ATTR_LINEWIDTH_TOOLTIP = '设置矢量元素的线宽。';
Msg.FIELD_ATTR_LINEDASH_TOOLTIP = '将矢量元素的描线设为虚线。';
Msg.FIELD_ATTR_LINEDASHOFFSET_TOOLTIP = '如果矢量元素的描线是虚线，设置虚线偏移量。';
Msg.FIELD_ATTR_LINECAP_TOOLTIP = '设置矢量元素的线帽样式。';
Msg.FIELD_ATTR_LINEJOIN_TOOLTIP = '设置矢量元素的连线样式。';
Msg.FIELD_ATTR_BOUNDING_TOOLTIP = '使用%1的边界方式来检测碰撞。';
Msg.FIELD_ATTR_STROKECOLOR_TOOLTIP = '设置一个矢量元素或文本元素的描线颜色。';
Msg.FIELD_ATTR_FILLCOLOR_TOOLTIP = '设置一个矢量元素或文本元素的填充颜色。';

Msg.RANDOM_NUMBER_MSG0 = '🎲 0~1之间随机数';
Msg.RANDOM_NUMBER_TOOLTIP = '获得一个大于等于0且小于1的随机数。';

Msg.RANDOM_INTEGER_FROM_TO_MSG0 = '🎲 %1~%2之间随机整数';
Msg.RANDOM_INTEGER_FROM_TO_TOOLTIP = '获得一个大于等于%1且小于%2的随机整数。';

Msg.RANDOM_STRING_MSG0 = '🎲 随机字符串';
Msg.RANDOM_STRING_TOOLTIP = '获得一个11个字符长度的随机字符串。';

Msg.RANDOM_COLOUR_RGB_MSG0 = '🎲 随机颜色';
Msg.RANDOM_COLOUR_RGB_TOOLTIP = '获得一个随机的RGB颜色。';

Msg.RANDOM_COLOUR_HUE_MSG0 = '🎲 随机色调';
Msg.RANDOM_COLOUR_HUE_MSG1 = '饱和 %1% 亮 %2% 透明 %3.';
Msg.RANDOM_COLOUR_HUE_TOOLTIP = '获得一个随机的HSLA颜色。';

Msg.LOG_OPTION_LOG_LOG = '记录';
Msg.LOG_OPTION_LOG_WARN = '警告';
Msg.LOG_OPTION_LOG_ERROR = '错误';
Msg.LOG_TOOLTIP = '输出信息到控制台。';
Msg.LOG_ALERT_MSG0 = '🔔 弹出 %1';
Msg.LOG_ALERT_TOOLTIP = '弹出一个会话框。';

Msg.SIGNAL_DO_MSG0 = '当收到信号为 %1 🚩 执行';
Msg.SIGNAL_DO_TOOLTIP = '当收到指定信号时，执行动作。';
Msg.SIGNAL_DO_OPTION_SIGNAL_START = '开始运行';
Msg.SIGNAL_DO_OPTION_SIGNAL_LAYER_CLICKED = '前景图层被鼠标点击';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_CREATED = '元素被创建';
Msg.SIGNAL_DO_OPTION_SIGNAL_ELEMENT_DESTROYED = '元素被销毁';

Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG0 = '收到信号为 %1 🚩 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG1 = '创建 %1 作为接收者';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_MSG2 = 'ID设为 %1';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号时，新建一个元素作为接收者并执行动作。';

Msg.SIGNAL_WHEN_RECEIVER_IS_MSG0 = '收到信号 %1 🚩';
Msg.SIGNAL_WHEN_RECEIVER_IS_MSG1 = '当接收者为 %1 时';
Msg.SIGNAL_NEW_SPRITE_AS_RECEIVER_TOOLTIP = '收到某个信号且接收者为特定元素时，执行动作。';

Msg.GET_DATA_PROP_MSG0 = '数据的 %1';
Msg.GET_DATA_PROP_TOOLTIP = '读取信号的数据属性。如果信号是由事件触发，可读取这些属性。';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETX = '相对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_OFFSETY = '相对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERX = '绝对坐标X';
Msg.GET_DATA_PROP_OPTION_PROP_LAYERY = '绝对坐标Y';
Msg.GET_DATA_PROP_OPTION_PROP_ALTKEY = '按下ALT键';
Msg.GET_DATA_PROP_OPTION_PROP_CTRLKEY = '按下CTRL键';
Msg.GET_DATA_PROP_OPTION_PROP_SHIFTKEY = '按下SHIFT键';
Msg.GET_DATA_PROP_OPTION_PROP_BUTTONS = '鼠标按键值';

Msg.GET_DATA_PROP_CUSTOM_MSG0 = '数据的 %1 属性';
Msg.GET_DATA_PROP_CUSTOM_TOOLTIP = '读取信号的数据属性。发起信号时可设置属性。';

Msg.EVENT_IMMEDIATELY = '立即';
Msg.EVENT_ONCLICK = '当被鼠标单击';
Msg.EVENT_ONDBLCLICK = '被鼠标双击';
Msg.EVENT_ONMOUSEDOWN = '按下鼠标按键';
Msg.EVENT_ONMOUSEMOVE = '鼠标在元素内部移动';
Msg.EVENT_ONMOUSEUP = '释放鼠标按键';
Msg.EVENT_ONMOUSEENTER = '鼠标进入元素';
Msg.EVENT_ONMOUSELEAVE = '鼠标离开元素';

Msg.SIGNAL_ONEVENT_SEND_MSG0 = '%1 %2 发送 %3 🚩';
Msg.SIGNAL_ONEVENT_SEND_MSG1 = '包含数据 %1';
Msg.SIGNAL_ONEVENT_SEND_TOOLTIP = '当事件发生时，发送信号。';

Msg.SPRITE_APPEND_TO_MSG0 = '%1 添加到 %2';
Msg.SPRITE_APPEND_TO_TOOLTIP = '添加元素到层。';

Msg.SPRITE_ATTRS_MSG0 = '设置 %1 属性';
Msg.SPRITE_ATTRS_TOOLTIP = '设置属性值到元素。';

Msg.SPRITE_CREATE_ATTRS_MSG0 = '创建 %1';
Msg.SPRITE_CREATE_ATTRS_MSG1 = '命名为 %1 包含属性';
Msg.SPRITE_CREATE_ATTRS_TOOLTIP = '创建一个指定名字的元素。可以使用循环语句创建多个同名元素。';

Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG0 = '遍历每个名为 %1 的元素';
Msg.SPRITE_EACH_ELEMENTS_NAMED_MSG1 = '执行 %1';
Msg.SPRITE_EACH_ELEMENTS_NAMED_TOOLTIP = '根据名字对元素执行迭代操作。';

Msg.SPRITE_DESTROY_MSG0 = '💣 销毁 %1';
Msg.SPRITE_DESTROY_TOOLTIP = '将元素移除层并销毁。';

Msg.SPRITE_GET_ATTR_MSG0 = '%1 的 %2';
Msg.SPRITE_GET_ATTR_TOOLTIP = '读取目标元素的属性值。';