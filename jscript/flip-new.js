// JavaScript Document
//Code came from http://text-symbols.com/upside-down/ which is a really cool site :)
// This is just a sample script. Paste your real code (javascript or HTML) here.
function flip() {
    var _0x4f33 = ["\x68\x72\x65\x66", "\x66\x73\x79\x6D\x62\x6F\x6C\x73\x2E\x63\x6F\x6D\x2F", "\x73\x65\x61\x72\x63\x68", "\x74\x65\x78\x74\x2D\x73\x79\x6D\x62\x6F\x6C\x73\x2E\x63\x6F\x6D\x2F", "\x66\x69\x6C\x65\x3A\x2F\x2F", "\x2F\x2F\x2F\x2F", "\x76\x61\x6C\x75\x65", "\x6F\x72\x69\x67\x69\x6E\x61\x6C", "\x66", "\x66\x6C\x69\x70\x70\x65\x64"];
    var result, hr = location[_0x4f33[0]];
    if (hr[_0x4f33[2]](_0x4f33[1]) == -1 && hr[_0x4f33[2]](_0x4f33[3]) == -1 && hr[_0x4f33[2]](_0x4f33[4]) == -1) {
        result = flipString(document[_0x4f33[8]][_0x4f33[7]][_0x4f33[6]]);
    } else {
        var result = flipString(document[_0x4f33[8]][_0x4f33[7]][_0x4f33[6]]);
    };
    document[_0x4f33[8]][_0x4f33[9]][_0x4f33[6]] = result;
}
function flipString(aString) {
    var _0xf177 = ["\x6C\x65\x6E\x67\x74\x68", "\x68\x72\x65\x66", "\x63\x68\x61\x72\x41\x74", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "", "\x6A\x6F\x69\x6E", "\x66\x69\x6C\x65\x3A\x2F\x2F", "\x73\x65\x61\x72\x63\x68", "", ""];
    var last = aString[_0xf177[0]] - 1;
    var hr = location[_0xf177[1]];
    var result = new Array(aString[_0xf177[0]]);
    for (var i = last; i >= 0; --i) {
        var c = aString[_0xf177[2]](i);
        var r = flipTable[c];
        r = r ? r : flipTable[c[_0xf177[3]]()];
        result[last - i] = r ? r : c;
    };
    var res = result[_0xf177[5]](_0xf177[4]);
    if (hr[_0xf177[7]](_0xf177[6]) !== -1) {
        res += _0xf177[8] + _0xf177[9];
    };
    return res;
}
var flipTable = {
    '?': '\u00BF',
    '!': '\u00A1',
    a: '\u0250',
    b: 'q',
    c: '\u0254',
    d: 'p',
    e: '\u01DD',
    f: '\u025F',
    g: '\u0183',
    h: '\u0265',
    i: '\u0131',
    j: '\u027E',
    k: '\u029E',
    m: '\u026F',
    n: 'u',
    r: '\u0279',
    t: '\u0287',
    v: '\u028C',
    w: '\u028D',
    y: '\u028E',
    A: '\u2200',
    E: '\u018e',
    F: '\u2132',
    H: 'H',
    N: 'N',
    I: 'I',
    O: 'O',
    W: 'M',
    Z: 'Z',
    S: 'S',
    X: 'X',
    T: '\u22a5',
    V: '\u039B',
    C: '\u03FD',
    P: '\u0500',
    R: '\u1d1a',
    U: '\u2229',
    '.': '\u02D9',
    '[': ']',
    '(': ')',
    '{': '}',
    "\'": ',',
    '<': '>',
    '"': '\u201e',
    '_': '\u203E',
    '2': '5',
    '3': '\u0190',
    '4': '\u152d',
    '6': '9',
    '7': '\u2c62',
    '\u203F': '\u2040',
    '\u2045': '\u2046',
    '\u2234': '\u2235',
    '\r': '\n'
};
var _0xc5da = [];
for (i in flipTable) {
    flipTable[flipTable[i]] = i;
};