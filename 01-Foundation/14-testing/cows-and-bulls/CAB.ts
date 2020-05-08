'use strict'

export default class CAB {
    numToGuess: string;
    state: string;
    counter: number;

    // Just for unit testing we have to enable set numToGuess from outside
    constructor(numToGuess: string = '') {
        this.numToGuess = (numToGuess != '') ? numToGuess : this.getNumToGuess();
        this.state = 'playing';
        this.counter = 0;

        if (numToGuess != '' && numToGuess.match(/[0-9]{4}/) === null) {
            throw 'The string only should countains numbers';
        }
    }

    private getNumToGuess(): string {
        let random = '';
        for (let i = 0; i < 4; i++) {
            // Just to be sure not get 3.000000000001 instead of 3
            random += Math.floor(Math.random() * 10000).toString()[0];
        }

        return random;
    }

    guess(guess: string): string {
        this.counter++;

        if (guess == this.numToGuess) {
            this.state = 'finished';
            return '4 cow';
        }

        let cow: number = 0;
        let bull: number = 0;
        guess.split('').forEach((gValue, i) => {
            if (gValue == this.numToGuess[i]) {
                cow++;
            } else if (this.numToGuess.indexOf(gValue) != -1) {
                bull++;
            }
        });

        return `${cow} cow, ${bull} bull`;
    }
}
