'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const QUARTERS_NUMBER: number = 4;
const LINE_COUNT: number = 20;
const LINE_COLOR_1: string = 'green';

startEnvelopeStar(LINE_COUNT, LINE_COLOR_1);

function startEnvelopeStar(lineCount: number, color: string) {
    const cornerPos: number[] = [canvas.width / 2, canvas.height / 2];
    let ends: number[][] = [
        [0, canvas.height / 2],
        [canvas.width / 2, 0],
        [canvas.width, canvas.height / 2],
        [canvas.width / 2, canvas.height]
    ];

    for (let index = 0; index < 4; index++) {
        drawLinesIntoCorner(ends[0], cornerPos, ends[1], lineCount, color);
        ends.push(ends.shift());
    }
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
    let coordX: number = toPos[0];
    let coordY: number = toPos[1];

    for (let index = 1; index < countOfLines; index++) {
        coordX += deltaX;
        coordY += deltaY;
        sidePoints.push([coordX, coordY]);
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
