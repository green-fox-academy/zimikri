'use strict';

export default class Apple {
    private _name:string;
    constructor(name:string) {
        this._name = name;
    }

    getApple(): string {
        return this._name;
    }
}