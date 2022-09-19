/// <reference path="../types/hm_jsmode.d.ts" />

let len: number = myfunc("あいうえお");
// コメント
function myfunc(msg: string): number {
    debuginfo(2);
    console.log(msg);
    return msg.length;
}

let dll = loaddll(currentmacrodirectory() + "\\abc\\aaa.dll");
dll.setDllDetachFunc("HmDllDetachFunc");

