/// <reference path="../types/hm_jsmode_strict.d.ts" />

 　getconfig("CharSpace")

var p = hidemaru.runProcess("a", "b", "c", "d");
p.stdOut.onReadSeparated(function(out3){
    console.log(out3);
    console.log("\r\n");
    return 3;
}, 0);

hideamruGlobal.message("OK");

var processID = hidemaru.runProcess("abc", "def", "gui", "utf");
processID.stdOut.onReadAll((out: string)=>{
    console.log(out);
})

hideamruGlobal.insert("あいうえお", 0, 0x0001);