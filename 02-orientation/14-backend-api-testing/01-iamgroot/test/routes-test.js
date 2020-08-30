'use strict';

const test = require('tape');
let request = require('supertest');
const app = require('../routes');

test('groot endpoint without message query param', (t) => {
    request(app)
        .get('/groot')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) throw err;

            t.equal(res.body.error, 'I am Groot!');
            t.end();
        });
    
});
