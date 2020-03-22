'use strict';

// Create a method that decrypts reversed-order.txt

const fs = require('fs');
const FILE_PATH: string = 'data/reversed-order.txt'

function readFile(filePath: string): string {
    let fileContent: string = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    } finally {
        return fileContent;
    }
}

function getLinesFromString(text: string) {
    return text.split('\n');
}

function decryptLines(lines: string[]): string[] {
    let dLine: string[] = [];
    lines.forEach((value, index) => dLine.unshift(value));

    return dLine;
}

function decrypt(filePath: string) {
    const fileContent: string = readFile(filePath);
    const lines: string[] = getLinesFromString(fileContent);
    const decryptedLines: string[] = decryptLines(lines);

    return decryptedLines.join('\n');
}

console.log(decrypt(FILE_PATH));

export{};