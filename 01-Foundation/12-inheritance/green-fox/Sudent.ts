'use strict'

import Person from './Person';

export default class Student extends Person {
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name:string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization:string = 'The School of Life') {
        super(name, age, gender);
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
    }

    getGoal() {
        console.log(`My goal is: Be a junior software developer.`);
    }

    skipDays(days: number) {
        this._skippedDays += days;
    }
}