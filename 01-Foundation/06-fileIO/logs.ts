'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
const FILE_PATH: string = 'data/log.txt';
const LINE_SEPARATOR = /\r?\n/;
const COLUMN_SEPARATOR: string = "   "
const IP_INDEX: number = 1;
const REQUEST_INDEX: number = 2;

function readFile(filePath: string): string {
    let fileContent: string = '';

    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    }

    return fileContent;
}

function getLinesFromString(text: string, lineSeparator): string[] {
    return text.split(lineSeparator);
}

function getDataFromLines(lines: string[], columnSeparator: string, column: number): string[] {
    let data: string[] = [];

    lines.forEach((value, index) => {
        data.push(value.split(columnSeparator)[column]);
    });
    
    return data;
}

function getUniqueIPs(filePath: string, lineSeparator, columnSeparator: string, ipIndex: number): string[] {
    const fileContent: string = readFile(filePath);
    const lines: string[] = getLinesFromString(fileContent, lineSeparator);
    const ips: string[] = getDataFromLines(lines, columnSeparator, ipIndex);

    return ips.filter((value, index, allIps) => {return allIps.indexOf(value) === index;});    
}

function getPostRequestRatio(filePath: string, lineSeparator, columnSeparator: string, requestIndex: number): number {
    const fileContent: string = readFile(filePath);
    const lines: string[] = getLinesFromString(fileContent, lineSeparator);
    const requests: string[] = getDataFromLines(lines, columnSeparator, requestIndex);
    const getCount: number = requests.filter((value) => {return value.indexOf('GET') != -1;}).length;
    const postCount: number = requests.filter((value) => {return value.indexOf('POST') != -1;}).length;

    return getCount / postCount;
}

console.log(getUniqueIPs(FILE_PATH, LINE_SEPARATOR, COLUMN_SEPARATOR, IP_INDEX));
console.log(`\nGET / POST request ratio: ${getPostRequestRatio(FILE_PATH, LINE_SEPARATOR, COLUMN_SEPARATOR, REQUEST_INDEX)}\n`);

export{};