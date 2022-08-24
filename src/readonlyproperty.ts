
declare var window: any;
declare var doneSetHidemaruGlobalProxy: boolean;
declare var hidemaruGlobal: Object;

function setHidemaruGlobalProxy(name: string) {
    Object.defineProperty(
        window,
        name,
        {
            get: function () {
                return hidemaruGlobal[name];
            },
            set: function (v) {
                if (typeof (v) == 'function') {
                    // 多分HidemacGlobalJSからの再代入でしょ...
                    return;
                }

                let value: string = "";
                let typestr: string = typeof(v);
                if (value == null) {
                    value = "(null)";
                    typestr = "";
                }

                if (typestr == "number" || typestr == "string") {
                    value = " " + v.toString() + " ";
                }

                if (typestr) {
                    typestr = typestr + "型の";
                }

                let errormsg = name + "関数を" + typestr + value + "で上書きしようとしました。\r\n";
                hidemaruGlobal.debuginfo(2);
                console.log(errormsg);
                throw new Error(errormsg);
            }
        }
    );
}

if (typeof doneSetHidemaruGlobalProxy == 'undefined') {
    doneSetHidemaruGlobalProxy = true;
    setHidemaruGlobalProxy("x");
    setHidemaruGlobalProxy("str");
    setHidemaruGlobalProxy("result");
    setHidemaruGlobalProxy("lineno");
    setHidemaruGlobalProxy("column");
    setHidemaruGlobalProxy("y");
    setHidemaruGlobalProxy("filename");
}

