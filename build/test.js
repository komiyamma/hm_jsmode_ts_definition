/// <reference path="../types/hm_jsmode.d.ts" />
getconfig("CharSpace");
var p = hidemaru.runProcess("a", "b", "c", "d");
p.stdOut.onReadSeparated(function (out3) {
    console.log(out3);
    console.log("\r\n");
    return 3;
}, 0);
hidemaruGlobal.message("OK");
var processID = hidemaru.runProcess("abc", "def", "gui", "utf");
processID.stdOut.onReadAll(function (out) {
    console.log(out);
});
insert("あいうえお", 0, 0x0001);
