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

    window.open('https://twitter.com' + path, '_blank');
    window.close()
}


function openNormalizedSearch() {
    window.open('https://twitter.com/search' + toQuery(), '_blank');
    window.close()
}


if (location.pathname === '/search') {
    openNormalizedSearch()
} else {
    openNormalizedURL()
}
