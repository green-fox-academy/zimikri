'use strict';

import Instrument from './Instrument';

export default abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;
    abstract sound(): string;
}

