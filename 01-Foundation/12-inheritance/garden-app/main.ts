'use strict'

import Garden from './Garden';

const garden = new Garden();

garden.addFlower('yellow');
garden.addFlower('blue');
garden.addTree('purple');
garden.addTree('orange');

garden.printInfo();

garden.water(40);
garden.water(70);
