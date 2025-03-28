export type EV_TYPES = "EV_SYN" | "EV_KEY" | "EV_REL" | "EV_ABS" | "EV_MSC" | "EV_LED" | "EV_SND" | "EV_REP" | "EV_FF" | "EV_PWR" | "EV_FF_STATUS" | "EV_MAX" | "UNKNOWN";

export const EV_TYPE = {
  0x00: "EV_SYN",
  0x01: "EV_KEY",
  0x02: "EV_REL",
  0x03: "EV_ABS",
  0x04: "EV_MSC",
  0x11: "EV_LED",
  0x12: "EV_SND",
  0x14: "EV_REP",
  0x15: "EV_FF",
  0x16: "EV_PWR",
  0x17: "EV_FF_STATUS",
  0x1f: "EV_MAX"
} as const;

export const codes = {
  EV_ABS: {
    0x00: "ABS_X",
    0x01: "ABS_Y",
    0x02: "ABS_Z",
    0x03: "ABS_RX",
    0x04: "ABS_RY",
    0x05: "ABS_RZ",
    0x06: "ABS_THROTTLE",
    0x07: "ABS_RUDDER",
    0x08: "ABS_WHEEL",
    0x09: "ABS_GAS",
    0x0a: "ABS_BRAKE",
    0x10: "ABS_HAT0X",
    0x11: "ABS_HAT0Y",
    0x12: "ABS_HAT1X",
    0x13: "ABS_HAT1Y",
    0x14: "ABS_HAT2X",
    0x15: "ABS_HAT2Y",
    0x16: "ABS_HAT3X",
    0x17: "ABS_HAT3Y",
    0x18: "ABS_PRESSURE",
    0x19: "ABS_DISTANCE",
    0x1a: "ABS_TILT_X",
    0x1b: "ABS_TILT_Y",
    0x1c: "ABS_TOOL_WIDTH",
    0x20: "ABS_VOLUME",
    0x28: "ABS_MISC",
    0x3f: "ABS_MAX"
  } as const,

  EV_KEY: {
    0: "KEY_RESERVED",
    1: "KEY_ESC",
    2: "KEY_1",
    3: "KEY_2",
    4: "KEY_3",
    5: "KEY_4",
    6: "KEY_5",
    7: "KEY_6",
    8: "KEY_7",
    9: "KEY_8",
    10: "KEY_9",
    11: "KEY_0",
    12: "KEY_MINUS",
    13: "KEY_EQUAL",
    14: "KEY_BACKSPACE",
    15: "KEY_TAB",
    16: "KEY_Q",
    17: "KEY_W",
    18: "KEY_E",
    19: "KEY_R",
    20: "KEY_T",
    21: "KEY_Y",
    22: "KEY_U",
    23: "KEY_I",
    24: "KEY_O",
    25: "KEY_P",
    26: "KEY_LEFTBRACE",
    27: "KEY_RIGHTBRACE",
    28: "KEY_ENTER",
    29: "KEY_LEFTCTRL",
    30: "KEY_A",
    31: "KEY_S",
    32: "KEY_D",
    33: "KEY_F",
    34: "KEY_G",
    35: "KEY_H",
    36: "KEY_J",
    37: "KEY_K",
    38: "KEY_L",
    39: "KEY_SEMICOLON",
    40: "KEY_APOSTROPHE",
    41: "KEY_GRAVE",
    42: "KEY_LEFTSHIFT",
    43: "KEY_BACKSLASH",
    44: "KEY_Z",
    45: "KEY_X",
    46: "KEY_C",
    47: "KEY_V",
    48: "KEY_B",
    49: "KEY_N",
    50: "KEY_M",
    51: "KEY_COMMA",
    52: "KEY_DOT",
    53: "KEY_SLASH",
    54: "KEY_RIGHTSHIFT",
    55: "KEY_KPASTERISK",
    56: "KEY_LEFTALT",
    57: "KEY_SPACE",
    58: "KEY_CAPSLOCK",
    59: "KEY_F1",
    60: "KEY_F2",
    61: "KEY_F3",
    62: "KEY_F4",
    63: "KEY_F5",
    64: "KEY_F6",
    65: "KEY_F7",
    66: "KEY_F8",
    67: "KEY_F9",
    68: "KEY_F10",
    69: "KEY_NUMLOCK",
    70: "KEY_SCROLLLOCK",
    71: "KEY_KP7",
    72: "KEY_KP8",
    73: "KEY_KP9",
    74: "KEY_KPMINUS",
    75: "KEY_KP4",
    76: "KEY_KP5",
    77: "KEY_KP6",
    78: "KEY_KPPLUS",
    79: "KEY_KP1",
    80: "KEY_KP2",
    81: "KEY_KP3",
    82: "KEY_KP0",
    83: "KEY_KPDOT",

    85: "KEY_ZENKAKUHANKAKU",
    86: "KEY_102ND",
    87: "KEY_F11",
    88: "KEY_F12",
    89: "KEY_RO",
    90: "KEY_KATAKANA",
    91: "KEY_HIRAGANA",
    92: "KEY_HENKAN",
    93: "KEY_KATAKANAHIRAGANA",
    94: "KEY_MUHENKAN",
    95: "KEY_KPJPCOMMA",
    96: "KEY_KPENTER",
    97: "KEY_RIGHTCTRL",
    98: "KEY_KPSLASH",
    99: "KEY_SYSRQ",
    100: "KEY_RIGHTALT",
    101: "KEY_LINEFEED",
    102: "KEY_HOME",
    103: "KEY_UP",
    104: "KEY_PAGEUP",
    105: "KEY_LEFT",
    106: "KEY_RIGHT",
    107: "KEY_END",
    108: "KEY_DOWN",
    109: "KEY_PAGEDOWN",
    110: "KEY_INSERT",
    111: "KEY_DELETE",
    112: "KEY_MACRO",
    113: "KEY_MUTE",
    114: "KEY_VOLUMEDOWN",
    115: "KEY_VOLUMEUP",
    116: "KEY_POWER",
    117: "KEY_KPEQUAL",
    118: "KEY_KPPLUSMINUS",
    119: "KEY_PAUSE",

    121: "KEY_KPCOMMA",
    122: "KEY_HANGUEL",
    123: "KEY_HANJA",
    124: "KEY_YEN",
    125: "KEY_LEFTMETA",
    126: "KEY_RIGHTMETA",
    127: "KEY_COMPOSE",

    128: "KEY_STOP",
    129: "KEY_AGAIN",
    130: "KEY_PROPS",
    131: "KEY_UNDO",
    132: "KEY_FRONT",
    133: "KEY_COPY",
    134: "KEY_OPEN",
    135: "KEY_PASTE",
    136: "KEY_FIND",
    137: "KEY_CUT",
    138: "KEY_HELP",
    139: "KEY_MENU",
    140: "KEY_CALC",
    141: "KEY_SETUP",
    142: "KEY_SLEEP",
    143: "KEY_WAKEUP",
    144: "KEY_FILE",
    145: "KEY_SENDFILE",
    146: "KEY_DELETEFILE",
    147: "KEY_XFER",
    148: "KEY_PROG1",
    149: "KEY_PROG2",
    150: "KEY_WWW",
    151: "KEY_MSDOS",
    152: "KEY_COFFEE",
    153: "KEY_DIRECTION",
    154: "KEY_CYCLEWINDOWS",
    155: "KEY_MAIL",
    156: "KEY_BOOKMARKS",
    157: "KEY_COMPUTER",
    158: "KEY_BACK",
    159: "KEY_FORWARD",
    160: "KEY_CLOSECD",
    161: "KEY_EJECTCD",
    162: "KEY_EJECTCLOSECD",
    163: "KEY_NEXTSONG",
    164: "KEY_PLAYPAUSE",
    165: "KEY_PREVIOUSSONG",
    166: "KEY_STOPCD",
    167: "KEY_RECORD",
    168: "KEY_REWIND",
    169: "KEY_PHONE",
    170: "KEY_ISO",
    171: "KEY_CONFIG",
    172: "KEY_HOMEPAGE",
    173: "KEY_REFRESH",
    174: "KEY_EXIT",
    175: "KEY_MOVE",
    176: "KEY_EDIT",
    177: "KEY_SCROLLUP",
    178: "KEY_SCROLLDOWN",
    179: "KEY_KPLEFTPAREN",
    180: "KEY_KPRIGHTPAREN",

    183: "KEY_F13",
    184: "KEY_F14",
    185: "KEY_F15",
    186: "KEY_F16",
    187: "KEY_F17",
    188: "KEY_F18",
    189: "KEY_F19",
    190: "KEY_F20",
    191: "KEY_F21",
    192: "KEY_F22",
    193: "KEY_F23",
    194: "KEY_F24",

    200: "KEY_PLAYCD",
    201: "KEY_PAUSECD",
    202: "KEY_PROG3",
    203: "KEY_PROG4",
    205: "KEY_SUSPEND",
    206: "KEY_CLOSE",
    207: "KEY_PLAY",
    208: "KEY_FASTFORWARD",
    209: "KEY_BASSBOOST",
    210: "KEY_PRINT",
    211: "KEY_HP",
    212: "KEY_CAMERA",
    213: "KEY_SOUND",
    214: "KEY_QUESTION",
    215: "KEY_EMAIL",
    216: "KEY_CHAT",
    217: "KEY_SEARCH",
    218: "KEY_CONNECT",
    219: "KEY_FINANCE",
    220: "KEY_SPORT",
    221: "KEY_SHOP",
    222: "KEY_ALTERASE",
    223: "KEY_CANCEL",
    224: "KEY_BRIGHTNESSDOWN",
    225: "KEY_BRIGHTNESSUP",
    226: "KEY_MEDIA",

    240: "KEY_UNKNOWN",

    //0x100:"BTN_MISC",
    0x100: "BTN_0",
    0x101: "BTN_1",
    0x102: "BTN_2",
    0x103: "BTN_3",
    0x104: "BTN_4",
    0x105: "BTN_5",
    0x106: "BTN_6",
    0x107: "BTN_7",
    0x108: "BTN_8",
    0x109: "BTN_9",

    //0x110:"BTN_MOUSE",
    0x110: "BTN_LEFT",
    0x111: "BTN_RIGHT",
    0x112: "BTN_MIDDLE",
    0x113: "BTN_SIDE",
    0x114: "BTN_EXTRA",
    0x115: "BTN_FORWARD",
    0x116: "BTN_BACK",
    0x117: "BTN_TASK",

    //0x120:"BTN_JOYSTICK",
    0x120: "BTN_TRIGGER",
    0x121: "BTN_THUMB",
    0x122: "BTN_THUMB2",
    0x123: "BTN_TOP",
    0x124: "BTN_TOP2",
    0x125: "BTN_PINKIE",
    0x126: "BTN_BASE",
    0x127: "BTN_BASE2",
    0x128: "BTN_BASE3",
    0x129: "BTN_BASE4",
    0x12a: "BTN_BASE5",
    0x12b: "BTN_BASE6",
    0x12f: "BTN_DEAD",

    //0x130:"BTN_GAMEPAD",
    0x130: "BTN_A",
    0x131: "BTN_B",
    0x132: "BTN_C",
    0x133: "BTN_X",
    0x134: "BTN_Y",
    0x135: "BTN_Z",
    0x136: "BTN_TL",
    0x137: "BTN_TR",
    0x138: "BTN_TL2",
    0x139: "BTN_TR2",
    0x13a: "BTN_SELECT",
    0x13b: "BTN_START",
    0x13c: "BTN_MODE",
    0x13d: "BTN_THUMBL",
    0x13e: "BTN_THUMBR",

    //0x140:"BTN_DIGI",
    0x140: "BTN_TOOL_PEN",
    0x141: "BTN_TOOL_RUBBER",
    0x142: "BTN_TOOL_BRUSH",
    0x143: "BTN_TOOL_PENCIL",
    0x144: "BTN_TOOL_AIRBRUSH",
    0x145: "BTN_TOOL_FINGER",
    0x146: "BTN_TOOL_MOUSE",
    0x147: "BTN_TOOL_LENS",
    0x14a: "BTN_TOUCH",
    0x14b: "BTN_STYLUS",
    0x14c: "BTN_STYLUS2",
    0x14d: "BTN_TOOL_DOUBLETAP",
    0x14e: "BTN_TOOL_TRIPLETAP",

    //0x150:"BTN_WHEEL",
    0x150: "BTN_GEAR_DOWN",
    0x151: "BTN_GEAR_UP",

    0x160: "KEY_OK",
    0x161: "KEY_SELECT",
    0x162: "KEY_GOTO",
    0x163: "KEY_CLEAR",
    0x164: "KEY_POWER2",
    0x165: "KEY_OPTION",
    0x166: "KEY_INFO",
    0x167: "KEY_TIME",
    0x168: "KEY_VENDOR",
    0x169: "KEY_ARCHIVE",
    0x16a: "KEY_PROGRAM",
    0x16b: "KEY_CHANNEL",
    0x16c: "KEY_FAVORITES",
    0x16d: "KEY_EPG",
    0x16e: "KEY_PVR",
    0x16f: "KEY_MHP",
    0x170: "KEY_LANGUAGE",
    0x171: "KEY_TITLE",
    0x172: "KEY_SUBTITLE",
    0x173: "KEY_ANGLE",
    0x174: "KEY_ZOOM",
    0x175: "KEY_MODE",
    0x176: "KEY_KEYBOARD",
    0x177: "KEY_SCREEN",
    0x178: "KEY_PC",
    0x179: "KEY_TV",
    0x17a: "KEY_TV2",
    0x17b: "KEY_VCR",
    0x17c: "KEY_VCR2",
    0x17d: "KEY_SAT",
    0x17e: "KEY_SAT2",
    0x17f: "KEY_CD",
    0x180: "KEY_TAPE",
    0x181: "KEY_RADIO",
    0x182: "KEY_TUNER",
    0x183: "KEY_PLAYER",
    0x184: "KEY_TEXT",
    0x185: "KEY_DVD",
    0x186: "KEY_AUX",
    0x187: "KEY_MP3",
    0x188: "KEY_AUDIO",
    0x189: "KEY_VIDEO",
    0x18a: "KEY_DIRECTORY",
    0x18b: "KEY_LIST",
    0x18c: "KEY_MEMO",
    0x18d: "KEY_CALENDAR",
    0x18e: "KEY_RED",
    0x18f: "KEY_GREEN",
    0x190: "KEY_YELLOW",
    0x191: "KEY_BLUE",
    0x192: "KEY_CHANNELUP",
    0x193: "KEY_CHANNELDOWN",
    0x194: "KEY_FIRST",
    0x195: "KEY_LAST",
    0x196: "KEY_AB",
    0x197: "KEY_NEXT",
    0x198: "KEY_RESTART",
    0x199: "KEY_SLOW",
    0x19a: "KEY_SHUFFLE",
    0x19b: "KEY_BREAK",
    0x19c: "KEY_PREVIOUS",
    0x19d: "KEY_DIGITS",
    0x19e: "KEY_TEEN",
    0x19f: "KEY_TWEN",

    0x1c0: "KEY_DEL_EOL",
    0x1c1: "KEY_DEL_EOS",
    0x1c2: "KEY_INS_LINE",
    0x1c3: "KEY_DEL_LINE",

    0x1d0: "KEY_FN",
    0x1d1: "KEY_FN_ESC",
    0x1d2: "KEY_FN_F1",
    0x1d3: "KEY_FN_F2",
    0x1d4: "KEY_FN_F3",
    0x1d5: "KEY_FN_F4",
    0x1d6: "KEY_FN_F5",
    0x1d7: "KEY_FN_F6",
    0x1d8: "KEY_FN_F7",
    0x1d9: "KEY_FN_F8",
    0x1da: "KEY_FN_F9",
    0x1db: "KEY_FN_F10",
    0x1dc: "KEY_FN_F11",
    0x1dd: "KEY_FN_F12",
    0x1de: "KEY_FN_1",
    0x1df: "KEY_FN_2",
    0x1e0: "KEY_FN_D",
    0x1e1: "KEY_FN_E",
    0x1e2: "KEY_FN_F",
    0x1e3: "KEY_FN_S",
    0x1e4: "KEY_FN_B",

    0x1ff: "KEY_MAX"
  } as const,

  EV_SYN: {
    0: "SYN_REPORT",
    1: "SYN_CONFIG"
  } as const
};

