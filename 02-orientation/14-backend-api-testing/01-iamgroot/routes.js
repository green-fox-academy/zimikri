'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    const response = {};
    const message = req.query.message;
    
    if (!message) {
        response.error = 'I am Groot!';
    }

    res.json(response);
});

module.exports = app;