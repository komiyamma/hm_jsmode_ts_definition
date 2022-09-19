/// <reference path="../types/hm_jsmode.d.ts" />
var ret = myfunc("あいうえお");
function myfunc(msg) {
    debuginfo(2);
    console.log(msg);
    var m = new Map();
    return [x(), msg.length];
}
var dll = loaddll(currentmacrodirectory() + "\\abc\\aaa.dll");
dll.setDllDetachFunc("HmDllDetachFunc");
