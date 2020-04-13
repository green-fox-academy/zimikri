'use strict'

// Create a function with recursion which gives back the original (integer) number



function whichNumber(num: number): number {
    if (num == 0) return 0;
    const signMultiplier: number = (num < 0) ? -1 : 1;

    if (num == signMultiplier * 1) return num;
    return signMultiplier * 1 + whichNumber(num - signMultiplier * 1)
}

console.log(whichNumber(-125));
