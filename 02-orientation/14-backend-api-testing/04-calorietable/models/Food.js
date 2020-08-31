'use strict';

const dbQuery = require('./db');

const Food = () => {

}

Food.list = () => {
    const query = 'SELECT name, amount, calorie FROM foods';
    return dbQuery(query, []);
}

Food.add = (name, amount, calorie) => {
    const query = 'INSERT INTO foods SET ?';
    return dbQuery(query, [name, amount, calorie]);
}

module.exports = Food;