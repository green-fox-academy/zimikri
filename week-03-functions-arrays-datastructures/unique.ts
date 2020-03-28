'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

// const ARRAY_TO_CHECK: number[] = [11, 1, 61, 34, 11, 52, 1, 34]; // Just to test sorting
const ARRAY_TO_CHECK: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
const SORT: boolean = true;

function uniqueFor(myArray: number[], sortIt: boolean = false): number[] {
    const tmpArray: number[] = (sortIt) ? [...myArray].sort((a, b) => {return a - b}) : [...myArray];
    let uniArray: number[] = []; 
    for (let index = 0; index < tmpArray.length; index++) {
        if (uniArray.indexOf(tmpArray[index]) == -1) uniArray.push(tmpArray[index]);
    }
    return uniArray;
}

function uniqueFilter(globalArray: number[], sortIt: boolean = false): number[] {
    let myArray: number[] = (sortIt) ? [...globalArray].sort((a, b) => {return a - b}) : globalArray;

    return myArray.filter((value, key, array) => {return array.indexOf(value) == key});
}
//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))

console.log(uniqueFor(ARRAY_TO_CHECK, SORT))
console.log(uniqueFilter(ARRAY_TO_CHECK, SORT))

//  should print: `[1, 11, 34, 52, 61]`

export{}

