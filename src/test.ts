/// <reference path="../types/hm_jsmode.d.ts" />

debuginfo(2);
console.log("hello");

let selectedMenuNumber = menu("あいうえ", "かきく");
console.log(selectedMenuNumber);

let pos = hidemaru.getPixelPosFromCursorPos("wcs", 0, 1);
console.log(pos);

browserpanecommand("focusinputfield")

browserpanecommand({"setinputfield": "hello"});
