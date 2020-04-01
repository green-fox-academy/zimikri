'use strict';

// Create a method that find the 5 most common lottery numbers in lottery.csv

const fs = require('fs');
const FILE_PATH: string = 'data/lottery.csv';
const FILE_PATH_2020: string = 'data/lottery-2020.csv';
const REPLACE_REGEX = /[^\n]+;(\d+);(\d+);(\d+);(\d+);(\d+)\s*/g
const NUM_COUNT: number = 5;

function readFile(filePath: string): string {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    }

    return fileContent;
}

function getMatchesInFile(fileContent: string, regex): number[] {
    return fileContent.replace(regex, '-$1-$2-$3-$4-$5').split('-').splice(1).map(n => parseInt(n));
}

function getLottoNumbersMap(allNumbers: number[]) {
    let lottoNumbers = new Map<number, number>();

    allNumbers.forEach(num => {
        if (lottoNumbers.has(num)) {
            lottoNumbers.set(num, lottoNumbers.get(num) + 1);
        } else {
            lottoNumbers.set(num, 1);
        }
    });

    return lottoNumbers;
}

function sortNumbersByCommon(lottoNumbers: number[], lottoNumberCounts: number[]): number[][] {
    let hasError: boolean;
    do {
        hasError = false;
        for (let i = 0; i < lottoNumberCounts.length-1; i++) {
            if (lottoNumberCounts[i] < lottoNumberCounts[i + 1]) {
                [lottoNumberCounts[i], lottoNumberCounts[i + 1]] = [lottoNumberCounts[i + 1], lottoNumberCounts[i]];
                [lottoNumbers[i], lottoNumbers[i + 1]] = [lottoNumbers[i + 1], lottoNumbers[i]];
                hasError = true;
            }
        }
    } while (hasError);
    
    return [lottoNumbers, lottoNumberCounts];
}

function getTopCommonNumbers(sorted: number[][], numCount: number): string {
    while (sorted[1][numCount - 1] == sorted[1][numCount]) {
        numCount++;
    }
    return sorted[0].slice(0, numCount).join(', ');
}

function getmostCommonLotteryNumbers(filePath: string, numRegex, numCount: number): string {
    const fileContent: string = readFile(filePath);
    const allNumbers: number[] = getMatchesInFile(fileContent, numRegex);
    const allNumbersMap = getLottoNumbersMap(allNumbers);
    const lottoNumbers: number[] = [...allNumbersMap.keys()];
    const lottoNumberCounts: number[] = [...allNumbersMap.values()];
    const sorted: number[][] = sortNumbersByCommon(lottoNumbers, lottoNumberCounts);
    const top: string = getTopCommonNumbers(sorted, numCount);

    return top;
}

console.log(`\nThe ${NUM_COUNT} most common lottery numbers in ${FILE_PATH}: ${getmostCommonLotteryNumbers(FILE_PATH, REPLACE_REGEX, NUM_COUNT)}`);
console.log(`The ${NUM_COUNT} most common lottery numbers in ${FILE_PATH_2020}: ${getmostCommonLotteryNumbers(FILE_PATH_2020, REPLACE_REGEX, NUM_COUNT)}`);
console.log(`\n*** Maybe you see more than ${NUM_COUNT} number, because the last ones has the same hit.\n`);

export{};