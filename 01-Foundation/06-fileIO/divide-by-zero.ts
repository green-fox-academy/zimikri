'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

const NUM_TO_DIVIDE: number = 5;

function divideByTen(num: number): any {
    try {
        if (num === 0) throw new SyntaxError("fail");
        return num / 10;
    } catch (error) {
        return error.message;
    }
}

console.log(divideByTen(NUM_TO_DIVIDE));

export{};