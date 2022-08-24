function setHidemaruGlobalProxy(name) {
    Object.defineProperty(window, name, {
        get: function () {
            return hidemaruGlobal[name];
        },
        set: function (v) {
            if (typeof (v) == 'function') {
                // 多分HidemacGlobalJSからの再代入でしょ...
                return;
            }
            var value = "";
            var typestr = typeof (v);
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
            var errormsg = name + "関数を" + typestr + value + "で上書きしようとしました。\r\n";
            hidemaruGlobal.debuginfo(2);
            console.log(errormsg);
            throw new Error(errormsg);
        }
    });
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
