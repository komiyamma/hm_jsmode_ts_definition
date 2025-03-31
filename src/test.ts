
/// <reference path="../types/hm_jsmode.d.ts" />

let prevTextColor = -1;
let prevBackColor = -1;

function onReceiveObject(obj:any, error) {
 
    // エラー
    if (!obj) {
        return;
    }

    // 色が変わってない
    if (prevTextColor == obj.textColor && prevBackColor == obj.backColor) {
       return;
    }

    // 最後に採用した色として記憶
    prevTextColor = obj.textColor;
    prevBackColor = obj.backColor;

    // 秀丸がダークモードならそれを
    let isDarkMode = obj.darkmode;

    // 秀丸はダークモードではない。テキストと背景の組み合わせからどちらがよいか決める。
    if (!obj.darkmode) {
        // テキストをグレースケールにした値
        var textGrayColor = getColorLuminance(obj.textColor);
        // 背景をグレースケールにした値
        var backGrayColor = getColorLuminance(obj.backColor);

        // テキストが色が明るく、背景の方がテキストよりも暗いなら、ダークモードとする
        isDarkMode = textGrayColor > backGrayColor;
    }

    var targetColor = isDarkMode ? 'dark' : 'light';
    // 対象のテーマカラーで表示
    document.documentElement.setAttribute('hm-theme-color', targetColor);

    document.body.style.backgroundColor = "#" + obj.backColorStyle; // # を追加するのを忘れずに
    document.body.style.color           = "#" + obj.textColorStyle; // # を追加するのを忘れずに
}

function getColorLuminance(colorRGB) {
   var r = (colorRGB >> 16) & 0xFF
   var g = (colorRGB >> 8) & 0xFF
   var b = colorRGB & 0xFF

   return 0.299 * r + 0.587 * g + 0.114 * b;
}
