'use strict'

import Person from './Person';

export default class Sponsor extends Person {
    private _company: string;
    private _hiredStudents: number;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
        super(name, age, gender);
        this._company = company;
        this._hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
    }

    getGoal() {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }

    hire() {
        this._hiredStudents++;
    }
}