'use strict'

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function writeBunnyEars(numOfBunnies: number, writedOutNumberOfBunnies: number = 0) {
    if (numOfBunnies == writedOutNumberOfBunnies) return;
    console.log(`${writedOutNumberOfBunnies + 1}. bunny has ${((numOfBunnies - writedOutNumberOfBunnies) % 2 == 1) ? 2 : 3} ears`);

    return writeBunnyEars(numOfBunnies,  writedOutNumberOfBunnies + 1);
}

writeBunnyEars(5);