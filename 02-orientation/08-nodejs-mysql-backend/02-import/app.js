'use strict';

const User = require('./models/User');
const fs = require('fs');
const filepath = './assets/users.csv';

function loadData(filepath, User, truncateTable = false) {
    if (truncateTable) User.clearAll();

    const fileLines = readFile(filepath).split(/[\n\r]+/g);
    const fieldNames = fileLines.shift().split(',');
    
    fileLines.forEach((line) => {
        const data = line.split(',');
        const user = {};
        data.forEach((record, index) => {
            user[fieldNames[index]] = record;
        });
        User.save(user);
    });
}

function readFile(filePath) {
    let fileContent = '';

    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        throw `Unable to read file: ${filePath}`;
    }

    return fileContent;
}

try {
    loadData(filepath, User, true);
} catch (error) {
    console.log(error);
}

User.endConnection();

