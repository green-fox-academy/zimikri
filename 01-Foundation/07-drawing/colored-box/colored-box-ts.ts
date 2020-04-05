'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
const COLORS: string[] = ['green', 'red', 'blue', 'orange'];

drowBoxWithDifferentColoredLines(50, 50, 250, 300, COLORS);

function drowBoxWithDifferentColoredLines(posX: number, posY: number, width: number, height: number, colors: string[]) {
    const deltaX: number[] = [width, 0, -width, 0]; 
    const deltaY: number[] = [0, height, 0, -height];

    for (let index = 0; index < 4; index++) {
        ctx.strokeStyle = colors[index];
        ctx.beginPath();
        ctx.moveTo(posX, posY);

        posX = posX + deltaX[index];
        posY = posY + deltaY[index];

        ctx.lineTo(posX, posY);
        ctx.stroke();
    }
}
