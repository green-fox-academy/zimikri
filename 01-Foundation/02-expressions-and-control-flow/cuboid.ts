'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
const height: number = 7.85;
const width: number = 13.4686;
const depth: number = 9.4686;
const surfaceArea: number = 2 * (height * width + height * depth + width * depth);
const volume: number = height * width * depth;

console.log(`Surface Area: ${Math.round(surfaceArea)}`);
console.log(`Volume: ${Math.round(volume)}`);
