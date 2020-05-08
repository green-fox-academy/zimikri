'use strict';

// Create a class with one method (eg. getApple()) that returns a string (eg. 'apple')
// Create a test for that:
// Create a test method
// Instantiate an Object from your class in the method
// Use the t.equal()
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding again

import test from 'tape';
import Apple from './Apple';

test("Apple test", t => {
    // Arrange
    const string1: string = 'apple';
    const expected1: string = 'apple';
    const string2: string = 'pear';
    const expected2: string = 'pear';

    // Act
    const result1: string = new Apple(string1).getApple();
    const result2: string = new Apple(string2).getApple();

    // Assert
    t.equal(result1, expected1);
    t.equal(result2, expected2);
    t.end();
});