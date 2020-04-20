'use strict';

import Reservation from './Reservation';

const numOfBooking: number = 1000;
const numOfDigitsOfCode = 8;

for (let index = 0; index < numOfBooking; index++) {
    try {
        console.log(new Reservation(numOfDigitsOfCode).toString());
    } catch (error) {
        console.log(error.message);
        break;
    }
}
