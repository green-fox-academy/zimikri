'use strict';

const PlaylistTrack = require('../models/PlaylistTrack');
const trackService = require('./trackService');
const playlistService = require('./playlistService');
const numberValidator = require('../models/dtos/NumberValidator');
const responseMessage = require('../models/dtos/ResponseMessage');

const playlistTrackService = () => {

}

playlistTrackService.getAllTracks = () => {
    return trackService.getList();
}

playlistTrackService.getTrackList = (id) => {
    return PlaylistTrack.getTrackList(id)
        .then(list => {
            return new Promise((resolve, reject) => {
                    if (list.length) {
                        resolve(list);
                    } else {
                        reject(responseMessage.error(`No playlist with id: ${id}`));
                    }
                });
        });
}

playlistTrackService.add = (playlistId, trackId) => {
    const errorMessages = [];
    if (!numberValidator.isInt(playlistId) || !playlistId) errorMessages.push('Invalid playlist id');
    if (!numberValidator.isInt(trackId) || !trackId) errorMessages.push('Invalid track id');
    if (errorMessages.length) {
        const errorResponse = responseMessage.error(errorMessages.join(', '));
        return new Promise((resolve, reject) => reject(errorResponse));
    }

    return playlistService.getPlaylist(playlistId)
        .then(playlist => trackService.getTrack(trackId))
        .then(track => PlaylistTrack.add(playlistId, trackId))
        .then(response => {
            return new Promise((resolve, reject) => {
                if (!response.affectedRows) {
                    reject(responseMessage.error(`Track(id: ${trackId}) is already on list(id: ${playlistId})`));
                } else {
                    resolve(playlistTrackService.getTrackList(playlistId));
                }
            });
        });
}

playlistTrackService.delete = (playlistId, trackId) => {
    const errorMessages = [];
    if (!numberValidator.isInt(playlistId) || !playlistId) errorMessages.push('Invalid playlist id');
    if (!numberValidator.isInt(trackId) || !trackId) errorMessages.push('Invalid track id');

    if (errorMessages.length) {
        const errorResponse = responseMessage.error(errorMessages.join(', '));
        return new Promise((resolve, reject) => reject(errorResponse));
    }

    return PlaylistTrack.delete(playlistId, trackId)
        .then(response => {
            return new Promise((resolve, reject) => {
                if (!response.affectedRows) {
                    reject(responseMessage.error(`No track(id: ${trackId}) on list(id: ${playlistId})`));
                } else {
                    resolve(playlistTrackService.getTrackList(playlistId));
                }
            });
        });
}

module.exports = playlistTrackService;