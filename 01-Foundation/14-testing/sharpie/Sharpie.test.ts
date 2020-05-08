'use strict'

import test from 'tape';
import Sharpie from'./Sharpie';

test('Color', t => {
    const sharpie: Sharpie = new Sharpie('blue', 10, 95);

    t.equal(sharpie.color, 'blue');
    t.end();
});

test('Width', t => {
    const sharpie: Sharpie = new Sharpie('blue', 10, 95);

    t.equal(sharpie.width, 10);
    t.end();
});

test('inkAmount', t => {
    const sharpie: Sharpie = new Sharpie('blue', 10, 95);

    t.equal(sharpie.inkAmount, 95);
    t.end();
});

test('inkAmount with default value', t => {
    const sharpie: Sharpie = new Sharpie('blue', 10);

    t.equal(sharpie.inkAmount, 100);
    t.end();
});

test('inkAmount with default value after use', t => {
    const sharpie: Sharpie = new Sharpie('blue', 10);
    sharpie.use();
    sharpie.use();

    t.equal(sharpie.inkAmount, 98);
    t.end();
});
