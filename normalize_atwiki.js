"use strict";


function toPageID() {
    return location.pathname.split('/')[4];
}


function toWikiID() {
    return location.pathname.split('/')[1];
}


function normalize_atwiki() {
    history.replaceState(null, null, '/' + toWikiID() + '/pages/' + toPageID());
}


normalize_atwiki();
