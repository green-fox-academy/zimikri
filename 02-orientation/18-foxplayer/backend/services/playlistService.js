'use strict';

const Playlist = require('../models/Playlist');
const responseMessage = require('../models/dtos/ResponseMessage');

const playlistService = () => {

}

playlistService.getPlaylists = () => {
    return Playlist.getList();
}

playlistService.getPlaylist = (id) => {
    return Playlist.getList(id)
        .then(list => {
            return new Promise((resolve, reject) => {
                    if (list.length) {
                        resolve(list[0]);
                    } else {
                        reject(responseMessage.error(`No playlist with id: ${id}`));
                    }
                });
        });
}

playlistService.createPlaylist = (title) => {
    title = validateText(title);
    return Playlist.add(title)
        .then((response) => {
            if (!response.insertId)
                return new Promise((resolve, reject) => reject(responseMessage.error('The playlist already exists')));
                    
            return Playlist.getList();
        });
}

playlistService.deletePlaylist = (id) => {
    if (!validNumber(id)) {
        return new Promise((resolve, reject) => reject(responseMessage.error(`Invalid id: ${id}`)));
    }

    return playlistService.getPlaylist(id)
        .then(playlist => {
            return new Promise((resolve, reject) => {
                if (playlist.system) {
                    reject(responseMessage.error(`You can't delete system list`));
                } else {
                    resolve(playlist);
                }
            });

        })
        .then(playlist => {
            return Playlist.delete(id)
                .then(response => {
                    return new Promise((resolve, reject) => {
                        if (!response.affectedRows) {
                            reject(responseMessage.error(`Unable to delete list with id: ${id}`));
                        } else {
                            resolve(playlist);
                        }
                    });
                });
    
        });
}

const validateText = (text) => {
    return text.replace(/[^a-zA-Z0-9\- _]+/, '').trim();
}

const validNumber = (num) => {
    return num == parseInt(num).toString()
}

module.exports = playlistService;