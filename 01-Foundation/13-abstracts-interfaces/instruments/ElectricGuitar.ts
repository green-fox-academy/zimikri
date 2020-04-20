'use strict';

import StringedInstrument from './StringedInstrument';

export default class ElectricGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 6) {
        super();
        this._name = 'Electric Guitar';
        this._numberOfStrings = numberOfStrings;
    }

    play() {
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

    sound(): string {
        return 'Twang';
    }
}