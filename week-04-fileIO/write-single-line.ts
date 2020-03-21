'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

function writeFile(filePath: string, fileContent: string) {
    try {
        fs.writeFileSync(filePath, fileContent);
    } catch (e) {
        console.log(`Unable to write file: ${filePath}`);
    }
}

// Just to be sure it will be a single line
function writeSingleLineToFile(filePath: string, text: string) {
    writeFile(filePath, text.replace(/\n+/g, ' '));
}

writeSingleLineToFile('data/my-file-single-line.txt', 'Zimay\nKrisztián');

export{};
