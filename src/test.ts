
/// <reference path="../types/hm_jsmode.d.ts" />

debuginfo(2);

// findAvailablePortAndExecFunc(onFindPort);

const currentMacroDirectory = currentmacrodirectory();

main();

var serverExeProcessInfo;

function main() {

    const port = getAvilablePort();
    console.log(port);


    if (typeof (serverExeProcessInfo) != "undefined") {
        serverExeProcessInfo.kill();
    }

    const [command, documentRoot] = createServerCommand(
        {
            serverType: "php",
            port: port,
            documentRoot: String.raw`G:\あいうえお`
        }
    );
    serverExeProcessInfo = hidemaru.runProcess(command, documentRoot, "stdio", "utf8");

    console.log(command);

    browserpanecommand(
        {
            target: "_each",
            url: `http://localhost:${port}/index.html`,
            show: 1,
            size: 500,
            initialize: "async"
        }
    );

}


function getAvilablePort() {
    const com = createobject(String.raw`${currentMacroDirectory}\HmAvailablePort.dll`, "HmAvailablePort.HmAvailablePort");
    console.log(com);
    if (com) {
        return com.Port;
    }

    return 0;
}


function createServerCommand(props) {

    let { serverType, documentRoot, port } = props;

    try {
        switch (serverType) {
            case "php": {

                // PHP 5.4 から無条件で使える(PHPそのまま記載してよいので強力)
                let command = `php.exe -S localhost:${port} -t "${documentRoot}"`;
                return [command, documentRoot];

            }

            case "python": {

                // python 3.7 以上なら無条件で使える
                let command = `python.exe -m http.server --bind localhost ${port}`;
                return [command, documentRoot];

            }

            case "node": {

                // 「npm install -g http-server」をしていること
                // node の http-server 等は、バッチ.cmd を経由してしまうため、http-serverのjavascriptがある場所を直接指定する必要がある。
                let workdir = documentRoot;
                let oShell = createObject("WScript.Shell")
                let appDataPath = oShell.ExpandEnvironmentStrings("%APPDATA%"); // 非同期なので getenv は使えない
                let command = String.raw`node.exe "${appDataPath}\npm\node_modules\http-server\bin\http-server" "${workdir}" -p ${port}`;
                return [command, documentRoot];

            }
        }

        throw "未実装タイプ";

    } catch (e) {

        console.log(e);

    }

    return ["", ""];
}

