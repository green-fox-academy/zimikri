'use strict';

import Animal from './Animal';
import Flyable from './Flyable';

export default class Bird extends Animal implements Flyable{
    constructor(name: string, gender?: string) {
        super(name, gender);
        this.numOfLegs = 2;
    }

    breed(): string {
        return 'laying eggs';
    } 

    land() {
        console.log(`${this._name} is landing.`);
    }

    fly() {
        console.log(`${this._name} is flying.`);
    }

    takeOff() {
        console.log(`${this._name} is taking off.`);
    }
}