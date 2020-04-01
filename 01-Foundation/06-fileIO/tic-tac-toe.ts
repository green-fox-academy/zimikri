'use strict';

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');
const WIN_O_FILE: string = 'data/win-o.txt';
const WIN_X_FILE: string = 'data/win-x.txt';
const DRAW_FILE: string = 'data/draw.txt';
const LINE_SEPARATOR = /\r?\n/;

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

function getGameMatrix(fileContent: string, lineSeparator): string[][] {
    const lines: string[] = getLinesFromString(fileContent, lineSeparator);
    const gameMatrix: string [][] = lines.map((i: string) => i.split(''));

    return gameMatrix;
}

function rowCompleted(row: string[]): string {
    return (row.length == row.filter((value, index, arr) => {return value == arr[0]}).length) ? row[0] : '';
}

function hasRowCompleted(gameMatrix: string[][]): string {
    let winner: string = '';
    for (let rowIndex = 0; rowIndex < gameMatrix.length; rowIndex++) {
        winner = rowCompleted(gameMatrix[rowIndex]);
        if (winner != '') return winner;
    }

    return winner;
}

function columnCompleted(gameMatrix: string[][], columnIndex: number): string {
    const optionalWinner: string = gameMatrix[0][columnIndex];
    for (let rowIndex = 1; rowIndex < gameMatrix.length; rowIndex++) {
        if (gameMatrix[rowIndex][columnIndex] != optionalWinner) return '';
    }

    return optionalWinner;
}

function hasColumnCompleted(gameMatrix: string[][]): string {
    let winner: string = '';
    for (let columnIndex = 0; columnIndex < gameMatrix[0].length; columnIndex++) {
        winner = columnCompleted(gameMatrix, columnIndex);
        if (winner != '') return winner;
    }

    return winner;
}

function hasDiagonalCompleted(gameMatrix: string[][]): string {
    const ltrOptionalWinner: string = gameMatrix[0][0];
    const rtlOptionalWinner: string = gameMatrix[gameMatrix.length-1][0];
    let ltrWinner: string = ltrOptionalWinner;
    let rtlWinner: string = rtlOptionalWinner;

    for (let i = 0; i < gameMatrix.length; i++) {
        ltrWinner = (gameMatrix[i][i] == ltrOptionalWinner) ? ltrWinner : '';
        rtlWinner = (gameMatrix[i][gameMatrix.length - i] == rtlOptionalWinner) ? rtlWinner : '';
        if (ltrWinner == '' && rtlWinner == '') return '';
    }

    return (ltrWinner != '') ? ltrWinner : rtlWinner;
}

function getWinner(gameMatrix: string [][]): string {
    const columnWinner: string = hasColumnCompleted(gameMatrix);
    if (columnWinner != '') return columnWinner;

    const rowWinner: string = hasRowCompleted(gameMatrix);
    if (rowWinner != '') return rowWinner;

    const diagonalWinner: string = hasDiagonalCompleted(gameMatrix);
    if (diagonalWinner != '') return diagonalWinner;

    return 'Draw';
}

function ticTacResult(filePath: string, lineSeparator = LINE_SEPARATOR) {
    const fileContent: string = readFile(filePath);
    const gameMatrix: string[][] = getGameMatrix(fileContent, lineSeparator);
    const winner: string = getWinner(gameMatrix);

    return winner;
}

console.log('Should print "O":', ticTacResult(WIN_O_FILE))
console.log('Should print "X":', ticTacResult(WIN_X_FILE))
console.log('Should print "Draw":', ticTacResult(DRAW_FILE))

export{};