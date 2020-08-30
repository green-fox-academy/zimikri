'use strict';

const food = require('../models/Food');

const foodService = () => {

}

foodService.getList = () => {
    return food.list();
}

module.exports = foodService;