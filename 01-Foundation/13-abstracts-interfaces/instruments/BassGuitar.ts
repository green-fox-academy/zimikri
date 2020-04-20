'use strict';

import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument{
    constructor(numberOfStrings: number = 4) {
        super();
        this._name = 'Bass Guitar';
        this._numberOfStrings = numberOfStrings;
    }

    play() {
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }
}