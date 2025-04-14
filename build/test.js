/// <reference path="../types/hm_jsmode.d.ts" />
const renderPaneTargetName = "HmXGrokWeb";
const isOneAtTimeAIRenderPane = 1; // AI関連のレンダリング枠は(他の種類のAIも含め)１つだけにする。(複数起動しそうになると、前のものが閉じる）
debuginfo(2);
const currentMacroDirectory = currentmacrodirectory();
// AIウィンドウを１つだけに絞る処理
function oneAIWindowFrameCheck() {
    try {
        if (!isOneAtTimeAIRenderPane) {
            return;
        }
        let lastAiRenderPaneTargetName = getstaticvariable("OneAtTimeAIRenderPane", 2);
        console.log(lastAiRenderPaneTargetName);
        // 自分だよ、何もしない。
        if (lastAiRenderPaneTargetName == renderPaneTargetName) {
            return;
        }
        // 他のAIマクロがAIパネル枠を利用しているなら、閉じる
        if (lastAiRenderPaneTargetName) {
            const param = {
                target: lastAiRenderPaneTargetName,
                show: 0,
            };
            renderpanecommand(param);
        }
        hidemaru.setTimeout(aaa, 1000);
    }
    catch (e) {
        console.log(e);
    }
}
var timeHandle = 0;
if (timeHandle) {
    hidemaru.clearTimeout(timeHandle);
}
debuginfo(2);
function aaa() {
    console.log("aaa");
    let lastAiRenderPaneTargetName = getstaticvariable("OneAtTimeAIRenderPane", 2);
    if (lastAiRenderPaneTargetName != renderPaneTargetName) {
        hidemaru.clearTimeout(timeHandle);
        console.log("食い違い");
        const param = {
            "get": "_each",
        };
        let url = browserpanecommand(param);
        if (url.includes("https://grok.com")) {
            browserpanecommand({ target: "_each", show: 0 });
        }
        return;
    }
    hidemaru.setTimeout(aaa, 3000);
}
function doMain() {
    let text = getselectedtext();
    if (text) {
        // oneAIWindowFrameCheck();
        let param = {
            target: "_each",
            url: "https://grok.com/?q=" + encodeURI(text),
            initialize: "async",
            show: 1,
            size: 400
        };
        browserpanecommand(param);
        // １つのウィンドウに絞るフラグがONなら、登録しておく
        if (isOneAtTimeAIRenderPane) {
            setstaticvariable("OneAtTimeAIRenderPane", renderPaneTargetName, 2);
        }
    }
}
hidemaru.setTimeout(doMain, 0);
