/// <reference path="../types/hm_jsmode.d.ts" />
var _a = myfunc("あいうえお"), a = _a[0], b = _a[1];
function myfunc(msg) {
    debuginfo(2);
    console.log(msg);
    return [x(), msg.length];
}
