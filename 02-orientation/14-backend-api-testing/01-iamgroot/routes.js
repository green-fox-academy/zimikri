'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    const response = {};
    const message = req.query.message;
    
    if (message) {
        response.received = message;
        response.translated = 'I am Groot!';
    } else {
        res.status(400);
        response.error = 'I am Groot!';
    }

    res.json(response);
});

module.exports = app;