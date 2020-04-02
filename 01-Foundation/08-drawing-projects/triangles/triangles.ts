'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const TRIANGLE_COUNT: number = 21;

function getTriangleCoords(leftBottom: number[], sideLength: number): number[][] {
    return [
        [leftBottom[0], leftBottom[1]],
        [leftBottom[0] + sideLength / 2, leftBottom[1] - Math.sqrt(3) / 2 * sideLength],
        [leftBottom[0] + sideLength, leftBottom[1]],
    ];
}

function drawTriangle(leftBottomX: number, leftBottomY: number, sideLength: number) {
    const coordinates: number[][] = getTriangleCoords([leftBottomX, leftBottomY], sideLength);

    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);

    for (let index = 0; index < coordinates.length; index++) {
        ctx.lineTo(coordinates[index][0], coordinates[index][1])
    }

    ctx.closePath();
    ctx.stroke();
}

function getBigTriangleSideLength(): number {
    return ((Math.sqrt(3) / 2 * canvas.width < canvas.height) ? canvas.width : 2 * canvas.height / (Math.sqrt(3);
}

function getSmallTriangleSideLength(bigTriangleSideLength: number, triangleCount: number): number {
    return bigTriangleSideLength / triangleCount;
}

function getLeftBottomAbsolute(bigTriangleSideLength: number): number[] {
    const posX: number = (canvas.width - bigTriangleSideLength) / 2;
    const posY: number = (canvas.height / 2) + (Math.sqrt(3) / 4 * bigTriangleSideLength);

    return [posX, posY];
}

function drawTriangles(triangleCount: number) {
    const bigTriangleSideLength: number = getBigTriangleSideLength();
    const smallTriangleSideLength: number = getSmallTriangleSideLength(bigTriangleSideLength, triangleCount);
    const leftBottomAbsolute: number[] = getLeftBottomAbsolute(bigTriangleSideLength);
    const deltaX: number = smallTriangleSideLength;
    const deltaY: number = Math.sqrt(3) / 2 * smallTriangleSideLength;

    console.log(bigTriangleSideLength);
    

    let firstPosX: number = leftBottomAbsolute[0];
    let posX: number = firstPosX;
    let posY: number = leftBottomAbsolute[1];

    for (let y = triangleCount; y > 0 ; y--) {
        posX = firstPosX;
        for (let x = 0; x < y; x++) {
            drawTriangle(posX, posY, smallTriangleSideLength);
            posX += deltaX;
        }
        firstPosX += deltaX / 2;
        posY -= deltaY;
    }
}

drawTriangles(TRIANGLE_COUNT);