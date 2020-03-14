'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// If need the values
function subint(value: number, arr: number[]): number[] {
    let newArr: number[] = [];
    let tempitem: number;
    
    newArr = arr.filter(function (item) {
        tempitem = item;
        do {
            if ((tempitem % 10) == value) return true;
            tempitem = tempitem / 10;
        } while (tempitem >= 1)
        return false;
    });

    return newArr;
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[1, 11, 61]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'


// If need the indexes
function subintIndex(value: number, arr: number[]): number[] {
    let indexArr: number[] = [];
    let tempitem: number;
    
    arr.forEach(function (item, index) {
        tempitem = item;
        do {
            if ((tempitem % 10) == value) indexArr.push(index);
            tempitem = tempitem / 10;
        } while (tempitem >= 1)
    });

    return indexArr;
}

// Example
console.log(subintIndex(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subintIndex(9, [1, 11, 34, 52, 61]));
// should print: '[]'
