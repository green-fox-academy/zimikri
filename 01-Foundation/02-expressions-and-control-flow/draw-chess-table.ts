'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineString: string = "";

for (let line = 1; line <= 8; line++) {
    for (let column = 1; column <= 8; column++) {
        if ((line % 2) ==  (column % 2)) {
            lineString += "%"; 
        }else{
            lineString += " "; 
        }
    }
    console.log(lineString);
    
    lineString = "";
}