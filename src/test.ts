/// <reference path="../types/hm_jsmode.d.ts" />

hidemaruGlobal
hidemaru

// クリップボードの内容を取得する hidemaruGlobal.*** の関数を使って
function getClipboarText() {
    let b = hidemaruGlobal.getclipboard();
    if (b) {
        return b;
    }
    return "";
}

let xp1: number = xpixel2();
let xp2: number = ypixel2();


renderpanecommand("top")

let objFormat = {
         items:[{
           layer:"*",
           items:[
             {line1:"*",col1:"*",line2:"*",col2:"*",},
           ]
         }]
       };

let b:IConfigRGBHex = "#124";


let r = getselectedrange()
if (r.items?.length > 0) {
  
}
