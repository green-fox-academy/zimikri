'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

const RECTANGLES_COUNT: number = 3;
const RECTANGLES_SIZE: number = 50;

drawSomeRectangles(RECTANGLES_COUNT, RECTANGLES_SIZE);

function drawSomeRectangles(numberOfRectangles: number, size: number) {
    let posX: number;
    let posY: number;

    for (let index = 0; index < numberOfRectangles; index++) {
        posX = getRandomPosX(size);
        posY = getRandomPosY(size);
        drawRandomColorRectangle(posX, posY, size);
    }
}

function drawRandomColorRectangle(posX, posY, size: number) {
    let color: string = getRandomRGBcolor();

    ctx.strokeStyle = color;
    ctx.strokeRect(posX, posY, size, size);
}

function getRandomPosX(width: number): number {
    return Math.round(Math.random() * (canvas.width - width));
}

function getRandomPosY(height: number): number {
    return Math.round(Math.random() * (canvas.height - height));
}

// Just to make it funny :)
function getRandomRGBcolor(): string {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}