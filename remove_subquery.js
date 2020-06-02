"use strict";

const mainQuery = location.search.split('&')[0];
history.replaceState(null, null, location.pathname + mainQuery);
