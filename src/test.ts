/// <reference path="../types/hm_jsmode.d.ts" />

let [a, b]: number[] = myfunc("あいうえお");
function myfunc(msg: string): number[] {
    debuginfo(2);
    console.log(msg);
    return [x(), msg.length];
}