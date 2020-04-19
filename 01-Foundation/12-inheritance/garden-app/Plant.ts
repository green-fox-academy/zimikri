'use strict'

export default class Plant {
    private _color: string;
    private _type: string;
    private _waterAmount: number;
    private _waterNeeds: number;
    private _waterAbsorb: number;

    constructor(color: string, waterNeeds: number, type: string, waterAbsorb: number) {
        this._color = color;
        this._type = type;
        this._waterAmount = 0;
        this._waterNeeds = waterNeeds;
        this._waterAbsorb = waterAbsorb;
    }

    water(amount: number) {
        this._waterAmount += amount * this._waterAbsorb;
    }

    isNeedWater(): boolean {
        return this._waterAmount < this._waterNeeds;
    }

    getInfo(): string {
        return `The ${this._color} ${this._type} ${((this.isNeedWater()) ? 'needs' : 'doesn\'t need')} water`;
    }
}