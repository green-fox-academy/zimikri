'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(num: number, exponent: number): number {
    if (exponent == 1) return num;
    return num * powerN(num, exponent - 1);
}

console.log(powerN(2, 8));
