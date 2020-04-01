'use strict';

const fs = require('fs');

function readFile(filePath: string): string {
    let fileContent: string = '';

    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    }

    return fileContent;
}

function writeFile(filePath: string, fileContent: string) {
    try {
        fs.writeFileSync(filePath, fileContent);
        console.log('File write successfull...');
    } catch (e) {
        console.log(`Unable to write file: ${filePath}`);
    }
}

export{};