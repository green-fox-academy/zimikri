'use strict';

const db = require('../db');
const table = 'bookinfo.users';

const User = function (user) {
    this.id = user.id;
    this.prefix = user.prefix;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.address = user.address;
    this.height = user.height;
    this.bitcoin_address = user.bitcoin_address;
    this.color_preference = user.color_preference;
};

User.save = function (user) {
    const query = `INSERT IGNORE INTO ${table} SET ?`;
    db.query(query, user, (err, result) => {
        if (err) {
            throw 'Error inserting row:' + err;
        }
    });
};

User.clearAll = function () {
    const query = `TRUNCATE TABLE ${table}`;
    db.query(query, (err, result) => {
        if (err) {
            throw 'Error during truncate table: ' + err;
            return;
        }
    });
}

User.endConnection = function () {
    db.end();
}

module.exports = User;