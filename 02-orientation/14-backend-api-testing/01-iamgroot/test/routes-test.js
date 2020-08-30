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

test('groot endpoint with message query param', (t) => {
    const message = 'Hello';
    request(app)
        .get(`/groot?message=${message}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) throw err;

            t.equal(res.body.received, message);
            t.equal(res.body.translated, 'I am Groot!');
            t.end();
        });
    
});