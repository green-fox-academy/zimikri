'use strict'

export default class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    introduce() {
        console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}.`);
    }

    getGoal() {
        console.log(`My goal is: Live for the moment!`);
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(gender: string) {
        this._gender = gender;
    }
}