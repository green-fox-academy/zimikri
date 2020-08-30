'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    const distance = req.query.distance;
    const time = req.query.time;
    const response = {};

    if (distance === undefined || time === undefined) {
        res.status(400);
        response.error = 'You should send distance and time in query';
    } else {
        response.distance = parseFloat(distance);
        response.time = parseFloat(time);
        response.speed = response.distance / response.time;
    }

    res.json(response);
    
});

module.exports = app;