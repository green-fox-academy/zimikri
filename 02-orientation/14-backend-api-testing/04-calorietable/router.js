'use strict';

const foodController = require('./controllers/foodController');

const route = (app) => {
    app.use('/drax', foodController);
}

module.exports = route;