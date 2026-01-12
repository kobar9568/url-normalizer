"use strict";


function toPath() {
    let path = location.pathname;

    if (!path) {
        return null;
    }

    return path;
}


function toQuery() {
    return location.search.split('&')[0];
}


function openNormalizedURL() {
    const path = toPath();

    if (path === null) {
        return null;
    }

    window.open('https://twitter.com' + path, '_self');
}


function openNormalizedSearch() {
    window.open('https://twitter.com/search' + toQuery(), '_self');
}


if (location.pathname === '/search') {
    openNormalizedSearch()
} else {
    openNormalizedURL()
}
