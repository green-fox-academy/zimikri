'use strict';

const fs = require('fs');
const db = require('../db');
const table = 'bookinfo.users';

const User = (user) => {
    this.id = user.id;
    this.prefix = user.prefix;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.address = user.address;
    this.height = user.height;
    this.bitcoin_address = user.bitcoin_address;
    this.color_preference = user.color_preference;
};

User.save = (user) => {
    const query = `INSERT IGNORE INTO ${table} SET ?`;
    db.query(query, user, (err, result) => {
        if (err) {
            throw 'Error inserting row:' + err;
        }
    });
};

User.import = (filepath, truncateTable = false) => {
    if (truncateTable) User.clearAll();

    const fileLines = User.readFile(filepath).trim().split(/\s*[\n\r]+\s*/g);
    const fieldNames = fileLines.shift().split(/\s*\,\s*/g);
    
    fileLines.forEach((line) => {
        const data = line.split(/\s*\,\s*/g);
        const user = {};
        data.forEach((record, index) => {
            user[fieldNames[index]] = record;
        });
        User.save(user);
    });
};

User.getFullList = (table, fields = '*', callback) => {
    const fieldList = fields.join(',').replace('height', `IFNULL(NULLIF(height, 0),'')`);
    const query = `SELECT ${fieldList} FROM ${table}`;
    
    db.query(query, (err, rows) => {
        if (err) {
            console.log(`Unable to load list from table: ${table}.\n${err}`);
            return;
        }

        return callback(rows);
    });

};

User.readFile = (filePath) => {
    let fileContent = '';

    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        throw `Unable to read file: ${filePath}`;
    }

    return fileContent;
};

User.clearAll = () => {
    const query = `TRUNCATE TABLE ${table}`;
    db.query(query, (err, result) => {
        if (err) {
            throw 'Error during truncate table: ' + err;
        }
    });
}

User.endConnection = () => {
    db.end();
}

module.exports = User;