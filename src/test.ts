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



