'use strict';

const Book = require('../models/Book');

const bookController = function(app) {
    app.get('/books', (req, res) => {
        Book.listAll(req.query, (err, books) => {
            if (err) {
                console.error('Error during DB query:', err);
                return res.render('../views/error', {
                    message: 'Error during DB query',
                });
            }

            res.render('../views/books', {
                dataList: books,
            });
        });
    });
};

module.exports.bookController = bookController;