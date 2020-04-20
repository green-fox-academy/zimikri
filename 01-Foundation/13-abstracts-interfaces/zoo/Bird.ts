'use strict';

import Animal from './Animal';

export default class Bird extends Animal{
    constructor(name: string, gender?: string) {
        super(name, gender);
        this.numOfLegs = 2;
    }

    breed(): string {
        return 'laying eggs';
    }
}