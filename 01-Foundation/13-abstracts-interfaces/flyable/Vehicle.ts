'use strict';

export default abstract class Vehicle {
    protected _name: string;
    public fuelType: string;
    public maxSpeed: number;

    constructor(name: string) {
        this._name = name;
    }
    
    getName(): string {
        return this._name;
    }

    
}