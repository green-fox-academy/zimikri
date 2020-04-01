'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawFilledSquareToCenter(boxSize: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - boxSize / 2, canvas.height / 2 - boxSize / 2, boxSize, boxSize);
}

function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function fillCanvasWithColoredSquares(boxSize: number) {
    for (let posX = 0; posX < canvas.width; posX += boxSize) {
        for (let posY = 0; posY < canvas.height; posY += boxSize) {
            ctx.fillStyle = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;
            ctx.fillRect(posX, posY, boxSize, boxSize);
        }
        
    }
}

// drawFilledSquareToCenter(100, 'red');
fillCanvasWithColoredSquares(50);