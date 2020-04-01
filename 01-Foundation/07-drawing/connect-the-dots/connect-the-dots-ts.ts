'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

const POLYGON1: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
const POLYGON2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(coordinates: number[][]) {
    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);

    for (let index = 0; index < coordinates.length; index++) {
        ctx.lineTo(coordinates[index][0], coordinates[index][1])
    }

    ctx.closePath();
    ctx.stroke();
}

connectDots(POLYGON1);
connectDots(POLYGON2);