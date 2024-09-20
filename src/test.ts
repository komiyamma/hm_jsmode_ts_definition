/// <reference path="../types/hm_jsmode.d.ts" />

    // 行末まで選択することで、カーソルが先頭にある。
    if (selendcolumn() == 0) {
        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = answer_text.endsWith("\n") ? answer_text : answer_text+"\n";

        // 行を翻訳するので最後に改行を入れる
        insert(answer_text);
    }

    // 文頭から文末まで選択することで行選択相当になっている。
    else if (seltopcolumn() == 0 && selendcolumn() == linelen2()) {

        // 文中ではなく、文全体の塊を翻訳してほしいのだとみなすので、最後に改行を入れる。
        answer_text = answer_text.endsWith("\n") ? answer_text : answer_text+"\n";

        // 文末に改行が含まれてないので、先頭に改行を入れる
        insert("\n" + answer_text);
    }

    // 通常の選択
    else {
        insert(answer_text);
    }

