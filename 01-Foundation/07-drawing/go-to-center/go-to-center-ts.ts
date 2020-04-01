'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

const CENTER: number[] = [canvas.width / 2, canvas.height / 2];
const LINECOUNT: number = 10;

// Just to make it funny :)
function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function getRandomPosX(): number {
    return Math.round(Math.random() * canvas.width);
}

function getRandomPosY(): number {
    return Math.round(Math.random() * canvas.height);
}

function drawLineToCenter(posX: number, posY: number) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(CENTER[0], CENTER[1]);
    ctx.strokeStyle = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;
    ctx.stroke();
}

function drawSomeLinesToCenter(numberOfLines: number) {
    for (let index = 0; index < numberOfLines; index++) {
        drawLineToCenter(getRandomPosX(), getRandomPosY());
    }
}

drawSomeLinesToCenter(LINECOUNT);
