'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let maxNum: number = 10;

function sum(upTo: number): number {
    let summary: number = 0;
    for (let i = 1; i <= upTo; i++) {
        summary += i;
    }

    return summary;
}

console.log(sum(maxNum));
