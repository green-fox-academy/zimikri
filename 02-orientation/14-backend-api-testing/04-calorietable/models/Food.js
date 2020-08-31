'use strict';

const dbQuery = require('./db');

const Food = () => {

}

Food.list = () => {
    const query = 'SELECT name, amount, calorie FROM foods';
    return dbQuery(query, []);
}

module.exports = Food;