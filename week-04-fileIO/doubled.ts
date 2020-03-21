'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

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
    return line
            .split('')
            .filter((letter, letterIndex) => {return (letterIndex % 2 == 0)})
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

const filePath: string = 'data/duplicated-chars.txt'
console.log(decrypt(filePath));

export{};