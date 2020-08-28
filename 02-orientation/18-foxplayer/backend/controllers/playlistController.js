'use strict';

const express = require('express');
const router = express.Router();
const playlistService = require('../services/playlistService');

router.get('/', (req, res) => {
    playlistService.getPlaylists()
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    playlistService.getPlaylist(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.post('/', (req, res) => {
    playlistService.createPlaylist(req.body.playlist)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.delete('/', (req, res) => {
    res.json({ error: 'You should give the id of playlist' });
})

router.delete('/:id', (req, res) => {
    playlistService.deletePlaylist(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;