'use strict'

import KochLine from './KochLine'

const counter: number = 2;
const kochAngle: number = 60;

window.onload = (event) => {
    new KochLine(counter, kochAngle);
};
