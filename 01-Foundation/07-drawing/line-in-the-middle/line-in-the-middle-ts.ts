'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const width: number = canvas.width;
const height: number = canvas.height;

// draw a red horizontal line to the canvas' middle.
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, height / 2);
ctx.lineTo(width, height / 2);
ctx.stroke();

// draw a green vertical line to the canvas' middle.
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, height);
ctx.stroke();
