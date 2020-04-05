'use strict'

export default class Counter {
    counter: number;
    defaultCounter: number;

    constructor(counter: number = 0) {
        this.counter = counter;
        this.defaultCounter = counter;
    }

    add(amount: number = 1) {
        this.counter += amount;
    }

    get(): string {
        return this.counter.toString();
    }

    reset() {
        this.counter = this.defaultCounter;
    }
}