'use strict';

const food = require('../models/Food');

const foodService = () => {

}

foodService.getItem = (id) => {
    return food.item(id);
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

foodService.update = (id, name, amount, calorie) => {
    const updateData = {};
    if (name) updateData.name = name;
    if (parseInt(amount) >= 0) updateData.amount = parseInt(amount);
    if (parseInt(calorie) >= 0) updateData.calorie = parseInt(calorie);
console.log(id, updateData);
    return food
        .update(id, updateData)
        .then(() => foodService.getItem(id));
}

module.exports = foodService;