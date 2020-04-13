'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function add (num: number): number {
    if (num == 1) return 1;
    return num + add(num - 1);
}

console.log(add(4));
