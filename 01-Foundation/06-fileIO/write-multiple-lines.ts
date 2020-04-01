'use strict';

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

const fs = require('fs');
const FILE_PATH: string = 'data/my-file-multiple-lines.txt';
const LINE_TEXT: string = 'apple';
const LINE_COUNT: number = 5;

function writeFile(filePath: string, fileContent: string) {
    try {
        fs.writeFileSync(filePath, fileContent);
    } catch (e) {
        // No need error message
    }
}

function multipleLines(line: string, multiplier: number) {
    let result: string = '';
    line += '\n';

    for (let i = 1; i <= multiplier; i++) {
        result += line;  
    }

    return result;
}

function writeMultipleLinesToFile(filePath: string, line: string, counter: number) {
    const fileContent: string = multipleLines(line, counter);
    writeFile(filePath, fileContent);
}

writeMultipleLinesToFile(FILE_PATH, LINE_TEXT, LINE_COUNT);

export{};
