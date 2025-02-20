/// <reference path="../types/hm_jsmode.d.ts" />

debuginfo(2);

const currentMacroDirectory = currentmacrodirectory();

main();

var serverExeProcessInfo; // ローカルにすると、serverExeProcessInfo自体のリファレンスカウンタが残らなので、ProcessInfoの中身が中途半端に消えるので注意ｗ

function main() {

    serverExeProcessInfo?.kill(); // 実はPort自体が no-cacheを兼ねることが出来るので、ユーザーのマクロのレベルだと、あえてkillしない方がいいかも？ 

    const serverPort = getFreePort();
    console.log(serverPort);
    if (serverPort == 0) {
        return;
    }

    const serverType = "php"; // "php" もしくは "node" もしくは "python"(pythonはちょっと推奨しない)

    const command = launchServerCommand(
        {
            serverType,
            serverPort,
            documentRoot: String.raw`C:\あいうえお` // ドキュメントルートのフォルダ指定
        }
    );

    console.log("実行コマンド:" + command);

    if (!command) {
        console.log("エラー:実行コマンドが構築できていない");
        return;
    }


    browserpanecommand(
        {
            target: "_each",
            url: `http://localhost:${serverPort}/index.html`,
            show: 1,
            watch: true,
            size: 500,
            initialize: "async"
        }
    );

}

// 空いているポート番号を探す。(49152～65535以降)
function getFreePort() {
    const com = createobject(String.raw`${currentMacroDirectory}\HmFreePort.dll`, "HmFreePort.HmFreePort");
    return com ? com.Port : 0;
}


function launchServerCommand({ serverType, serverPort, documentRoot }) {

    if (!existfile(documentRoot)) {
        console.log(`エラー:「${documentRoot}」というフォルダは存在しない\r\n"`);
        return "";
    }

    switch (serverType) {

        case "php": {

            // PHP(php.exe, php8.dll, php.ini)さえあれば無条件で使えると考えてよい。
            // 一番起動が速く、間違いがなく、キャッシュのなしで開発やローカル目的には適切、エンコードもデフォがutf8、安定感が抜群。.php ならPHPが動作するのもメリット。
            let command = `php.exe -S localhost:${serverPort} -t "${documentRoot}"`;
            serverExeProcessInfo = hidemaru.runProcess(command, documentRoot, "stdio", "utf8");
            return command;
        }

        case "node": {

            // nodeはデフォルトではサーバー用コマンドがない。「npm install -g http-server」をnode文化ではコンソールにて実行することで簡易サーバーゲットが主流な模様。

            let appDataPath = getenv("APPDATA");
            let npmRootPath = String.raw`${appDataPath}\npm\node_modules`;

            // 「http-server」コマンドをrunProcess直接実行した場合、「http-server.cmd」というバッチファイルなので、後でそのバッチから起動されたnodeプロセスを片付けることが出来ない。
            // なので、「後で秀丸が自身で片付けられるように」、nodeを直接実行する。
            // 問題は「http-server」の場所だが、以下のような場所であることがほとんどだろう。
            // ただし、変更することも一応可能なので、食い違うようなら、「npm root -g」もしくは「where http-server」コマンドで場所を確認すること

            // デフォルトだとコンテンツキャッシュが長いため、開発用途ならキャッシュなしにする。(-c-1の部分)
            // １分程度はキャッシュもたせたいなら、-c60 など。
            // 基本的にローカルで動作させる歳はキャッシュなしで十分だと思う。
            let command = String.raw`node.exe "${npmRootPath}\http-server\bin\http-server" -c-1 "${documentRoot}" -p ${serverPort}`;
            serverExeProcessInfo = hidemaru.runProcess(command, documentRoot, "stdio", "utf8");
            return command;
        }

        case "python": {

            // python 3.7 以上なら無条件で使える。
            // charset のデフォルトがutf8じゃないので、日本人には扱いにくい。「HTMLのcharsetを設定(あるいはBOM)」したりも「CSSもJavaScriptもBOM」
            // をつければいけるが、世界はこれらのファイルにBOM付ける文化になってないのでオススメできない
            let command = `python.exe -m http.server --bind localhost ${serverPort}`;
            serverExeProcessInfo = hidemaru.runProcess(command, documentRoot, "stdio", "utf8");
            return command;
        }

    }

    return "";
}

