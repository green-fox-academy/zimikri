'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

const LINECOUNT: number = 10;
const LINE_WIDTH: number = 70;

// Just to make it funny :)
function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function getRandomPosX(lineWith: number): number {
    return Math.round(Math.random() * (canvas.width - lineWith));
}

function getRandomPosY(): number {
    return Math.round(Math.random() * canvas.height);
}

function drawHorizontalLine(posX: number, posY: number, lineWith: number = 50) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(posX + lineWith, posY);
    ctx.strokeStyle = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;
    ctx.stroke();
}

function drawHorizontalLines(numberOfLines: number, lineWidth: number) {
    for (let index = 0; index < numberOfLines; index++) {
        drawHorizontalLine(getRandomPosX(lineWidth), getRandomPosY(), lineWidth);
    }
}

drawHorizontalLines(LINECOUNT, LINE_WIDTH);
