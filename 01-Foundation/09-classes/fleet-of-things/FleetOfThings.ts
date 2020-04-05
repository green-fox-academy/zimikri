'use strict'

import { Thing } from './Thing';
import { Fleet } from './Fleet';

export default class FleetOfThings {
    fleet: Fleet;
    
    constructor() {

    }

    main() {
        this.fleet = new Fleet();
    }

    add(name: string, completed: boolean = false) {
        const thing: Thing = new Thing(name);
        if (completed) thing.complete();
        this.fleet.add(thing);
    }

    print() {
        let printString: string = '';
        let completed: string;
        this.fleet.getThings().forEach((thing, index) => {
            completed = (thing.getCompleted()) ? 'x' : ' ';
            printString += `${index + 1}. [${completed}] ${thing.getName()}\n`;
        });

        console.log(printString);
    }
}
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 
