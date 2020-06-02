"use strict";


function toPhotoID() {
    return location.pathname.split('/')[3];
}


function toUserID() {
    return location.pathname.split('/')[2];
}


function normalize_flickr() {
    history.replaceState(null, null, '/photos/' + toUserID() + '/' + toPhotoID());
}


normalize_flickr();
