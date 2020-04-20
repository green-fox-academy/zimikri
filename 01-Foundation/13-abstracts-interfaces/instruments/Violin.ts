'use strict';

import StringedInstrument from './StringedInstrument';

export default class Violin extends StringedInstrument{
    constructor(numberOfStrings: number = 4) {
        super();
        this._name = 'Violin';
        this._numberOfStrings = numberOfStrings;
    }

    sound(): string {
        return 'Screech';
    }
}