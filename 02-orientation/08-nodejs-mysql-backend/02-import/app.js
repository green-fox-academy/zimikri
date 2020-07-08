'use strict';

const User = require('./models/User');
const fileToImport = __dirname + '/assets/users.csv';

try {
    User.import(fileToImport, true);
} catch (error) {
    console.log(error);
}

User.endConnection();