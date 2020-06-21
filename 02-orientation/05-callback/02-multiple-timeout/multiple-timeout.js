'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const fruits = {
    apple: 0,
    pear: 1000,
    melon: 3000,
    grapes: 5000,
};

function printFruits(obj) {
    Object.keys(obj).forEach((name) => {
        setTimeout(() => {console.log(name);}, obj[name]);
    });
}

printFruits(fruits);