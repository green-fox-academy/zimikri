'use strict'

// Find the greatest common divisor of two numbers using recursion.

// euklideszi algoritmus
function lnko (a: number, b: number): number {
    if (a == b) return a;
    if (a < b) return lnko(b, a);

    return (a % b == 0) ? b : lnko(b, a % b);
}

console.log(lnko(120, 560));
