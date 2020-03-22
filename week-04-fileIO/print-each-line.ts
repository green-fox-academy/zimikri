'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');
const FILE_PATH: string = 'data/my-file.txt'

function readFile(filePath: string): string {
  let fileContent: string = '';

  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    console.log(`Unable to read file: ${filePath}`);
    return '';
  }

  return fileContent;
}

function getLinesFromString(text: string) {
  return text.split('\n');
}

function printLines(filePath: string, ) {
  const fileContent: string = readFile(filePath);

  if (fileContent != '') {
    const lines: string[] = getLinesFromString(fileContent);
    lines.forEach((value) => {
      console.log(value); 
    });
  } 

}

printLines(FILE_PATH);

export{};