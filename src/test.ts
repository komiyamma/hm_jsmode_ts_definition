/// <reference path="../types/hm_jsmode.d.ts" />

 　getconfig("CharSpace")

var p = hidemaru.runProcess("a", "b", "c", "d");
p.stdOut.onReadSeparated(function(out3){
    console.log(out3);
    console.log()
    return 3;
}, 0);

hidemaruGlobal.message()
