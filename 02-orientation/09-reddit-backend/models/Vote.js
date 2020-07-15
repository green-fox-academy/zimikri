'use strict';

const db = require('../db');

const Vote = (postId, userId) => {
    Vote.post_id = postId;
    Vote.user_id = userId;
};

Vote.load = (postId, userId, callback) => {
    const query = 'SELECT * FROM vote WHERE post_id = ? AND user_id = ?';
    db.query(query, [postId, userId], (err, vote) => {
        if (err) {
            console.error('Error during DB query:', err);
            err.clientMessage = 'Error during DB query';
            return callback(err, null);
        }

        return callback(null, vote[0]);
    });
};

Vote.addVote = (postId, userId, voteValue, callback) => {
    Vote.load(postId, userId, (err, vote) => {
        if (err) return callback(err, 0);

        let query;
        let queryParams;
        if (vote) {
            vote.vote += voteValue;
            if (vote.vote < -1 || vote.vote > 1) {
                err = { clientMessage: `You can't ${(voteValue == 1) ? 'up' : 'down'}vote again` };
                return callback(err, 0);
            }
            query = 'UPDATE vote SET vote = ? WHERE post_id = ? AND user_id = ?';
            queryParams = [vote.vote, vote.post_id, vote.user_id];
        } else {
            query = 'INSERT INTO vote SET ?';
            queryParams = {
                post_id: postId,
                user_id: userId,
                vote: voteValue,
            };
        }

        db.query(query, queryParams, (err, result) => {
            if (err) {
                console.error('Error during DB query:', err);
                err.clientMessage = 'Error during DB query';
                return callback(err, 0);
            }

            return callback(null, voteValue);
        });
    });
};

module.exports = Vote;