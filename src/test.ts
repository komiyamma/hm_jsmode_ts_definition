/// <reference path="../types/hm_jsmode.d.ts" />

debuginfo(2);
console.log("hello");

let selectedMenuNumber = menu("あいうえ", "かきく");
console.log(selectedMenuNumber);

let pos = hidemaru.getPixelPosFromCursorPos("wcs", 0, 1);
console.log(pos);

browserpanecommand("focusinputfield")

browserpanecommand({ "setinputfield": "hello" });

hidemaru.getPixelPosFromCursorPos("wcs", 0, 1);
let b: IBrowserPaneCommandArg = { "copy": 1 };
browserpanecommand(b)

window.setInterval

hidemaru.setTimeout(() => { }, 1000, 1);)

shifthome();
shiftend();

getimecandidatelist("abc", "abc");

browserpanecommand("copy");

let ab : IBrowserPaneCommandArg = "copy";

browserpanecommand("copy");

let c = hidemaru.createHttpServer( {makeKey:"1"}, function(req, res,) {
    res.writeHead(200);
    res.write('Hello, world!');
    res.end('Hello, world!');

});

let d = hidemaru.runProcess("notepad.exe", "c:\\temp\\test.txt");
let e = d.stdOut
e.onReadLine((out, id) => {
});

function ccc(abc): number {
    return 3;
}

if (hidemaru.isProcessIdValid(123454))

