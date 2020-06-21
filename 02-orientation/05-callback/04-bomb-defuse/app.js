'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const button = document.getElementsByTagName('button')[0];
const counter = document.getElementsByClassName('display')[0];
const timeout = setTimeout(explode, 10000, counter, button);
const interval = setInterval(increment, 1000, counter);

button.addEventListener('click', defuse);

function increment(counter) {
    counter.innerText--;
}

function explode(counter, button) {
    clearInterval(interval);
    counter.innerText = 'Bomb exploded';
    document.body.className = 'red-bg';

    button.removeEventListener('click', defuse);
}

function defuse(event) {
    clearTimeout(timeout);
    clearInterval(interval);
    counter.innerText = 'Bomb defused';

    this.removeEventListener('click', defuse);
}

