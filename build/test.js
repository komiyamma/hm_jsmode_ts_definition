/// <reference path="../types/hm_jsmode.d.ts" />
var len = myfunc("あいうえお");
// コメント
function myfunc(msg) {
    debuginfo(2);
    console.log(msg);
    return msg.length;
}
var dll = loaddll(currentmacrodirectory() + "\\abc\\aaa.dll");
dll.setDllDetachFunc("HmDllDetachFunc");
