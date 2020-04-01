'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let maxPlaceHolder: number = lineCount - 1;
let placeHolder: string = "";
let stars: string = "";

for (let line = 1; line <= lineCount; line++){
    placeHolder = "";
    stars = "";

    for (let placeHolderIndex:number = maxPlaceHolder; placeHolderIndex >= line; placeHolderIndex--) {
        placeHolder += ' ';
    }

    for (let starsIndex:number = 1; starsIndex < line; starsIndex++) {
        stars += '*';
    }

    console.log(placeHolder + stars + '*' + stars + placeHolder);
    
}
