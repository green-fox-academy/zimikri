'use strict';

import Bird from './Bird';
import Helicopter from './Helicopter';

const bird = new Bird('Parrot');
console.log('\nBird flying test');
bird.takeOff();
bird.fly();
bird.land();

const helicopter = new Helicopter('Mi-26');
console.log('\nHelicopter flying test');
helicopter.takeOff();
helicopter.fly();
helicopter.land();