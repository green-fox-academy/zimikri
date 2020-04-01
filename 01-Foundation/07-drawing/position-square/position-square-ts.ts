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

function getRandomPosX(): number {
    return Math.round(Math.random() * (canvas.width - RECTANGLES_SIZE));
}

function getRandomPosY(): number {
    return Math.round(Math.random() * (canvas.height - RECTANGLES_SIZE));
}

function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function drawRandomColorRectangle(posX, posY) {
    let color: string = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;

    ctx.strokeStyle = color;
    ctx.strokeRect(posX, posY, RECTANGLES_SIZE, RECTANGLES_SIZE);
}

function drawSomeRectangles(numberOfRectangles: number) {
    let posX: number;
    let posY: number;

    for (let index = 0; index < numberOfRectangles; index++) {
        posX = getRandomPosX();
        posY = getRandomPosY();
        drawRandomColorRectangle(posX, posY);
    }
}

drawSomeRectangles(RECTANGLES_COUNT);