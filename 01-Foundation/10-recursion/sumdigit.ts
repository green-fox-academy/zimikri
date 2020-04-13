'use strict'

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumdigit(num: number): number {
    if (num < 10) return num;
    return Math.floor(num % 10 + sumdigit(Math.floor(num / 10)));
}

console.log(sumdigit(126));
