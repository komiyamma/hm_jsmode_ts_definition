/// <reference path="../types/hm_jsmode.d.ts" />
var currentMacroDirectory = currentmacrodirectory();
if (typeof (server) != "undefined") {
    server.close();
}
var server = hidemaru.createHttpServer({ makeKey: 1 }, function (req, res) {
    if (req.url == "/" + server.key) {
        res.writeHead(200); // OK
        var obj = makeSendObject();
        res.write(JSON.stringify(obj));
        res.end("");
    }
    else {
        res.writeHead(404); // Not found
        res.end("");
    }
});
// 非同期関数なので非同期中に使える関数で構築する必要あり
function makeSendObject() {
    var obj = {
        text: gettotaltext(),
        column: column(),
        lineno: lineno()
    };
    return obj;
}
function makeUrl(htmlFullPath, port, key) {
    var htmlFullPath = htmlFullPath.replace(/\\/g, "/");
    var absoluteUrl = sprintf("%s&port=%d&key=%s", htmlFullPath, port, key);
    console.log(absoluteUrl);
    return absoluteUrl;
}
function outputAlert(msg) {
    var dll = loaddll("HmOutputPane.dll");
    dll.dllFuncW.OutputW(hidemaru.getCurrentWindowHandle(), msg + "\r\n");
}
// メインの処理
function main() {
    server.listen(0); //ランダムなポート
    if (server.port == 0) {
        outputAlert("サーバー構築失敗");
        return;
    }
    var absoluteUrl = makeUrl(currentMacroDirectory + "\\HmCustomRenderBrowser.html", server.port, server.key);
    // 指定のパラメータでレンダーペインを開く。browserpanecommand にして、targetを "_each" にしてもほぼ同じこと
    browserpanecommand({
        target: "_each",
        url: absoluteUrl,
        show: 1,
        size: 500,
    });
}
// 同期で処理せず、非同期で処理することで、マクロ実行で一瞬固まるのを回避する。
var timerHandle;
if (typeof (timerHandle) != "undefined") {
    hidemaru.clearTimeout(timerHandle);
}
timerHandle = hidemaru.setTimeout(main, 0);
