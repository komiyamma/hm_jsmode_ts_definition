/// <reference path="../types/hm_jsmode.d.ts" />

let selectedNumber: number = hidemaruGlobal.mousemenu("あいうえ","kakiku")

// メニューを表示して、選択したindexを取得する
function SelectMenuIndex() {
    let menu: number = hidemaruGlobal.mousemenu("あいうえ","kakiku")
    console.log(menu)
}

let keyhook_id  = keyhook(1, 3);
clearkeyhook(keyhook_id);
