'use strict';

const food = require('../models/Food');

const foodService = () => {

}

foodService.getList = () => {
    return food.list();
}

foodService.addNew = (name, amount, calorie) => {
    // TODO: add data validation
    return food
        .add(name, amount, calorie)
        .then(result => foodService.getList());
}

module.exports = foodService;