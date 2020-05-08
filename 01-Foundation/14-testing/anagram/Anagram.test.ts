'use strict';

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

import test from "tape";
import Anagram from'./Anagram';

test('different length words', t => {
    //Arrange
    const strA: string = 'aaaa';
    const strB: string = 'aaa';
    
    // Act
    const result1: boolean = new Anagram(strA, strB).check();

    // Assert
    t.false(result1);
    t.end();
});

test('None anagram words', t => {
    //Arrange
    const strA: string = 'neve';
    const strB: string = 'neme';
    
    // Act
    const result1: boolean = new Anagram(strA, strB).check();

    // Assert
    t.false(result1);
    t.end();
});

test('Same words', t => {
    //Arrange
    const strA: string = 'Apple';
    const strB: string = strA;
    
    // Act
    const result1: boolean = new Anagram(strA, strB).check();

    // Assert
    t.true(result1);
    t.end();
});

test('Empty strings', t => {
    //Arrange
    const strA: string = '';
    const strB: string = '';
    
    // Act
    const result1: boolean = new Anagram(strA, strB).check();

    // Assert
    t.true(result1);
    t.end();
});

test('Anagram words', t => {
    //Arrange
    const strA: string = 'aludni';
    const strB: string = 'indula';
    
    // Act
    const result1: boolean = new Anagram(strA, strB).check();

    // Assert
    t.true(result1);
    t.end();
});

