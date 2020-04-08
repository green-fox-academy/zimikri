'use strict'

import Teacher from './Teacher';

export default class Student {
    learn() {
        console.log('the student is learning something new');
    }

    question(teacher: Teacher) {
        teacher.answer();
    }
}