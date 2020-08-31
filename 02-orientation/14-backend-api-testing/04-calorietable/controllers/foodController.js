'use strict';

const express = require('express');
const foodService = require('../services/foodService');
const router = express.Router();

router.get('/', (req, res) => {
    foodService.getList()
        .then(response => res.json(response))
        .catch(err => {
            res.json({ error: 'Something went wrong' });
        });
});

module.exports = router;