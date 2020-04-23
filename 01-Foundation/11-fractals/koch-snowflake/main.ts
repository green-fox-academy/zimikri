'use strict'

import KochSnowflake from './KochSnowflake'

const counter: number = 4;
const kochAngle: number = 60;

window.onload = (event) => {
    new KochSnowflake(counter, kochAngle);
};
 