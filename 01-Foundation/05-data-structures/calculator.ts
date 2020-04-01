'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2); // Just a helper for you to get started

function calculator(args: any[]) {
    if (args.length != 3) {
        console.log('The caculator needs 3 arguments!');
        return;
    }

    if (parseInt(args[1]).toString() != args[1] || parseInt(args[2]).toString() != args[2]) {
        console.log('The second and third parameter should be number!');
        return;
    } else {
        args[1] = parseInt(args[1]);
        args[2] = parseInt(args[2]);
    }

    let result: number;
    switch (args[0]) {
        case '+':
            result = args[1] + args[2];
            break;
        case '-':
            result = args[1] - args[2];
            break;
        // It works only with escaped: ts-node calculator.ts \* 5 6
        case '*':
            result = args[1] * args[2];
            break;
        case '/':
            result = args[1] / args[2];
            break;
        case '%':
            result = args[1] % args[2];
            break;
                                            
        default:
            console.log('Unknown operation!');
            return;
            break;
    }

    console.log(`${args[1]} ${args[0]} ${args[2]} = ${result}`);
}

calculator(args);
// console.log('Input params are', args);
console.log('Goodbye!');

export = calculator;