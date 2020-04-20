'use strict';

import Animal from './Animal';

export default class Reptile extends Animal{
    constructor(name: string, gender?: string) {
        super(name, gender);
    }

    breed(): string {
        return 'mainly laying eggs';
    }
}