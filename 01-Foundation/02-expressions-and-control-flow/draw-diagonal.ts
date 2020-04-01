'use strict';

let lineCount: number = 10;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineString: string = "";

for (let line = 1; line <= lineCount; line++) {
    for (let column = 1; column <= lineCount; column++) {
        if (line == 1 || line == lineCount || column == 1 || column == lineCount || line == column) {
            lineString += "%"; 
        }else{
            lineString += " "; 
        }
    }
    console.log(lineString);
    
    lineString = "";
}