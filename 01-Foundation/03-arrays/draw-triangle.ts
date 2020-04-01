'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let output: string = '';

for (let index = 0; index < lineCount; index++) {
    output += '*';
    console.log(output);
}