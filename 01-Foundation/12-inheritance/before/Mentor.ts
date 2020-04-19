'use strict'

export default class Mentor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _level: string;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._level = level;
    }

    introduce() {
        console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor.`);
    }

    getGoal() {
        console.log(`My goal is: Educate brilliant junior software developers.`);
    }
}