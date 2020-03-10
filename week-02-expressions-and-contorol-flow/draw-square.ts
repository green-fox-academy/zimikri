'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

//V1
let horizontalBorder: string = '';
for (let index = 0; index < lineCount; index++) {
    horizontalBorder += '%';
}

let innerLine: string = '%';
for (let index = 0; index < (lineCount - 2); index++) {
    innerLine += ' ';
}
innerLine += '%';

console.log(horizontalBorder);

for (let index = 0; index < (lineCount - 2); index++) {
    console.log(innerLine);
}

console.log(horizontalBorder);

console.log();console.log();console.log();


// V2.
let lineString: string = "";
for (let line = 1; line <= lineCount; line++) {
    for (let column = 1; column <= lineCount; column++) {
        if (line == 1 || line == lineCount || column == 1 || column == lineCount) {
            lineString += "%"; 
        }else{
            lineString += " "; 
        }
        
    }
    console.log(lineString);
    
    lineString = "";
}