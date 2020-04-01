'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

const STARS_COUNT: number = 50;

// Just to make it funny :)
function getRandomGrayColor(): string {
    const color: string = Math.round(Math.random() * 155 + 100).toString();
    return `rgb(${color}, ${color}, ${color})`;
}

function getRandomPosX(): number {
    return Math.round(Math.random() * canvas.width);
}

function getRandomPosY(): number {
    return Math.round(Math.random() * canvas.height);
}

function getRandomStarSize(): number {
    return Math.floor(Math.random() * 2) + 1;
}

function drawRandomStar() {
    let posX: number = getRandomPosX();
    let posY: number = getRandomPosY();
    let starSize: number = getRandomStarSize();
    let color: string = getRandomGrayColor();

    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, starSize, starSize);
}

function createBlackNight() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSomeStars(numberOfLines: number) {
    createBlackNight();
    for (let index = 0; index < numberOfLines; index++) {
        drawRandomStar();
    }
}

drawSomeStars(STARS_COUNT);

