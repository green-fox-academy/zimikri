'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

const RECTANGLES_COUNT: number = 4;

function getRandomPosX(rectangleSize: number): number {
    return Math.round(Math.random() * (canvas.width - rectangleSize));
}

function getRandomPosY(rectangleSize: number): number {
    return Math.round(Math.random() * (canvas.height - rectangleSize));
}

function getRandomRGBcolorPart(): number {
    return Math.round(Math.random() * 255);
}

function getRandomRectangleSize(): number {
    const maxSize: number = (canvas.width < canvas.height) ? canvas.width : canvas.height;
    return Math.round(Math.random() * maxSize);
}

function drawRandomRectangle() {
    let rectangleSize: number = getRandomRectangleSize();
    let posX: number = getRandomPosX(rectangleSize);
    let posY: number = getRandomPosY(rectangleSize);
    let color: string = `rgb(${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()}, ${getRandomRGBcolorPart()})`;

    ctx.strokeStyle = color;
    ctx.strokeRect(posX, posY, rectangleSize, rectangleSize);
}

function drawSomeRectangles(numberOfRectangles: number) {
    for (let index = 0; index < numberOfRectangles; index++) {
        drawRandomRectangle();
    }
}

drawSomeRectangles(RECTANGLES_COUNT);