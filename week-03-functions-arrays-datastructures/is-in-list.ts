'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

const listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
const listToCheck: number[] = [4, 10, 12, 16];

function checkNums(listOfNumbers: number[], listToCheck: number[]): boolean {
    for (let checkNum of listToCheck) {
        if (listOfNumbers.indexOf(checkNum) == -1) {
            return false;
        }
    }

    return true;
}

console.log(checkNums(listOfNumbers, listToCheck));

export = checkNums;