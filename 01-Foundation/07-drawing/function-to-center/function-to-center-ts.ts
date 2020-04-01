'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

const CENTER: number[] = [canvas.width / 2, canvas.height / 2];

// Just to make it funny :)
function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function drawLineToCenter(posX: number, posY: number) {
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(CENTER[0], CENTER[1]);
    ctx.strokeStyle = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;
    ctx.stroke();
}

function fillTheCanvasLinesFromEdgeToCenter(step: number) {
    for (let posX = 0; posX <= canvas.width; posX = posX + step) {
        drawLineToCenter(posX, 0);
        drawLineToCenter(posX, canvas.height);
    }

    for (let posY = 0; posY <= canvas.height; posY = posY + step) {
        drawLineToCenter(0, posY);
        drawLineToCenter(canvas.width, posY);
    }
}

fillTheCanvasLinesFromEdgeToCenter(20);