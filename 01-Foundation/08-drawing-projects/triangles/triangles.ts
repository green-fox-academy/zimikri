'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const TRIANGLE_COUNT: number = 21;
const TRIANGLE_COLOR: string = 'random'; // You can set it 'random' to make it funny

drawTriangles(TRIANGLE_COUNT, TRIANGLE_COLOR);

function drawTriangles(triangleCount: number, color: string) {
    const bigTriangleSideLength: number = getBigTriangleSideLength();
    const smallTriangleSideLength: number = bigTriangleSideLength / triangleCount;
    const leftBottomAbsolute: number[] = getLeftBottomAbsolute(bigTriangleSideLength);
    const deltaX: number = smallTriangleSideLength;
    const deltaY: number = Math.sqrt(3) / 2 * smallTriangleSideLength;

    for (let y = triangleCount; y > 0  ; y--) {
        for (let x = 0; x < y; x++) {
            drawTriangle(
                leftBottomAbsolute[0] + x * deltaX + (triangleCount - y) * (deltaX / 2), 
                leftBottomAbsolute[1] - (triangleCount - y) * deltaY, 
                smallTriangleSideLength, 
                color
            );
        }
    }
}

function getBigTriangleSideLength(): number {
    return ((Math.sqrt(3) / 2 * canvas.width < canvas.height) ? canvas.width : 2 * canvas.height / (Math.sqrt(3)));
}

function getLeftBottomAbsolute(bigTriangleSideLength: number): number[] {
    const posX: number = (canvas.width - bigTriangleSideLength) / 2;
    const posY: number = (canvas.height / 2) + (Math.sqrt(3) / 4 * bigTriangleSideLength);

    return [posX, posY];
}

function drawTriangle(leftBottomX: number, leftBottomY: number, sideLength: number, color: string) {
    const coordinates: number[][] = getTriangleCoords([leftBottomX, leftBottomY], sideLength);

    drawShapeFromCoords(coordinates, color);
}

function drawShapeFromCoords(coordinates: number[][], color: string) {
    color = (color == 'random') ? getRandomRGBcolor() : color;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);

    for (let index = 0; index < coordinates.length; index++) {
        ctx.lineTo(coordinates[index][0], coordinates[index][1])
    }

    ctx.closePath();
    ctx.stroke();
}

function getTriangleCoords(leftBottom: number[], sideLength: number): number[][] {
    return [
        [leftBottom[0], leftBottom[1]],
        [leftBottom[0] + sideLength / 2, leftBottom[1] - Math.sqrt(3) / 2 * sideLength],
        [leftBottom[0] + sideLength, leftBottom[1]],
    ];
}

function getRandomRGBcolor(): string {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}
