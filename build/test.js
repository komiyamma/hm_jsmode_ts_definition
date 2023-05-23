/// <reference path="../types/hm_jsmode.d.ts" />
debuginfo(2);
console.log("hello");
var selectedMenuNumber = menu("あいうえ", "かきく");
console.log(selectedMenuNumber);
var thistext = "This is a paragraph.\n\n\n\nThis is another paragraph.\n\n\n";
var trimmedStr = thistext.replace(/\n+$/, "");
var pos = hidemaru.getPixelPosFromCursorPos("wcs", 0, 1);
console.log(pos[1]);
browserpanecommand({ refresh: 1 });
renderpanecommand({ refresh: 1 });
showbrowserpane(1, "_common");
