'use strict';

const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /yondu with missing params', () => {
    it('should return 400 - Bad request', done => {
        request(app)
            .get(`/yondu`)
            .expect(400)
            .end((err, res) => {
                expect(err).to.be.null;

                expect(res.body).to.have.property('error');
                expect(res.body.error).to.equal('You should send distance and time in query');

                done();
            });
    });
});
