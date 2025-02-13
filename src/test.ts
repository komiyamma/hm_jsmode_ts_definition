
/// <reference path="../types/hm_jsmode.d.ts" />

hidemaruversion("9.25.2");

message("OK");

let ibpc: IBrowserPaneCommandJsonArg = {
    "show": 1,
    "invisible": 1,
    "initialize": "async"
};

browserpanecommand(ibpc);

let a:number = menuarray(["1", "2"]);


console.log("OK");

let b = getimecandidate("", "ime");

let d = getdpi();

