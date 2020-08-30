'use strict';

const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /yondu with valid query params', () => {
    it('should return json with distance, time and calculated speed', done => {
        const distance = 100.0;
        const time = 10.0;

        request(app)
            .get(`/yondu?distance=${distance}&time=${time}`)
            .expect(200)
            .end((err, res) => {
                expect(err).to.be.null;

                expect(res.body)
                    .to.have.property('distance')
                    .to.equal(distance);
                expect(res.body)
                    .to.have.property('time')
                    .to.equal(time);
                expect(res.body)
                    .to.have.property('speed')
                    .to.equal(10.0);

                done();
            });
    });
});

describe('GET /yondu with missing time query', () => {
    it('should return 400 - Bad request', done => {
        const distance = 100.0;

        request(app)
            .get(`/yondu?distance=${distance}`)
            .expect(400)
            .end((err, res) => {
                expect(err).to.be.null;

                expect(res.body).to.have.property('error');
                expect(res.body.error).to.equal('You should send distance and time in query');

                done();
            });
    });
});

describe('GET /yondu with missing distance query', () => {
    it('should return 400 - Bad request', done => {
        const time = 10.0;

        request(app)
            .get(`/yondu?time=${time}`)
            .expect(400)
            .end((err, res) => {
                expect(err).to.be.null;

                expect(res.body).to.have.property('error');
                expect(res.body.error).to.equal('You should send distance and time in query');

                done();
            });
    });
});

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
