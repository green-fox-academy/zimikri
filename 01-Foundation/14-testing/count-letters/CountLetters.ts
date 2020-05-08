'use strict';

export default class CountLetters {
    private _str: string;

    constructor(str: string) {
        this._str = str;
    }

    count(): Object {
        let strDic: {[key: string]: number} = {};
        for (let i = 0; i < this._str.length; i++) {

            if ((this._str[i] in strDic)) {
                strDic[this._str[i]]++;
            } else {
                strDic[this._str[i]] = 1;
            }
        }

        return strDic;
    }
} 