'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

const NUMBER_OF_BOXES: number = 19;
const BOXSIZE: number = 10;

drawPurpleSteps(NUMBER_OF_BOXES, BOXSIZE);

function drawPurpleSteps(numberOfBoxes: number, boxSize: number) {
    for (let i = 1; i <= numberOfBoxes; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(i * boxSize, i * boxSize, boxSize, boxSize);

        ctx.strokeStyle = '#222222';
        ctx.strokeRect(i * boxSize, i * boxSize, boxSize, boxSize);
    }
}
