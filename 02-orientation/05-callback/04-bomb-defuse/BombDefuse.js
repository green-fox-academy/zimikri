'use strict';

export default class BombDefuse {
    button;
    counter;
    timeout;
    interval;
    clickHandler;

    constructor(timeout = 10000) {
        this.button = document.getElementsByTagName('button')[0];
        this.counter = document.getElementsByClassName('display')[0];
        this.counter.textContent = Math.floor(timeout / 1000);

        this.timeout = setTimeout(this.explode.bind(this), this.counter.textContent * 1000);
        this.interval = setInterval(this.incrementCounter.bind(this), 1000);
        
        this.clickHandler = this.defuse.bind(this);
        this.button.addEventListener('click', this.clickHandler);
    }

    incrementCounter() {
        this.counter.textContent--;
    }
    
    explode() {
        this.end('Bomb exploded', 'red-bg');
    }
    
    defuse() {
        this.end('Bomb defused', 'green-bg');
    }

    end(text, bgClass) {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        
        this.counter.textContent = text;
        document.body.className = bgClass;
        this.button.className = 'inactive';
    
        this.button.removeEventListener('click', this.clickHandler);
    }
}