'use strict'

export default class Sponsor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _company: string;
    private _hiredStudents: number;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._company = company;
        this._hiredStudents = 0;
    }

    introduce() {
        console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
    }

    getGoal() {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }

    hire() {
        this._hiredStudents++;
    }
}