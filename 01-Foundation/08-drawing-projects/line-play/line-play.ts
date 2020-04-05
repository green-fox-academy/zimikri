'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const LINE_COUNT: number = 20;
const LINE_COLOR: string = 'red'; // You can set it 'random' to make it funny

const BEGIN: number[] = [20, 20];
const CORNER: number[] = [canvas.width - 20, 20];
const END: number[] = [canvas.width - 20, canvas.width - 20];

startLinePlay(BEGIN, CORNER, END, LINE_COUNT);

function startLinePlay(startPos: number[], cornerPos: number[], endPos: number[], countOfLines: number = 20, color1: string = 'purple', color2: string = 'green') {
    const oppositeCorner: number[] = getOppositeCorner(startPos, cornerPos, endPos);

    drawLinesIntoCorner(startPos, cornerPos, endPos, countOfLines, color1);
    drawLinesIntoCorner(startPos, oppositeCorner, endPos, countOfLines, color2);
}

function getOppositeCorner(startPos: number[], cornerPos: number[], endPos: number[]): number[] {
    const posX: number = endPos[0] - cornerPos[0] + startPos[0];
    const posY: number = endPos[1] - cornerPos[1] + startPos[1];

    return [posX, posY];
}

function drawLine(beginCoords: number[], endCoords: number[], color: string = 'black') {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(beginCoords[0], beginCoords[1]);
    ctx.lineTo(endCoords[0], endCoords[1])
    ctx.stroke();
}

function getSidePoints(fromPos: number[], toPos: number[], countOfLines: number): number[][] {
    const deltaX: number = (fromPos[0] - toPos[0]) / countOfLines;
    const deltaY: number = (fromPos[1] - toPos[1]) / countOfLines;
    let sidePoints: number[][] = [];

    for (let i = 1; i < countOfLines; i++) {
        sidePoints.push([toPos[0] + i * deltaX, toPos[1] + i * deltaY]);
    }

    return sidePoints;
}

function drawLinesIntoCorner(startPos: number[], cornerPos: number[], endPos: number[], countOfLines: number = 15, color: string = 'blue') {
    const startSidePoints: number[][] = getSidePoints(startPos, cornerPos, countOfLines);
    const endSidePoints: number[][] = getSidePoints(cornerPos, endPos, countOfLines);
    
    startSidePoints.forEach((coord, index) => {
        drawLine(coord, endSidePoints[index], color);
    });
}
