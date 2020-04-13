'use strict'

// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
// Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.

const accu: Map<number, number> = new Map();
let i: number = 1;
function fibonacci(num: number): number {
    if (num <= 1) return num;

    if (accu.get(num - 2) == undefined) accu.set(num - 2, fibonacci(num - 2));
    if (accu.get(num - 1) == undefined) accu.set(num - 1, fibonacci(num - 1));

    return accu.get(num - 2) + accu.get(num - 1);
}

console.log(fibonacci(70));
