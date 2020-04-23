'use strict'

import Tree from './Tree'

const counter: number = 9;
const kochAngle: number = 180 / 7;

window.onload = (event) => {
    new Tree(counter, kochAngle);
};
