'use strict';

const dbQuery = require('../db.js');
const Playlist = require('./Playlist.js');

const PlaylistTrack = () => {

}

PlaylistTrack.add = (playlistId, trackId) => {
    const params = {
        playlist_id: playlistId,
        track_id: trackId,
    };
    const query = 'INSERT IGNORE INTO `playlist_tracks` SET ?';
    return dbQuery(query, params);
}

PlaylistTrack.getTrackList = (playlistId, order = 'id') => {
    const query = `
        SELECT t.id, t.title, t.artist, t.duration, t.path
        FROM playlist_tracks pt
        INNER JOIN playlists p ON (p.id = pt.playlist_id)
        INNER JOIN tracks t ON (t.id = pt.track_id)
        WHERE p.id = ?
        ORDER BY t.${order}
    `;

    return dbQuery(query, [playlistId]);
}

PlaylistTrack.delete = (playlistId, trackId) => {
    const query = `DELETE FROM playlist_tracks WHERE playlist_id = ? AND track_id = ?}`;
    return dbQuery(query, [playlistId, trackId]);
}

module.exports = PlaylistTrack;