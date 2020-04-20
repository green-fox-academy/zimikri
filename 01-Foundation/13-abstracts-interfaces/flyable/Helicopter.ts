'use strict';

import Vehicle from './Vehicle';
import Flyable from './Flyable';

export default class Helocopter extends Vehicle implements Flyable{
    constructor(name: string) {
        super(name);
        this.fuelType = 'kerosene';
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