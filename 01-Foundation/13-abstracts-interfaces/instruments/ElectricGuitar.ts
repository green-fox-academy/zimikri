'use strict';

import StringedInstrument from './StringedInstrument';

export default class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6) {
        super();
        this._name = 'Electric Guitar';
        this._numberOfStrings = numberOfStrings;
    }

    sound(): string {
        return 'Twang';
    }
}