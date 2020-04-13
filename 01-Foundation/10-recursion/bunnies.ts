'use strict'

// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function countBunnyEars(numOfBunnies: number, earPerBunnie: number = 2): number {
    if (numOfBunnies == 1) return countEars(earPerBunnie);
    return countEars(earPerBunnie) + countBunnyEars(numOfBunnies - 1, earPerBunnie);
}

function countEars(numOfEars: number): number {
    if (numOfEars == 1) return 1;
    return 1 + countEars(numOfEars - 1);
}

console.log(countBunnyEars(14));
