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
}