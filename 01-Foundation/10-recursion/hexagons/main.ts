'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const depth: number = 5;

initCanvas();
drawHexagons(canvas.width/4, canvas.width/2 * (1 - Math.sqrt(3) / 2), canvas.width/2, depth);

function initCanvas() {
    canvas.width = 1800;
    canvas.height = 1800;
    canvas.style.width = '600px';
    canvas.style.height = '600px';
    ctx.strokeStyle = '#333333';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 3;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawHexagons(xPos: number, yPos: number, radius: number, counter: number = depth) {
    if (counter == 0) return;

    drawOneHexagon(xPos, yPos, radius, counter);

    const newRadius = radius / 2;
    drawHexagons(xPos, yPos, newRadius, counter - 1);
    drawHexagons(xPos, yPos + Math.sqrt(3) * newRadius, newRadius, counter - 1);
    drawHexagons(xPos + 1.5 * newRadius, yPos + newRadius * Math.sqrt(3) / 2, newRadius, counter - 1);
}

function drawOneHexagon(topLeftX: number, topLeftY: number, size: number, counter: number = 0) {
    const centerX = topLeftX + size / 2;
    const centerY = topLeftY + size * Math.sqrt(3) / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        if ( i == 0) {
            ctx.moveTo(Math.cos(getRadian(60)) * size, Math.sin(getRadian(60)) * size);
        } else {
            ctx.lineTo(Math.cos(getRadian(60)) * size, Math.sin(getRadian(60)) * size);
        }
        ctx.rotate(getRadian(60));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}

function getRadian(angle: number): number {
    return Math.PI / 180 * angle;
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}