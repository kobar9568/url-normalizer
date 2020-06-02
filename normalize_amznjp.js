"use strict";


function toPageID(url) {
    // 1. "/dp/[ISBN-10]"
    let rawPageID = url.match(/\/dp\/\d{10}/);

    // 2. "/gp/product/[ISBN-10]"
    if (!rawPageID) {
        rawPageID = url.match(/\/gp\/product\/\d{10}/);
    }

    // 3. "/dp/[ASIN]"
    if (!rawPageID) {
        rawPageID = url.match(/\/dp\/[A-Z0-9]{10}/);
    }

    // 4. "/gp/product/[ASIN]"
    if (!rawPageID) {
        rawPageID = url.match(/\/gp\/product\/[A-Z0-9]{10}/);
    }

    // 5. other
    if (!rawPageID) {
        return null;
    }

    if (rawPageID[0].indexOf('/gp/product/') > -1) {
        return rawPageID[0].replace('/gp/product/', '');
    } else {
        return rawPageID[0].replace('/dp/', '');
    }

}


function replaceNormalizedURL(url) {
    const pageID = toPageID(url);
    if (pageID === null) {
        return null;
    }
    history.replaceState('','','/dp/' + pageID);
}


replaceNormalizedURL(location.href);
