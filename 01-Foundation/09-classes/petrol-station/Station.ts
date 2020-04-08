'use strict'

import Car from './Car';

export default class Station {
    private _gasAmount: number;

    constructor(gasAmount: number) {
        this._gasAmount = gasAmount;
    }

    refill(car: Car) {
        const requiredAmount: number = car.capacity - car.gasAmount;

        car.gasAmount = car.capacity;
        this._gasAmount -= requiredAmount;
    }
}