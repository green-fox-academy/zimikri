'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

let maxNum: number = -1;

function factorio(upTo: number): number {
    if (upTo < 0) {
        console.log('Csak pozitív számokon értelmezett a faktoriális!');
        return -1;
    }

    let factorial: number = 1;
    for (let i = 1; i <= upTo; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

console.log(factorio(maxNum));
