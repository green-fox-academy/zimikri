'use strict';

// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
    let max: number = (a < b) ? b : a;

    return (max < c) ? c : max;
};

export function median(pool: number[]): number {
    const sortedPool = sortPool(pool);
    if (sortedPool.length % 2 == 1) {
        return sortedPool[Math.floor((sortedPool.length - 1) / 2)];
    }

    return (sortedPool[Math.floor((sortedPool.length - 1) / 2)] + sortedPool[Math.round((sortedPool.length - 1) / 2)]) / 2;
}

function sortPool(pool: number[]): number[] {
    let needSort: boolean;
    do {
        needSort = false;
        for (let i = 0; i < pool.length - 1; i++) {
            if (pool[i] > pool[i + 1]) {
                [pool[i], pool[i + 1]] = [pool[i + 1], pool[i]];
                needSort = true
            }
        }
    } while (needSort)

    return pool;
}

export function isVowel(character: string): boolean {
    return ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ö', 'ú', 'ü', 'ő', 'ű'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
    return hungarian.replace(/([aeiouáéíóöúüőű])/g, '$1v$1').replace(/([AEIOUÁÉÍÓÖÚÜŐŰ])/g, '$1V$1');
}
