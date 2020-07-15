'use strict';

const db = require('../db');

let User = function (user) {
    console.log(user);
    
    if (user.id) User.id = user.id;
    User.username = user.username;

    if (!user.id || !user.username)
        user = User.list(user.id, user.username, (err, user) => {
            if (err) {
                return;
            }
            if (user) {
                User.id = user.id;
                User.username = user.username;
            }
        });
    
    return User;
};

User.list = function (id, username, callback) {
    username = username || '';
    const cond = [];
    const condValues = [];

    let query = `SELECT * FROM user`;
    if (id) {
        cond.push(`id = ?`);
        condValues.push(id);
    }
    if (username) {
        cond.push(`username = ?`);
        condValues.push(username);
    }
    if (cond.length) query += ` WHERE ${cond.join(' AND ')}`;
        
    db.query(query, condValues, (err, users) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback(err, null);
        }
        if ((id || username) && users) return callback(null, users[0]);

        callback(null, users);
    });
};

User.add = function (user, callback) {
    
    let query = `INSERT IGNORE INTO user SET ?`;
    if (username) user.username;
    user.timestamp = Math.floor(Date.now() / 1000);

    db.query(query, user, (err, result) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback(err, null);
        }
        
        callback(null, result.insertId);
    });
}

User.getUserByUsername = (username, callback) => {
    const query = `SELECT * FROM user WHERE username = ?`;
    db.query(query, [username], (err, user) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback(err, null);
        }
        
        return (user) ? callback(null, user[0]) : callback(null, {});
    });
};

module.exports = User;