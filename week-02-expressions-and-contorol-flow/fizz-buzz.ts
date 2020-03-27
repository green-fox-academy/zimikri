'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
for (let myNumber = 1; myNumber <= 100; myNumber++) {
    if (myNumber % 3 == 0 && myNumber % 5 == 0) {
        console.log('FizzBuzz');
    } else if (myNumber % 3 == 0) {
        console.log('Fizz');
    } else if (myNumber % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(myNumber);
    }
}