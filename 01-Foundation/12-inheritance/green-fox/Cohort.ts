'use strict'

import Student from './Sudent';
import Mentor from './Mentor';

export default class Cohort {
    private _name: string;
    private _students: Student[];
    private _mentors: Mentor[];

    constructor(name: string) {
        this._name = name;
        this._students = [];
        this._mentors = [];
    }

    addStudent(student: Student) {
        this._students.push(student);
    }

    addMentor(mentor: Mentor) {
        this._mentors.push(mentor);
    }

    info() {
        console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`);
        
    }
}