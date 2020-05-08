'use strict';

export default class Sum {
    private _numbers: number[];
    constructor(numbers: number[]) {
        this._numbers = numbers;
    }

    calculateSum(): number {
        if (this._numbers.length == 0) return 0;

        let sum: number = 0;
        this._numbers.forEach(num => {
            sum += num;
        });
        return sum;
    }
}