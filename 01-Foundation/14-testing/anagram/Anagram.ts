'use strict';

export default class Anagram {
    private _str1: string;
    private _str2: string;

    constructor(str1: string, str2: string) {
        this._str1 = str1.toLowerCase();
        this._str2 = str2.toLowerCase();
    }

    check(): boolean {
        if (this._str1.length != this._str2.length) return false;

        const arr1 = this._str1.split('');
        const arr2 = this._str2.split('');

        for (let i = 0; i < arr1.length; i++) {
            const index2 = arr2.indexOf(arr1[i]);
            if (index2 == -1) return false;
            arr2.splice(index2, 1);
        }
        return arr2.length == 0;
    }
}