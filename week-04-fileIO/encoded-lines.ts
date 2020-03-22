'use strict';

// Create a method that decrypts encoded-lines.txt

const fs = require('fs');
const FILE_PATH: string = 'data/encoded-lines.txt'

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

function decryptLine(line:string): string {

    return  line
        .split('')
        .map(value => (value == ' ') ? ' ' : String.fromCharCode(value.codePointAt(0) - 1))
        .join('');
}

function decryptLines(lines: string[]): string[] {
    lines.forEach((value, index) => {
        lines[index] = decryptLine(value);
    });

    return lines;
}

function decrypt(filePath: string) {
    const fileContent: string = readFile(filePath);
    const lines: string[] = getLinesFromString(fileContent);
    const decryptedLines: string[] = decryptLines(lines);

    return decryptedLines.join('\n');
}

console.log(`\n${decrypt(FILE_PATH)}\n`);

export{};