'use strict';

// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/ig;
const myArray = myRe.exec('cdbBdbsbz');

console.log(myArray);
console.log(myArray.index);


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
console.log();


let arr: string[] = ["orange", "mango", "banana", "sugar", "tea"]; 
let newArr: string[];
newArr = arr.splice(2, 2, "water");
console.log(arr);
console.log(newArr);


let num: number[] = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
}); 

console.log(num.map((value, index) => {return value * index}));


let passed: number[] = [12, 5, 8, 130, 44];
console.log(passed.filter((value) => {return (value > 12)}));
