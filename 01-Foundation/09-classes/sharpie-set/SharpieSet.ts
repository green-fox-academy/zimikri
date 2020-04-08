'use strict'

import Sharpie from './Sharpie';

export default class SharpieSet {
    private _sharpies: Sharpie[];

    constructor() {
        this._sharpies = [];
    }

    add(sharpie: Sharpie) {
        this._sharpies.push(sharpie);
    }

    countUsable(): number {
        return this._sharpies.filter((sharpie) => {return sharpie.inkAmount > 0}).length;
    }

    removeTrash() {
        this._sharpies = this._sharpies.filter((sharpie) => {return sharpie.inkAmount > 0})
        // let trashed: number = 0;
        // this._sharpies.forEach((sharpie, i) => {
        //     if (sharpie.inkAmount == 0) {
        //         this._sharpies.splice(i - trashed, 1);
        //         trashed++;
        //     }
        // });
    }

    get sharpies(): Sharpie[] {
        return this._sharpies;
    }
}