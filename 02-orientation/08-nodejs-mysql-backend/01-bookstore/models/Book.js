'use strict';

const db = require('../db');

let Book = function(book) {
    this.title = book.title;
    this.author = book.author;
    this.category = book.category;
    this.publisher = book.publisher;
    this.price = book.price;
}

Book.listAll = function(filters, callback) {
    const conds = [];
    const condValues = [];

    Object.keys(filters).forEach(filterKey => {
        switch (filterKey) {
            case 'category':
                conds.push(`c.cate_descrip like ?`);
                break;
        
            case 'publisher':
                conds.push(`p.pub_name like ?`);
                break;
        
            case 'plt':
                conds.push(`m.book_price < ?`);
                break;
    
            case 'pgt':
                conds.push(`m.book_price > ?`);
                break;
            
            default:
                break;
        }
        
        condValues.push(decodeURIComponent(filters[filterKey]));
    });

    let query = `
        SELECT m.book_name AS title, a.aut_name AS author, c.cate_descrip AS category, p.pub_name AS publisher, m.book_price AS price
        FROM bookinfo.book_mast m
        LEFT JOIN bookinfo.category c USING (cate_id)
        LEFT JOIN bookinfo.publisher p USING (pub_id)
        LEFT JOIN bookinfo.author a using (aut_id)
    `;
    if (conds.length) query += `WHERE ${conds.join(' AND ')}`;

    db.query(query, condValues, (err, books) => {
        if (err) {
            console.error('Error during DB query:', err);
            return callback(err, null);
        }
        callback(null, books);
    });
  
}

module.exports = Book;