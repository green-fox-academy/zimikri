'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7];

console.log('With built in func');
console.log(numbers.reverse());

numbers = [3, 4, 5, 6, 7];
let temp: number[] = [];

numbers.forEach( (item) => {temp.unshift(item);});



console.log();
console.log('With loop V1:');
console.log(temp);

temp = [];
for (let i = 0; i < numbers.length; i++) {
    temp[i] = numbers[numbers.length-1-i];
}

console.log('With loop V2:');
console.log(temp);
