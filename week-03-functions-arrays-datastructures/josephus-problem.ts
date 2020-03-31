'use strict';
// Write a function to solve Josephus Problem. The program should ask for a number, this number represents how many people are in the "game".
// The return value should be the number of the "winning" seat.

// Examples
// number of people	number of the winning seat
// 1	            1
// 2	            1
// 3	            3
// 7	            7
// 12	            9
// 41	            19

function fillArrayWithSeatNumber(numberOfPeople: number): number[] {
    let seats: number[] = [];

    for (let seatNum = 1; seatNum <= numberOfPeople; seatNum++) {
        seats.push(seatNum);
    }

    return seats;
}

function getSurvival(seats: number[]): number {
    let seatsNumberEven: boolean;
    while (seats.length > 1) {
        seatsNumberEven = seats.length % 2 == 1;
        seats = seats.filter((value, index) => {return index % 2 == 0});

        if (seatsNumberEven) {
            seats.unshift(seats.pop());
        }
    }

    return seats[0];
}

function getJosefusNumber(numberOfPeople: number): number {
    const seats: number[] = fillArrayWithSeatNumber(numberOfPeople);
    const survival: number = getSurvival(seats);

    return survival;
}

console.log(getJosefusNumber(41));
