'use strict'

import Animal from './Animal'

export default class Farm {
    private _animals: Animal[];
    private _slots: number;

    constructor(slots: number = 10) {
        this._slots = slots;
        this._animals = [];
    }

    getFreeSlots(): number {
        return this._slots - this._animals.length;
    }

    breed() {
        if (this._animals.length < this._slots) {
            let newAnimal = new Animal(
                Math.floor(Math.random() * 100) * Math.floor(Math.random() * 2),
                Math.floor(Math.random() * 100)
            );

            this._animals.push(newAnimal);
        }
    }

    slaughter() {
        let minHunger: number = this._animals.map((animal) => {return animal.hunger}).reduce((min, value) => (min > value) ? value : min);
        let shouldSlaughter: boolean = true;
        // What if there are more animals with the same lowest hunger; this kills only one
        this._animals = this._animals.filter((animal) => {
            if (shouldSlaughter === false) {
                return true;
            } else if(animal.hunger == minHunger) {
                shouldSlaughter = false;
                return false;
            }

            return true;
        });
    }
}