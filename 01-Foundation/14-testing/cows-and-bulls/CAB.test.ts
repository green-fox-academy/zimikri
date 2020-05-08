'use strict';

import test from 'tape';
import CAB from './CAB';

test('constructor: random check', t => {
    const cab: CAB = new CAB();

    t.match(cab.numToGuess, /[0-9]{4}/);
    t.end();
});

test('constructor: counter', t => {
    const cab: CAB = new CAB();

    t.equal(cab.counter, 0);
    t.end();
});

test('constructor: state', t => {
    const cab: CAB = new CAB();

    t.equal(cab.state, 'playing');
    t.end();
});

test('constructor: numToGuess parameter only numbers', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.numToGuess, '9123');
    t.end();
});

test('constructor: numToGuess parameter not only numbers', t => {
    const toGuess: string = 'a123';

    t.throws(() => {new CAB(toGuess)});
    t.end();
});

test('Guess: counter', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    cab.guess('0000');
    cab.guess('0000');
    t.equal(cab.counter, 2);
    t.end();
});

test('Guess: no match', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('0870'), '0 cow, 0 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: one match on wrong place', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('0879'), '0 cow, 1 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: two match on wrong place', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('3879'), '0 cow, 2 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: one match on good place', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('9870'), '1 cow, 0 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: two match on good place', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('9873'), '2 cow, 0 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: two match on good place, one on wrong', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('9273'), '2 cow, 1 bull');
    t.equal(cab.state, 'playing');
    t.end();
});

test('Guess: guessed', t => {
    const toGuess: string = '9123';
    const cab: CAB = new CAB(toGuess);

    t.equal(cab.guess('9123'), '4 cow');
    t.equal(cab.state, 'finished');
    t.end();
});
