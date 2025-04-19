"use strict";

function toPageID(url) {
    // 1. "https://dic.nicovideo.jp/t/b/a/[記事タイトル]/[開始レス番号]-"
    let pageTitle = url.split('/')[6];
    let startResNum = parseInt(url.split('/')[7].slice(0, -1));

    // 2. other
    if (!pageTitle) {
        return null;
    }

    return 'https://dic.nicovideo.jp/b/a/' + pageTitle + '/' + startResNum + '-';

}


function replaceNormalizedURL(url) {
    history.replaceState('', '', toPageID(url));
}


replaceNormalizedURL(location.href);
