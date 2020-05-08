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
import Sum from'./Sum';

test('Empty list test', t => {
    //Arrange
    const arr1: number[] = [];
    const exp1: number = 0;
    
    // Act
    const result1: number = new Sum(arr1).calculateSum();

    // Assert
    t.equal(result1, exp1);
    t.end();
});

test('One element test', t => {
    //Arrange
    const arr1: number[] = [1];
    const exp1: number = 1;
    const arr2: number[] = [2];
    const exp2: number = 2;
    const arr3: number[] = [0];
    const exp3: number = 0;
    const arr4: number[] = [-3];
    const exp4: number = -3;

    // Act
    const result1: number = new Sum(arr1).calculateSum();
    const result2: number = new Sum(arr2).calculateSum();
    const result3: number = new Sum(arr3).calculateSum();
    const result4: number = new Sum(arr4).calculateSum();

    // Assert
    t.equal(result1, exp1);
    t.equal(result2, exp2);
    t.equal(result3, exp3);
    t.equal(result4, exp4);
    t.end();

});

test('Multiple element test', t => {
    //Arrange
    const arr1: number[] = [1,2];
    const exp1: number = 3;
    const arr2: number[] = [0,2];
    const exp2: number = 2;
    const arr3: number[] = [5, -3];
    const exp3: number = 2;
    const arr4: number[] = [-3, 5, -7, 0];
    const exp4: number = -5;

    // Act
    const result1: number = new Sum(arr1).calculateSum();
    const result2: number = new Sum(arr2).calculateSum();
    const result3: number = new Sum(arr3).calculateSum();
    const result4: number = new Sum(arr4).calculateSum();

    // Assert
    t.equal(result1, exp1);
    t.equal(result2, exp2);
    t.equal(result3, exp3);
    t.equal(result4, exp4);
    t.end();

});