'use strict';

const STUDENTS: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];
const COUNT_OF_CANDIES: number = 4;

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function getNamesWhoHasMoreCandy(students: any[], countOfCandies: number): string {
    let names: string[] = [];

    students.filter((student) => {return student.candies > countOfCandies}).forEach((student) => {
        names.push(student.name);
    });

    return names.join(', ');
}

function showNamesWhoHasMoreCandy(students: any[], countOfCandies: number) {
    const names: string = getNamesWhoHasMoreCandy(students, countOfCandies);
    console.log(`Students who has more than ${countOfCandies} candies: ${names}.`);
}

function getAverageCandyCount(students: any[]): number {
    let countCandies: number = 0;

    students.forEach((student) => {
        countCandies += student.candies;
    });

    return countCandies / students.length;
}

function showAverageCandyCount(students: any[]) {
    const average: number = getAverageCandyCount(students);
    console.log(`The average candy count: ${average}.`);
}

showNamesWhoHasMoreCandy(STUDENTS, COUNT_OF_CANDIES);
showAverageCandyCount(STUDENTS);


export{}