"use strict";


function toPhotoID() {
    return location.href.match(/[a-zA-Z0-9\-_]{15}/);
}


function inspectFileFormat() {
    return window.location.search.split('?')[1].split('&')[0].substr(7);
}


function openNormalizedURL() {
    // クエリが無ければ動作しない
    if (window.location.search === '') {
        return null;
    }
    const fileName = toPhotoID() + '.' + inspectFileFormat() + ':orig';
    window.open('https://pbs.twimg.com/media/' + fileName, '_blank');
    window.close()
}


openNormalizedURL();
