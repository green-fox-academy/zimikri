'use strict';

const test = require('tape');
const filepath = __dirname + '/assets/users.csv';
const User = require('./models/User');

test('File – imported db comparison', t => {
    const fileLines = User.readFile(filepath).trim().split(/\s*[\n\r]+\s*/g);
    const fields = fileLines.shift().split(/\s*\,\s*/g);
    const expected = fileLines.join(`\n`);

    User.getFullList('bookinfo.users', fields, rows => {
        const result = rows.map(row => Object.values(row).join(',')).join(`\n`);
  
        t.equal(result.length, expected.length);
        t.equal(result, expected);
        t.end();

        User.endConnection();
    });
});