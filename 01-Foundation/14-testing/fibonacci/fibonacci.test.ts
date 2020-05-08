'use strict';

// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

import test from "tape";
import fibonacci from'./fibonacci';

test('Test for 0', t => {
    const num: number = 0;
    const expected: number = 0;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for 1', t => {
    const num: number = 1;
    const expected: number = 1;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for 2', t => {
    const num: number = 2;
    const expected: number = 1;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for 3', t => {
    const num: number = 3;
    const expected: number = 2;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for 4', t => {
    const num: number = 4;
    const expected: number = 3;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for 34', t => {
    const num: number = 34;
    const expected: number = 5702887;

    const result: number = fibonacci(num);

    t.equal(parseInt(expected.toString()), result);
    t.end();
});

test('Test for negatives', t => {
    const num: number = -10;

    t.throws(() => {fibonacci(num)});
    t.end();
});

test('Test for not integer', t => {
    const num: number = 1.5;

    t.throws(() => {fibonacci(num)});
    t.end();
});
