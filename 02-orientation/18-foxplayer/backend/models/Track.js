'use strict';

const dbQuery = require('../db.js');

const Track = () => {

}

Track.add = (title, artist, duration, path) => {
    const params = {
        title: title,
        artist: artist,
        duration: duration,
        path: path,
    };
    const query = 'INSERT IGNORE INTO `tracks` SET ?';
    return dbQuery(query, params);
}

Track.getList = (id = null) => {
    const cond = id ? ' WHERE id=?' : '';
    const query = 'SELECT id, title, artist, duration, path FROM `tracks`' + cond;
    return dbQuery(query, [id]);
}

Track.delete = (id) => {
    const query = 'DELETE FROM `tracks` WHERE id = ?';
    return dbQuery(query, [id]);
}

module.exports = Track;