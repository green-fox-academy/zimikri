'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(myArray, sortIt = false): number[] {

    if (sortIt) {
        myArray = myArray.sort(function (a, b) {
            return a - b;
        });
    }

    let uniArray: number[] = []; 
    for (let index = 0; index < myArray.length; index++) {
        if (uniArray.indexOf(myArray[index]) == -1) uniArray.push(myArray[index]);
    }
    return uniArray;
}

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))

console.log(unique([11, 1, 61, 34, 11, 52, 1, 34], true))

//  should print: `[1, 11, 34, 52, 61]`


