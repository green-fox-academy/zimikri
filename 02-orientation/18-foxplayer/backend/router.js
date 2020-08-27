'use strict';

const playlistController = require('./controllers/playlistController');
const playlistTrackController = require('./controllers/playlistTrackController');
const trackController = require('./controllers/trackController');

const route = (app) => {
    app.use('/playlists', playlistController);
    app.use('/playlist-tracks', playlistTrackController);
    app.use('/tracks', trackController);
}

module.exports = {
    route,
};