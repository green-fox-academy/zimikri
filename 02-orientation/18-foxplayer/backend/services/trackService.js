'use strict';

const Track = require('../models/Track');
const numberValidator = require('../models/dtos/NumberValidator');
const responseMessage = require('../models/dtos/ResponseMessage');

const trackService = () => {

}

trackService.getTrack = (id) => {
    return Track.getList(id)
        .then(list => {
            return new Promise((resolve, reject) => {
                    if (list.length) {
                        resolve(list[0]);
                    } else {
                        reject(responseMessage.error(`No track with id: ${id}`));
                    }
                });
        });
}

trackService.getList = () => {
    return Track.getList()
        .then(list => {
            return new Promise((resolve, reject) => {
                    if (list.length) {
                        resolve(list);
                    } else {
                        reject(responseMessage.error(`No tracks`));
                    }
                });
        });
}

trackService.add = () => {

}

trackService.delete = (trackId) => {
    
}

module.exports = trackService;