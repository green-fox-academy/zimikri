'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const HEXAGONAL_SIDE_SIZE: number = 4;
const HEXAGONAL_COLOR: string = 'random'; // You can set it 'random' to make it funny

drawHexagons(HEXAGONAL_SIDE_SIZE, HEXAGONAL_COLOR);

function drawHexagons(hexagonCountOnSide: number, color: string) {
    const smallHexagonSideLength: number = getSmallHexagonSideLength(hexagonCountOnSide);
    const leftBottomAbsolute: number[] = getLeftBottomAbsolute(smallHexagonSideLength, hexagonCountOnSide);
    const deltaX: number = 1.5 * smallHexagonSideLength;
    const deltaY: number = Math.sqrt(3) * smallHexagonSideLength;
    let maxHexagonCount: number = 2 * hexagonCountOnSide - 1;

    for (let x = 0; x < hexagonCountOnSide ; x++) {
        for (let y = 0; y < maxHexagonCount; y++) {
            drawHexagon(
                leftBottomAbsolute[0] + x * deltaX, 
                leftBottomAbsolute[1] - y * deltaY - x * deltaY / 2, 
                smallHexagonSideLength, 
                color
            );
            if (x != 0) {
                drawHexagon(
                    leftBottomAbsolute[0] - x * deltaX, 
                    leftBottomAbsolute[1] - y * deltaY - x * deltaY / 2, 
                    smallHexagonSideLength, 
                    color
                );
            }
        }
        maxHexagonCount--;
    }
}

function getSmallHexagonSideLength(hexagonCountOnSide: number): number {
    const sideFromWidth: number = (canvas.width - 10) / (3 * hexagonCountOnSide - 1);
    const sideFromHeigth: number = (canvas.height - 10) / Math.sqrt(3) / (2 * hexagonCountOnSide - 1);
    
    return (sideFromWidth < sideFromHeigth) ? sideFromWidth : sideFromHeigth;
}

function getLeftBottomAbsolute(smallHexagonSideLength: number, hexagonCountOnSide: number): number[] {
    const posX: number = (canvas.width / 2) - smallHexagonSideLength / 2;
    const posY: number = (canvas.height / 2) + (Math.sqrt(3) * (2 * hexagonCountOnSide - 1) / 2 * smallHexagonSideLength);

    return [posX, posY];
}

function drawHexagon(leftBottomX: number, leftBottomY: number, sideLength: number, color: string) {
    const coordinates: number[][] = getHexagonCoords([leftBottomX, leftBottomY], sideLength);

    drawShapeFromCoords(coordinates, color);
}


function getHexagonCoords(leftBottom: number[], sideLength: number): number[][] {
    return [
        [leftBottom[0], leftBottom[1]],
        [leftBottom[0] - sideLength / 2, leftBottom[1] - Math.sqrt(3) / 2 * sideLength],
        [leftBottom[0], leftBottom[1] - Math.sqrt(3) * sideLength],
        [leftBottom[0] + sideLength, leftBottom[1] - Math.sqrt(3) * sideLength],
        [leftBottom[0] + 1.5 * sideLength, leftBottom[1] - Math.sqrt(3) / 2 * sideLength],
        [leftBottom[0] + sideLength, leftBottom[1]],
    ];
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

function getRandomRGBcolor(): string {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}
