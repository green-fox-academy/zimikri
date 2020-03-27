'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const lineNum: number = 6;
let matrix: any[] = [];

for (let i = 0; i < lineNum; i++) {
    matrix[i] = [];
    for (let j = 0; j < lineNum; j++) {
        matrix[i][j] = ((i + j) == (lineNum - 1)) ? 1 : 0;
    }
    console.log(matrix[i].join(' '));
}

// console.log(matrix);
