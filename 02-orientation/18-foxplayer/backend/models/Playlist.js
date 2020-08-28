'use strict';

const dbQuery = require('../db.js');

const Playlist = function () {

}

Playlist.add = (title) => {
    const params = {
        title: title,
        system: 0,
    };
    const query = 'INSERT IGNORE INTO `playlists` SET ?';
    return dbQuery(query, params);
}

Playlist.getList = (id = null) => {
    const cond = id ? ' WHERE id=?' : '';
    const query = 'SELECT * FROM `playlists`' + cond;
    return dbQuery(query, [id]);
}

Playlist.delete = (id) => {
    const query = 'DELETE FROM `playlists` WHERE id = ?';
    return dbQuery(query, [id]);
}

module.exports = Playlist;