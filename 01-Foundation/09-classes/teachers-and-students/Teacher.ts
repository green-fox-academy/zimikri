'use strict'

import Student from './Student';

export default class Teacher {
    teach(student: Student) {
        student.learn();
    }

    answer() {
        console.log('the teacher is answering a question');
        
    }
}