'use strict'

import Hexagons from './Hexagons'

let hexagons: Hexagons;
let angle: number = 0;
// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds));
// }

window.onload = (event) => {
    // hexagons = new Hexagons(5, 30);
    // hexagons.drawFractal();
    new Hexagons(5, angle);
    // rotate();
};

window.onclick = (event) => {
    // angle = (angle + 5) % 360;
    // new Hexagons(5, angle);
    window.requestAnimationFrame(step);
    // rotate(angle);
};

document.addEventListener('keydown', logKey);

let start = null;
let dir: number = 1;
function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    new Hexagons(5, angle);
    angle += 0.3 * dir;
    if (progress < 500) {
      window.requestAnimationFrame(step);
    }
}

var lastKeyUpAt = null;

document.addEventListener('keydown', function(e) {
    // Set key down time to the current time
    var keyDownAt = new Date();

    // Use a timeout with 1000ms (this would be your X variable)
    setTimeout(function() {
        // Compare key down time with key up time
        if (+keyDownAt > +lastKeyUpAt) {
            // Key has been held down for x seconds
            if (e.code == 'ArrowRight' || e.code == 'ArrowLeft') {
                start = null;
                window.requestAnimationFrame(step);
                dir = ((e.code == 'ArrowRight') ? 1 : -1);
                // new Hexagons(4, angle);
            }
            // window.requestAnimationFrame(step);
        } else {
            return;

        }
    }, 1000);
});

document.addEventListener('keyup', function() {
    // Set lastKeyUpAt to hold the time the last key up event was fired
    lastKeyUpAt = new Date();
});
  
//   window.requestAnimationFrame(step);


function logKey(e) {
    if (e.code == 'ArrowRight' || e.code == 'ArrowLeft') {
        start = null;
        window.requestAnimationFrame(step);
        dir = ((e.code == 'ArrowRight') ? 1 : -1);
        // new Hexagons(4, angle);
    }
}

// function rotate() {

//     for (let index = 0; index <= 360; index ++) {
        
        
//         sleep(100).then(() => {
//             angle = (angle + 5) % 360;
//             new Hexagons(5, angle);
//                 //    new Hexagons(5, index);
//         })        
//     }
// }

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
    await timeout(0);
    return fn(...args);
}



const rotate = function (angle) {
    angle = angle + 1;
    if (angle > 360) return;
console.log(angle);

    new Hexagons(5, angle);
    sleep(rotate, angle);
}