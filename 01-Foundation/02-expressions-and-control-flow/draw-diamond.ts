'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let maxPlaceHolder: number = (lineCount - 1) / 2;
let placeHolder: string = "";
let stars: string = "";

for (let line = 1; line <= maxPlaceHolder; line++){
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

stars = "";
for (let starsIndex:number = 1; starsIndex <= lineCount; starsIndex++) {
    stars += '*';
}
console.log(stars);

for (let line = maxPlaceHolder; line >= 1; line--){
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