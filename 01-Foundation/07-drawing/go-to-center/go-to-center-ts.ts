'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

const LINECOUNT: number = 10;

drawSomeLinesToCenter(LINECOUNT);

function drawSomeLinesToCenter(numberOfLines: number) {
    for (let index = 0; index < numberOfLines; index++) {
        drawLineToCenter(getRandomPosX(), getRandomPosY());
    }
}

function drawLineToCenter(posX: number, posY: number) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = getRandomRGBcolor();
    ctx.stroke();
}

function getRandomPosX(): number {
    return Math.round(Math.random() * canvas.width);
}

function getRandomPosY(): number {
    return Math.round(Math.random() * canvas.height);
}

// Just to make it funny :)
function getRandomRGBcolor(): string {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
