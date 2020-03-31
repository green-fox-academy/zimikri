'use strict';

const STUDENTS: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];
const COUNT_OF_CANDIES: number = 5;

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function getSumOfAgeWhoHasLessCandy(students: any[], countOfCandies: number): number {
    let sumOfAges: number = 0;

    students.filter((student) => {return student.candies < countOfCandies}).forEach((student) => {
        sumOfAges += student.age;
    });

    return sumOfAges;
}

function showSumOfAgeWhoHasLessCandy(students: any[], countOfCandies: number) {
    const sumOfAges: number = getSumOfAgeWhoHasLessCandy(students, countOfCandies);
    console.log(`The sum of the age of students who have less than ${countOfCandies} candies: ${sumOfAges}.`);
}

function getCandiesCountOfStudents(students: any[]): number {
    let countCandies: number = 0;

    students.forEach((student) => {
        countCandies += student.candies;
    });

    return countCandies;
}

function showCandiesCountOfStudents(students: any[]) {
    const countOfCandies: number = getCandiesCountOfStudents(students);
    console.log(`They have ${countOfCandies} candies altogether.`);
}

showCandiesCountOfStudents(STUDENTS);
showSumOfAgeWhoHasLessCandy(STUDENTS, COUNT_OF_CANDIES);

export{}