'use strict';

const db = require('mysql');
const { query } = require('express');
require('dotenv').config();

const conn = db.createConnection({
    host: process.env.FOOD_DB_HOST,
    port: process.env.FOOD_DB_PORT || 3306,
    user: process.env.FOOD_DB_USER,
    password: process.env.FOOD_DB_PWD,
    database: process.env.FOOD_DB_NAME,
});

conn.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Connected to DB');
});

const dbQuery = (query, args) => {
    return new Promise((resolve, reject) => {
        conn.query(query, args, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            resolve(result);
        });
    });
}

module.exports = dbQuery;