'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list: number[]): string {
    if (list.indexOf(7) != -1) {
        return 'Hoorray';
    } 

    return 'Noooooo';
}

function containsSeven2(list: number[]): string {
    if (list.filter((value) => {return value == 7}).length > 0) {
        return 'Hoorray';
    } 

    return 'Noooooo';
}

function containsSeven3(list: number[]): string {
    if (list.some((value) => {return value == 7})) {
        return 'Hoorray';
    } 

    return 'Noooooo';
}

function containsSeven4(list: number[]): string {
    const reduced: number = list.reduce((sum, value) => {return sum + ((value == 7) ? 1 : 0)});

    if (reduced != list[0] || reduced == 7) { // sum gets the first value at the begining and iterates only from index=1
        return 'Hoorray';
    } 

    return 'Noooooo';
}


function containsSeven5(list: number[]): string {
    let response: string = 'Noooooo';

    for (let value of list) {
        if (value == 7) {
            response = 'Hoorray';
            break;
        }
    }

    return response;
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
console.log(containsSeven2(numbers));
console.log(containsSeven3(numbers));
console.log(containsSeven4(numbers));
console.log(containsSeven5(numbers));

export = containsSeven;