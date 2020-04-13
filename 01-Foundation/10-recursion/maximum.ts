'use strict'

// Write a function that finds the largest element of an array using recursion.

function maxFinder(arr: number[], max: number = 0): number[] {
    if (arr.length == 1) {
        return (arr[0] > max) ? arr : [max];
    }

    max = (arr[0] > max) ? arr[0] : max;
    arr.shift();

    return maxFinder(arr, max);
}

console.log(maxFinder([70, 1000, 12, 34, 125, 2]).join(''));
