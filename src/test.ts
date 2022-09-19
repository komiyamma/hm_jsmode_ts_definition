/// <reference path="../types/hm_jsmode.d.ts" />

var ret: number[] = myfunc("あいうえお");
function myfunc(msg: string): number[] {
    debuginfo(2);
    console.log(msg);
    let m:Map<string, string> = new Map<string, string>();
    return [x(), msg.length];
}

let dll = loaddll(currentmacrodirectory() + "\\abc\\aaa.dll");
dll.setDllDetachFunc("HmDllDetachFunc");