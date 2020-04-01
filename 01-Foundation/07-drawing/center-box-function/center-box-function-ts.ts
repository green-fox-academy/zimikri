'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

const SQUARECOUNT: number = 5;

// Just to make it funny :)
function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function getRandomSquareSize(): number {
    const maxSize: number = (canvas.width < canvas.height) ? canvas.width : canvas.height;
    return Math.round(Math.random() * maxSize);
}

function drawSquareToCenter(boxSize: number) {
    ctx.strokeStyle = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;
    ctx.strokeRect(canvas.width / 2 - boxSize / 2, canvas.height / 2 - boxSize / 2, boxSize, boxSize);
}

function drawSomeSquareToCenter(squareCount: number) {
    for (let index = 0; index < squareCount; index++) {
        drawSquareToCenter(getRandomSquareSize());
    }
}

drawSomeSquareToCenter(SQUARECOUNT);