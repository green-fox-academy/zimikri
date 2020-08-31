'use strict';

const express = require('express');
const foodService = require('../services/foodService');
const { response } = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    foodService.getList()
        .then(response => res.json(response))
        .catch(err => {
            res.json({ error: 'Something went wrong on listing' });
        });
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const amount = req.body.amount;
    const calorie = req.body.calorie;

    foodService.addNew(name, amount, calorie)
        .then(response => res.json(response))
        .catch(err => {
            res.json({ error: err });
        });
});

router.delete('/:id', (req, res) => {
    foodService.delete(req.params.id)
        .then(response => res.json(response))
        .catch((err) => {
            res.json({ error: err });
        });
})

module.exports = router;