'use strict';

import Printable from './Printable';

export default class Domino implements Printable {
    private _sideA: number;
    private _sideB: number;

    constructor(sideA: number, sideB: number) {
        this._sideA = sideA;
        this._sideB = sideB;
    }

    printAllFields() {
        console.log(
            `Domino A side: ${this._sideA}, B side: ${this._sideB}`
        );
    }
}
