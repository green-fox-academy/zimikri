'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
const input: number = 5;
let sum: number = 0;

for (let num = 1; num <= 5; num++){
    sum = sum + num;
}

console.log(`Sum: ${sum}`);
console.log(`Average: ${sum / input}`);

export{}