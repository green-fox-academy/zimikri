'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const QUARTERS_NUMBER: number = 4;
const LINE_COUNT: number = 20;
const LINE_COLOR_1: string = 'purple';
const LINE_COLOR_2: string = 'green';

startLinePlayQuarters(QUARTERS_NUMBER, LINE_COUNT, LINE_COLOR_1, LINE_COLOR_2);

function startLinePlayQuarters(quartersNum: number, lineCount: number, color1: string, color2: string) {
    const deltaX: number = canvas.width / quartersNum;
    const deltaY: number = canvas.height / quartersNum;
    let startPos: number[] = [];
    let cornerPos: number[] = [];
    let endPos: number[] = [];

    for (let posX = 0; posX < quartersNum; posX++) {
        for (let posY = 0; posY < quartersNum; posY++) {
            startPos = [posX * deltaX, posY * deltaY];
            cornerPos = [(posX + 1) * deltaX, posY * deltaY];
            endPos = [(posX + 1) * deltaX, (posY + 1) * deltaY];
            drawLinesIntoOppositeCorner(startPos, cornerPos, endPos, lineCount, color1, color2);
        }
    }
}

function drawLinesIntoOppositeCorner(startPos: number[], cornerPos: number[], endPos: number[], countOfLines: number = 20, color1: string = 'purple', color2: string = 'green') {
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

    for (let i = 0; i < countOfLines; i++) {
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
