'use strict';

export default function fibonacci(n: number): number {
    if (parseInt(Math.abs(n).toString()) != n) throw 'The number should be positive integer or 0';
    
    // Using Binet formula
    const fib: number = ((1 + Math.sqrt(5)) ** n - (1 - Math.sqrt(5)) ** n) / (Math.sqrt(5) * 2 ** n);
    return parseInt(fib.toString());
}
