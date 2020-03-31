'use strict';
// Write a simple program to check if a given number is an armstrong number. 
// The program should ask for a number. 
// E.g. if we type 371, the program should print out: The 371 is an Armstrong number.

const NUMBERT_TO_CHECK: number = 371;

function checkIfArmstrongNumber(numberToCheck: number) {
    const numArray: number[] = numberToCheck.toString().split('').map(value => parseInt(value));
    let armstrongSum: number = 0;

    numArray.forEach((value, index, arr) => {
        armstrongSum += Math.pow(value, arr.length);
    });
    
    console.log(`The ${numberToCheck} is ${(numberToCheck == armstrongSum) ? '' : 'not '}an Armstrong number.`);
}

checkIfArmstrongNumber(NUMBERT_TO_CHECK);