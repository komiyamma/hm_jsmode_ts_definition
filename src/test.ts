/// <reference path="../types/hm_jsmode.d.ts" />




// ------------- 会話エンジンの設定項目 -------------

const projectId = "new-project-20240307";
const location = "us-central1";
const model = "gemini-1.0-pro";

const renderpane_custom_param = {
    place: "rightside",   // leftside | rightside | upside | downside
    size: 400,            // 左や右の配置の時は、横幅のこと。上や下の配置の時は縦幅のこと。
};

// --------------------------------------------------


// レンダリングペインを指定属性＆ポートでオープン
function openRenderPaneCommand(port) {
    const renderpane_json_param = {
        target: "HmGoogleGemini",
        uri: "http://localhost:"+port+"/HmGoogleGemini.html",
        show: 1,
        place: "rightside", 
        size: 400,
        initialize: "async",
    };

    // ユーザー指定のもので上書き。
    const renderpane_mix_param = { ...renderpane_json_param, ...renderpane_custom_param };

    renderpanecommand(renderpane_mix_param)
}


let currentmacrodir = currentmacrodirectory();
let hidemaruexedir = hidemarudir();

let currentexepath = currentmacrodir + "\\HmGoogleGemini.exe";

// エラー用途
function outputAlert(msg) {
    let dll = loaddll(hidemaruexedir + "\\HmOutputPane.dll");
    dll.dllFuncW.Output(msg + "\r\n");
}

// ユーザーの「質問内容」が入るテキストファイル
let saveFileName = currentmacrodir + "\\HmGoogleGemini.question.txt";

// 質問内容の1行目に「時刻」を入れることで、質問時刻がわかるようにしている。
// これはシステムが「ファイルの更新」を非常に頻繁に誤爆して多重検知するために必要。
// 多重検知した際に、「その内容はもう受付済み」という判断をするために「時刻」を質問内容に刻むようにしている。
let ticknum = tickcount() & 0x7fffffff;

// 選択テキストを質問内容としてファイルに保存し、ＡＩを指定のパラメータやモデルで起動
function doSendQuestionContent() {
    let text = hidemaru.getSelectedText();
    let commandline = `"${currentexepath}" "${projectId}" "${location}" "${model}"`;
    runex(commandline, 0, 0, "", 0, "", 0, "", 0, "", 2, 1, 0, 0);
//      runex(commandline, 0); // デバッグ用

    let sendcmd = "HmGoogleGemini.Message(" + ticknum + ")\n";
    hidemaru.setTimeout(
        () => { hidemaru.saveTextFile(saveFileName, sendcmd + text, "utf8"); },
        200
    );
}

function stopAIAnswer() {
    let sendcmd = "HmGoogleGemini.Cancel(" + ticknum + ")\n";
    let text = "応答を停止";
    let commandline = `"${currentexepath}"`;
    runex(commandline, 0, 0, "", 0, "", 0, "", 0, "", 2, 1, 0, 0);
    hidemaru.saveTextFile(saveFileName, sendcmd + text, "utf8");
}

function resetAI() {
    let sendcmd = "HmGoogleGemini.Clear(" + ticknum + ")\n";
    let text = "リセット";
    let commandline = `"${currentexepath}" "HmGoogleGemini.Clear()"`;
    runex(commandline, 0, 0, "", 0, "", 0, "", 0, "", 2, 1, 0, 0);
    hidemaru.saveTextFile(saveFileName, sendcmd + text, "utf8");
    serverProcessCOM.OnReleaseObject(-1); // サーバーも強制終了しておく。
}

function pasteAIAnswer() {
    let loadFileName = currentmacrodir + "\\HmGoogleGemini.txt";
    let text = hidemaru.loadTextFile(loadFileName);
    insert(text);
}

// テキストを選択せずに、このマクロを実行した時は、
// 「ＡＩの応答を途中キャンセル」あるいは「ＡＩを完全にリセットしてプロセス自体を終了し、会話履歴も消去」することが出来る。
function doSendCommand() {
    let selectMenuID = menu("応答の停止 (&S)", "リセット (&R)", "回答を張り付け (&V)");
    if (selectMenuID == 1) {
        stopAIAnswer();
    }
    else if (selectMenuID == 2) {
        resetAI();
    }
    else if (selectMenuID == 3) {
        pasteAIAnswer();
    }
}

// このプロセスが終わるまでは維持のシグナルとしてvar。
// C#で作成しているため、(C++とは違い)ファイルを閉じてJS空間が破棄されても、このCOMオブジェクトにぶら下がるdllは生存する。
var serverProcessCOM;

// sleep 相当。ECMAScript には sleep が無いので。
function sleep_in_tick(ms) {
    return new Promise(resolve => hidemaru.setTimeout(resolve, ms));
}

debuginfo(2);
// HTML/JS用のHttpサーバーを起動。(PHPだと他の環境要らずでたった２個ほどのファイルでシンプルサーバーが動作するので一緒に内包してある)
function openHttpServer() {

	function checkAndExtractPort(text) {
	  const match = text.match(/PORT:(\d+)/);
	  return match ? match[1] : null;
	}

    try {

	    let avilablePort = null;
		let currentWindowHandle = hidemaru.getCurrentWindowHandle();
		  var processInfo = hidemaru.runProcess('"' + currentmacrodir + "\\HmSimpleHttpServer.exe" + '"' + " " +currentWindowHandle , currentmacrodir, "stdioAlive", "sjis" );
		  var stdOut = processInfo.stdOut;
		  stdOut.onReadLine( readLineAsync ); //固まりません
		  function readLineAsync(outText) {
		      //ここはマクロ実行中ではない
		      let port = checkAndExtractPort(outText);
		      if (port != null) {
                  avilablePort = port;
                  hidemaru.postExecMacroMemory("js {doMain()}");
		      }
		  }

	} catch(err) {
        outputAlert(err);
    }
}

// 選択範囲の最終座標に移動した方が便利だとわかっている
function gotoSelectEndPosition() {
    // 選択は自動解除した方が便利なようだ
    let cur_selendx = selendx();
    let cur_selendy = selendy();
    escapeselect();
    moveto(cur_selendx, cur_selendy);
}

openHttpServer();

// メイン処理
function doMain() {
    try {
        // レインだリングペインをそのポートでlocalhostで開く
        openRenderPaneCommand(avilablePort);

        // 文字列を選択しているなら
        if (selecting()) {
            // それをＡＩへの質問内容として送信
            doSendQuestionContent();
            // 選択を解除し、選択の最後の座標へと移動
            gotoSelectEndPosition();
        } else {
            // それ以外なら、ＡＩにコマンドの送信
            doSendCommand();
        }
    } catch (err) {
        outputAlert(err);
    }
}
