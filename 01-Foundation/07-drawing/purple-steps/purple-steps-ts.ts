'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

const NUMBER_OF_BOXES: number = 19;
const BOXSIZE: number = 10;

function drawPurpleSteps(numberOfBoxes: number, boxSize: number) {
    let posX: number = boxSize;
    let posY: number = boxSize;

    for (let index = 0; index < numberOfBoxes; index++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(posX, posY, boxSize, boxSize);

        ctx.strokeStyle = '#222222';
        ctx.strokeRect(posX, posY, boxSize, boxSize);


        posX += boxSize + 1;
        posY += boxSize + 1;
    }
}

drawPurpleSteps(NUMBER_OF_BOXES, BOXSIZE);