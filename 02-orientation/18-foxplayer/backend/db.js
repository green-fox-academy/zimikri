'use strict';

const db = require('mysql');

const conn = db.createConnection({
    host: process.env.FOX_DB_HOST,
    port: process.env.FOX_DB_PORT || 3306,
    user: process.env.FOX_DB_USER,
    password: process.env.FOX_DB_PWD,
    database: process.env.FOX_DB_NAME,
    multipleStatements: true,
});

conn.connect((err) => {
    if (err) {
        console.error('DB connection error', err);
        return;
    }

    console.log('Connected to DB');
});

const dbQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        conn.query(query, params, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}

module.exports = dbQuery;