'use strict';

const dbQuery = require('./db');
const { response } = require('express');

const Food = () => {

}

Food.list = () => {
    const query = 'SELECT name, amount, calorie FROM foods';
    return dbQuery(query, []);
}

Food.add = (name, amount, calorie) => {
    const query = 'INSERT INTO foods SET name = ?, amount = ?, calorie = ?';
    return dbQuery(query, [name, amount, calorie])
        .then(response => {
            return new Promise((resolve, reject) => {
                if (response.insertId)
                    resolve(response);
                
                reject(() => {
                    console.error('Error inserting data:', name, amount, calorie);
                    return 'DB error';
                });
            });
        });
}

Food.delete = (id) => {
    const query = 'DELETE FROM foods WHERE id = ?';
    return dbQuery(query, [id])
        .then(response => {
            return new Promise((resolve, reject) => {
                if (response.affectedRows)
                    resolve(response);
                
                reject(() => {
                    console.error('Error deleting data with id:', id);
                    return 'DB error';
                });
            });
        });
}

module.exports = Food;