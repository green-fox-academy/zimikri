'use strict';

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120

let spendings: number[] = [500, 1000, 1250, 175, 800, 120];

// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

function getStat(amounts: number[]) {
    let totalAmount:number = spendings.reduce((total, element) => total + element);
    let maxAmount:number = spendings.reduce((max, element) => (max < element) ? element : max);
    let minAmount:number = spendings.reduce((min, element) => (min > element) ? element : min);
    let averageAmount:number = totalAmount / spendings.length;

    let respond = new Map([
        ['Total', totalAmount],
        ['Max', maxAmount],
        ['Min', minAmount],
        ['Average', averageAmount]
    ]);
    return respond;
}

console.log(getStat(spendings));


// console.log(getTotal(spendings));

// How much did we spend?
let totalAmount:number = spendings.reduce((total, element) => total + element);
console.log('Total:', totalAmount);


// Which was our greatest expense?
let maxAmount:number = spendings.reduce((max, element) => (max < element) ? element : max);
console.log('Max:', maxAmount);

// Which was our cheapest spending?
let minAmount:number = spendings.reduce((min, element) => (min > element) ? element : min);
console.log('Min:', minAmount);

// What was the average amount of our spendings?
let averageAmount:number = totalAmount / spendings.length;
console.log('Average:', averageAmount);