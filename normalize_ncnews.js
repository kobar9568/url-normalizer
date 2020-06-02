"use strict";

function toPageID(url) {
    // 1. "https://news.nicovideo.jp/watch/[PageID]"
    let rawPageID = url.match(/https:\/\/news.nicovideo.jp\/watch\/nw\d{7}/);

    // 2. other
    if (!rawPageID) {
        return null;
    }

    return 'nw' + rawPageID[0].replace('https://news.nicovideo.jp/watch/nw', '');

}


function replaceNormalizedURL(url) {
    const pageID = toPageID(url);
    history.replaceState('','','/watch/' + pageID);
}


replaceNormalizedURL(location.href);
