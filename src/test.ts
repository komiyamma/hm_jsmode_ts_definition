/// <reference path="../types/hm_jsmode.d.ts" />

let len: number = myfunc("あいうえお");
// コメント
function myfunc(msg: string): number {
    debuginfo(2);
    console.log(msg);
    return msg.length;
}

let v = hidemaruversion();


let arr = hidemaru.getCursorPos("wcs");
let info = hidemaru.runProcess("abc", "abc", "guiStdio", "utf8");
info.kill

let bb = hidemaru.getCursorPosFromMousePos("gcu", 100, 50);
let c = hidemaruGlobal.browserpaneurl(2);
let j = hidemaruGlobal.getselectedrange({unit:"char"});
let s = hidemaruGlobal.setselectionrange({unit:"char", "items":[{col1:10, line1:10}], col1:3, col2:5, line1:10, line2:20});