'use strict';

const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('POST to /drax endpoint to create new food', () => {
    it('should return a list of food with the new one', done => {
        const name = 'test3';
        const amount = 5;
        const calorie = 2000;
        request(app)
        .post('/drax')
            .set('content-type', 'application/json')
            .send({name: name, amount: amount, calorie: calorie})
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                expect(err).to.be.null;
                const newItem = res.body.filter(item => {
                    return item.name == name && item.amount == amount && item.calorie == calorie;
                });
                expect(newItem.length).is.gte(1);

                done();
            });
    });
});
