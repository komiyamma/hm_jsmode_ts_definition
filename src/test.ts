/// <reference path="../types/hm_jsmode.d.ts" />

var ret: number[] = myfunc("あいうえお");
function myfunc(msg: string): number[] {
    debuginfo(2);
    console.log(msg);
    return [x(), msg.length];
}

let dll = loaddll(currentmacrodirectory() + "\\abc\\aaa.dll");
dll.setDllDetachFunc("HmDllDetachFunc");