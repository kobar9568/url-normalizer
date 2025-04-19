"use strict";

function toPageID(url) {
    // 1. "https://dic.nicovideo.jp/t/b/a/[記事タイトル]/[開始レス番号]-"
    let pageId = url.split('/').slice(-1)[0]; // 2024-10-14: Changed from [5] to .slice(-1)[0].

    // 2. other
    if (!pageId) {
        return null;
    }

    return 'https://auctions.yahoo.co.jp/auction/' + pageId;

}


function replaceNormalizedURL(url) {
    // This used to work before, but due to changes in Chrome's Same-Origin Policy, it no longer functions as expected.
    //history.replaceState('', '', toPageID(url));

    window.location.replace(toPageID(url));
}


replaceNormalizedURL(location.href);
