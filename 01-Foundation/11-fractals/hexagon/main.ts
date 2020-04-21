'use strict'

import Hexagons from './Hexagons'

let hexagons: Hexagons;
let angle: number = 0;

window.onload = (event) => {
    new Hexagons(5, angle);
};
