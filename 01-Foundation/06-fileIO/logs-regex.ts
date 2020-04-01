'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
const FILE_PATH: string = 'data/log.txt';
const IP_REGEX = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g
const GET_REGEX = /   GET /g;
const POST_REGEX = /   POST /g;

function readFile(filePath: string): string {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    }

    return fileContent;
}

function getMatchesInFile(fileContent: string, regex): string[] {
    return fileContent.match(regex);
}

function getUniqueIPs(filePath: string, ipRegex): string[] {
    const fileContent: string = readFile(filePath);
    const ips: string[] = getMatchesInFile(fileContent, ipRegex);

    return ips.filter((value, index, allIps) => allIps.indexOf(value) === index);    
}

function getPostRequestRatio(filePath: string, getRegex, postRegex): number {
    const fileContent: string = readFile(filePath);
    const getCount: number = getMatchesInFile(fileContent, getRegex).length;
    const postCount: number = getMatchesInFile(fileContent, postRegex).length;

    return getCount / postCount;
}

console.log(getUniqueIPs(FILE_PATH, IP_REGEX));
console.log(`\nGET / POST request ratio: ${getPostRequestRatio(FILE_PATH, GET_REGEX, POST_REGEX)}\n`);

export{};