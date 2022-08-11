/// <reference path="../types/hm_jsmode.d.ts" />

message("あいうえお", "タイトル", 0x00|0x10, 2000);

var b: number = input("aaa", "デフォルト", 0x00, 3, 10);

var c = loaddll("abc");
var d:string = c.loadDllFile;

