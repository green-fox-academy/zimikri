'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

const NUMBER_OF_BOXES: number = 6;
const BOXSIZE: number = 10;
const BOREDER_COLOR: string = '#222222';
const FILL_COLOR: string = 'purple';

drawPurpleSteps3D(NUMBER_OF_BOXES, BOXSIZE, BOREDER_COLOR, FILL_COLOR);

function drawPurpleSteps3D(numberOfBoxes: number, boxSize: number, borderColor: string, fillColor: string) {
    let posX: number = boxSize;
    let posY: number = boxSize;
    let deltaBoxSize: number = boxSize;

    for (let index = 0; index < numberOfBoxes; index++) {
        drawBorderedBox(posX, posY, boxSize, borderColor, fillColor)

        posX += boxSize + 1;
        posY += boxSize + 1;
        boxSize += deltaBoxSize;
    }
}

function drawBorderedBox(posX: number, posY: number, boxSize: number, borderColor: string, fillColor: string) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(posX, posY, boxSize, boxSize);

    ctx.strokeStyle = borderColor;
    ctx.strokeRect(posX, posY, boxSize, boxSize);
}
