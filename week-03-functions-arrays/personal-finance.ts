'use strict';

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
let spendings: number[] = [500, 1000, 1250, 175, 800, 120];

// Create an application which solves the following problems.
// How much did we spend?
function getTotal(amounts: number[]): number {
    let total: number = 0;
    amounts.forEach((value) => {
        total += value;
    });
    return total;
}
console.log(getTotal(spendings));

// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?