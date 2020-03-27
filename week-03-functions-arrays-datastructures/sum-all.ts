'use strict';

// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console

let numbers: number[] = [3, 4, 5, 6, 7];

const sum: number = numbers.reduce((prev, next) => {return prev + next});
console.log(sum);
