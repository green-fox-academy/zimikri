'use strict';

export default abstract class Animal {
    protected _name: string;
    public gender?: string;
    public numOfLegs: number;
    public canFly: boolean;

    abstract breed(): string;

    constructor(name: string, gender?: string) {
        this._name = name;
        this.gender = gender;
    }
    
    getName(): string {
        return this._name;
    }

    
}