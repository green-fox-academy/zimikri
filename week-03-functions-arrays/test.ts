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

var re = /apples/i; 
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log(str.search(re)); 
} 

console.log(str.substring(2,3));

var str1 = "This is string one"; 
var str2 = "This is string two"; 
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)

let mt:string = "text"
console.log(mt.length);