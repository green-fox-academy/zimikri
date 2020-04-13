'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


initCanvas();
drawSquares(0, 0, 1600, 6);


function initCanvas() {
    canvas.width = 1800;
    canvas.height = 1800;
    canvas.style.width = '600px';
    canvas.style.height = '600px';
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 3;
}

function drawSquares(xPos: number, yPos: number, size: number, counter: number) {
    if (counter == 0) return;

    drawOneSquare(xPos, yPos, size);
    drawSquares(xPos + size / 3, yPos, size / 3, counter - 1);
    drawSquares(xPos, yPos + size / 3, size / 3, counter - 1);
    drawSquares(xPos + size / 3, yPos + 2* size / 3, size / 3, counter - 1);
    drawSquares(xPos + 2 * size / 3, yPos + size / 3, size / 3, counter - 1);
}

function drawOneSquare(xPos: number, yPos: number, size: number) {
    ctx.fillRect(xPos, yPos, size, size);
    ctx.strokeRect(xPos, yPos, size, size);
}