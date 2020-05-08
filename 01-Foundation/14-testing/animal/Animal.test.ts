'use strict'

import test from 'tape';
import Animal from './Animal';

test('Default hunger', t =>{
    const animal: Animal = new Animal();

    t.equal(animal.hunger, 50);
    t.end();
});

test('Default thirst', t =>{
    const animal: Animal = new Animal();

    t.equal(animal.thirst, 50);
    t.end();
});

test('Setting hunger', t =>{
    const animal: Animal = new Animal(40);

    t.equal(animal.hunger, 40);
    t.end();
});

test('Setting thirst', t =>{
    const animal: Animal = new Animal(40, 60);

    t.equal(animal.thirst, 60);
    t.end();
});

// Methods
test('eat', t =>{
    const animal: Animal = new Animal(40, 60);

    animal.eat();

    t.equal(animal.hunger, 39);
    t.end();
});

test('drink', t =>{
    const animal: Animal = new Animal(40, 60);

    animal.drink();

    t.equal(animal.thirst, 59);
    t.end();
});

test('play', t =>{
    const animal: Animal = new Animal(40, 60);

    animal.play();

    t.equal(animal.hunger, 41);
    t.equal(animal.thirst, 61);
    t.end();
});