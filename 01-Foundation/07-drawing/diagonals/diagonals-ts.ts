'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

const CANVAS_WIDTH: number = canvas.width;
const CANVAS_HEIGHT: number = canvas.height;

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0, 0);
ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(CANVAS_WIDTH, 0);
ctx.lineTo(0, CANVAS_HEIGHT);
ctx.stroke();
