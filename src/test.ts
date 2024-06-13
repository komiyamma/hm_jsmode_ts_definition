/// <reference path="../types/hm_jsmode.d.ts" />

function getPageParam() {
    // 現在のURLを取得
    const url = new URL(window.location.href);

    // URLからクエリストリングの部分を取得
    const queryString = url.search;

    // パラメータ名からパラメータ値を取得
    const urlParams = new URLSearchParams(queryString);
    const pageParam = urlParams.get('page');

    return pageParam;
}

function findPreviousULSibling(element) {
    if (!element) { return null; }
    var ancestorElement = element.parentElement;
    if (!ancestorElement) { return null; }

    for (let i = 0; i < 8; i++) {
        if (ancestorElement !== null && ancestorElement.tagName !== 'UL') {
            ancestorElement = ancestorElement.parentElement;
        }
    }

    if (!ancestorElement) {
        return null;
    }

    var previousUL = ancestorElement.previousElementSibling;
    if (previousUL) {
        return previousUL;
    } else {
        return null;
    }
}

function createBreadCrumbs() {
    try {
        let pageParam = getPageParam();
        let currentElement = document.getElementById(pageParam);

        // パンくずリストを格納する配列
        let breadcrumbs = [];
        breadcrumbs.push(currentElement.innerText);
        let targetItem = currentElement;
        // 最大でも8層程度でしょ
        for (let i = 0; i < 8; i++) {
            targetItem = findPreviousULSibling(targetItem);
            if (!targetItem) { break; }
            breadcrumbs.push(targetItem.innerText);
        }
        breadcrumbs.reverse(); // 子供⇒親の順番で格納されているので、反対のして親⇒子供の順番にする。
        return breadcrumbs.join(' &gt; '); // ぱんくず文字列化
    } catch(q) {

    }

    return "";
}

createBreadCrumbs();