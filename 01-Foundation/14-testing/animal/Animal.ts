'use strict'

export default class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = Math.floor(hunger);
        this.thirst = Math.floor(thirst);
    }

    eat() {
        this.hunger--;
    }

    drink() {
        this.thirst--;
    }

    play() {
        this.hunger++;
        this.thirst++;
    }
}