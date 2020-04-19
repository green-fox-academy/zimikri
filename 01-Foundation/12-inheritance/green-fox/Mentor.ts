'use strict'

import Person from './Person';

export default class Mentor extends Person{
    private _level: string;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
        super(name, age, gender);
        this._level = level;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this._level} mentor.`);
    }

    getGoal() {
        console.log(`My goal is: Educate brilliant junior software developers.`);
    }
}