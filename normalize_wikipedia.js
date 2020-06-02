"use strict";


function toLanguageCode(url) {
    let rawPageID = location.host.split(".")[0];

    if (!rawPageID) {
        return null;
    }

    return rawPageID;
}


function toPageID(url) {
    let rawPageID = location.pathname.split("/")[2];

    if (!rawPageID) {
        return null;
    }

    return rawPageID;
}


function openNormalizedURL(url) {
    const pageID = toPageID(url);
    const LanguageCode = toLanguageCode(url);

    if (pageID === null) {
        return null;
    }

    window.open("https://" + LanguageCode + ".wikipedia.org/wiki/" + pageID, "_blank");

    window.close()
}


openNormalizedURL(location.href);
