'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string[] {
    let paired: string[] = [];

    for (let index = 0; (index < girls.length || index < boys.length); index++) {
        if (typeof girls[index] != 'undefined') paired.push(girls[index]);
        if (typeof boys[index] != 'undefined') paired.push(boys[index]);
    }

    return paired;
}

console.log(makingMatches(girls, boys));

export = makingMatches;