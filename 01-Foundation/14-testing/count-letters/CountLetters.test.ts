'use strict';

// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values 
// that shows how many occurrences there are.
// Create a test for that.

import test from "tape";
import CountLetters from'./CountLetters';

test("Empty string", t => {
    // Arrange
    const str: string = '';
    const expected: {[key: string]: number} = {};

    // Act
    const result: any = new CountLetters('').count();

    // Assert
    t.deepEqual(result, expected);
    t.end();
});

test("One letter string", t => {
    // Arrange
    const str: string = '';
    const expected: {[key: string]: number} = {x: 1};

    // Act
    const result: any = new CountLetters('x').count();

    // Assert
    t.deepEqual(result, expected);
    t.end();
});

test("Double letter string", t => {
    // Arrange
    const str: string = '';
    const expected: {[key: string]: number} = {x: 2};

    // Act
    const result: any = new CountLetters('xx').count();

    // Assert
    t.deepEqual(result, expected);
    t.end();
});

test("Different letters string", t => {
    // Arrange
    const str: string = '';
    const expected: {[key: string]: number} = {x: 1, y: 1};

    // Act
    const result: any = new CountLetters('yx').count();

    // Assert
    t.deepEqual(result, expected);
    t.end();
});

test("Different letters string with space", t => {
    // Arrange
    const str: string = '';
    const expected: {[key: string]: number} = {x: 1, 'y': 1, ' ': 3};

    // Act
    const result: any = new CountLetters(' y x ').count();

    // Assert
    t.deepEqual(result, expected);
    t.end();
});