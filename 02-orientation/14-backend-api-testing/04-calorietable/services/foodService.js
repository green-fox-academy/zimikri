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
        .then(() => foodService.getList());
}

foodService.delete = (id) => {
    return food
        .delete(id)
        .then(() => foodService.getList());
}

module.exports = foodService;