'use strict'

// Create a Station and a Car classes
// Station
//     gasAmount
//     refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
//     gasAmount
//     capacity
//     create constructor for Car where:
//     initialize gasAmount -> 0
//     initialize capacity -> 100

import Station from './Station';
import Car from './Car';

const station: Station = new Station(1000);
const car: Car = new Car();

station.refill(car);

console.log(station);
console.log(car);
