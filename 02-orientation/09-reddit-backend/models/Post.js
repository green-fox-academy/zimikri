'use strict';

const db = require('../db');
const Vote = require('./Vote');

let Post = function (post) { };

Post.list = function (username, callback) {
    const query = `
        SELECT p.id, p.title, p.url, p.timestamp, p.score, owner.username AS owner, IFNULL(uv.vote, 0) AS vote
        FROM post p
        LEFT JOIN user AS owner ON (owner.id = p.user_id)
        LEFT JOIN vote uv ON (uv.post_id = p.id)
        LEFT JOIN user u ON (u.id = uv.user_id AND u.username = ?)
        ORDER BY p.timestamp DESC
    `;

    db.query(query, [username], (err, posts) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback(err, null);
        }
        callback(null, posts);
    });
};

Post.getItem = (postId, username, callback) => {
    const query = `
        SELECT p.id, p.title, p.url, p.timestamp, p.score, owner.username AS owner, IFNULL(uv.vote, 0) AS vote
        FROM post p
        LEFT JOIN user AS owner ON (owner.id = p.user_id)
        LEFT JOIN vote uv ON (uv.post_id = p.id)
        LEFT JOIN user u ON (u.id = uv.user_id AND u.username = ?)
        WHERE p.id = ?
    `;

    db.query(query, [username, postId], (err, posts) => {
        if (err) {
            console.error('Error during DB query:', err);
            err.clientMessage = 'Error during DB query';
            return callback(err, null);
        }

        callback(null, posts[0]);
    });
};

Post.vote = function (postId, userId, vote, callback) {
    Vote.addVote(postId, userId, vote, (err, result) => {
        if (err) return callback(err, null);

        let query = `UPDATE post SET score = score + ? WHERE id = ?`;
        db.query(query, [result, postId], (err, result) => {
            if (err) {
                err.clientMessage = 'Error during DB query';
                console.error('Error during DB query:', err);
                return callback(err, null);
            }
            
            callback(null, result.changedRows);
        });
    });
};


Post.add = function (post, userId, callback) {
    let query = `INSERT INTO post SET timestamp=UNIX_TIMESTAMP(), ?`;
    if (userId) post.user_id = userId;

    db.query(query, post, (err, result) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback({message: 'Error during DB query'}, null);
        }
        
        callback(null, result.insertId);
    });
};

Post.update = (id, title, url, callback) => {
    const timestamp = Math.floor(Date.now() / 1000);
    const query = 'UPDATE post SET title = ?, url = ?, timestamp = ? WHERE id = ?';
    db.query(query, [title, url, timestamp, id], (err, result) => {
        if (err) {
            err.clientMessage = 'Error during DB query';
            console.error('Error during DB query:', err);
            return callback(err, null);
        }

        return callback(null, timestamp);
    });
};

Post.delete = (id, callback) => {
    const query = 'DELETE FROM post WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            err.clientMessage = 'Error during post delete';
            console.error('Error during DB query:', err);
            return callback(err, null);
        }

        return callback(null, result.affectedRows);
    });
};

module.exports = Post;