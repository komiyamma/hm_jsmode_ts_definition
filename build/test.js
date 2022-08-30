function test(arg) {
    var a;
    if (typeof (a) == "string") {
    }
    if (typeof (a) == "number") {
    }
    return 3;
}
test(1); //=> 1
test("文字列"); //=> 文字列
//※ Genericsでも型推論ができるので、引数から型が明示的にわかる場合は省略が可能
test("文字列２"); //=> "文字列２"
