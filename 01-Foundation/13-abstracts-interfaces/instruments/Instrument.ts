'use strict';

export default abstract class Instrument {
    protected _name: string;
    abstract play(): void;
}