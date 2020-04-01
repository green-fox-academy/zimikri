'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function fillCanvasWithCheckerboardPattern(boxSize: number) {
    let color: string;
    let evenX: boolean;
    let evenY: boolean;

    for (let posX = 0; posX < canvas.width; posX += boxSize) {
        evenX = (posX / boxSize) % 2 == 0;
        for (let posY = 0; posY < canvas.height; posY += boxSize) {
            evenY = (posY / boxSize) % 2 == 0;
            color = ((evenX || evenY) && !(evenX && evenY)) ? 'white' : 'black';

            ctx.fillStyle = color;
            ctx.fillRect(posX, posY, boxSize, boxSize);
        }
    }
}

fillCanvasWithCheckerboardPattern(50);