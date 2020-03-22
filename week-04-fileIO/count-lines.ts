'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
const filePath: string = 'data/my-file.txt'

function readFile(filePath: string): string {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } finally {
        return fileContent;
    }
}

function getLinesFromString(text: string) {
    return text.split('\n');
}

function countNumberOfLinesInFile(filePath: string) {
    const fileContent: string = readFile(filePath);
    
    if (fileContent != '') {
        return getLinesFromString(fileContent).length;
    } else {
        return 0;
    }
}

console.log(countNumberOfLinesInFile(filePath));

export{};