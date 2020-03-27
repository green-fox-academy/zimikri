'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

let arr: number[] = [34, 12, 24, 9, 5];
let tmp: number;

function bubble (toSort: number[]): number[] {
    let shouldCheck: boolean = false;
    let countError: number = 0;
    do {
        for (let i = 0; i < toSort.length - 1; i++) {
            if (toSort[i] > toSort[i + 1]) {
                tmp = toSort[i];
                toSort[i] = toSort[i + 1];
                toSort[i + 1] = tmp;

                countError++;
            }
        }

        shouldCheck = (countError > 0);
        countError = 0;
    } while (shouldCheck)
    return toSort;
}

function advancedBubble (toSort: number[], desc: boolean = false): number[] {
    let shouldCheck: boolean = false;
    let countError: number = 0;
    let condition: boolean;
    do {
        for (let i = 0; i < toSort.length - 1; i++) {
            if (desc) {
                condition = (toSort[i] < toSort[i + 1]);
            }
            else {
                condition = (toSort[i] > toSort[i + 1]);
            }
            if (condition) {
                tmp = toSort[i];
                toSort[i] = toSort[i + 1];
                toSort[i + 1] = tmp;

                countError++;
            }
        }

        shouldCheck = (countError > 0);
        countError = 0;
    } while (shouldCheck)
    return toSort;
}

console.log(bubble(arr));
console.log(advancedBubble(arr, false));
console.log(advancedBubble(arr, true));