'use strict'

// Create Student and Teacher classes
// Student
//     learn() -> prints the student is learning something new
//     question(teacher) -> calls the teachers answer method
// Teacher
//     teach(student) -> calls the students learn method
//     answer() -> prints the teacher is answering a question

// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

import Teacher from './Teacher';
import Student from './Student';

const teacher: Teacher = new Teacher();
const student: Student = new Student();

student.question(teacher);
teacher.teach(student);