'use strict'

import FleetOfThings from './FleetOfThings';

const FOT: FleetOfThings = new FleetOfThings();

FOT.main();

FOT.add('Get milk');
FOT.add('Remove the obstacles');
FOT.add('Stand up', true);
FOT.add('Eat lunch', true);

FOT.print();
