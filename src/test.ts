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

interface IBrowserPaneCommandArg {
    target?: IBrowserPaneTargetString, show?: 1 | 0, uri?: string, url?: string, place?: "leftside" | "rightside" | "upside" | "downside", 
    
    get?: "readyState" | "DOMContentLoaded" | "load" | "show" | "invisible" | "uri" | "url" | "size" | "initialized" | "title" | "watch" | "watchsave" | "maximize", 
    
    
    
    clear?: 1, refresh?: 1, focus?: 1 | 0, size?: number, initialize?: "async", watch?: 0 | 1, setinputfield?: string, copy?: number
}

getconfig({});