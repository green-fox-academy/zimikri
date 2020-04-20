'use strict';

import Instrument from './Instrument';

export default abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;
    abstract sound(): string;
    
    play() {
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

