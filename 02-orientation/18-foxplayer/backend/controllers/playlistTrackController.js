'use strict';

const express = require('express');
const router = express.Router();
const playlistTrackService = require('../services/playlistTrackService');

router.get('/', (req, res) => {
    playlistTrackService.getAllTracks()
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    playlistTrackService.getTrackList(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.post('/:id', (req, res) => {
    playlistTrackService.add(req.params.id, req.body.track_id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.delete('/:playlistId/:trackId', (req, res) => {
    playlistTrackService.delete(req.params.playlistId, req.params.trackId)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;