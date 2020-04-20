'use strict';

import Animal from './Animal';

export default class Mammal extends Animal{
    constructor(name: string, gender?: string) {
        super(name, gender);
        this.numOfLegs = 4;
    }

    breed(): string {
        return 'pushing miniature versions out';
    }
}