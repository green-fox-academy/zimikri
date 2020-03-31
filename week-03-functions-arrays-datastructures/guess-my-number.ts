'use strict';
// Guess my number
// Exercise
// Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.

// Make the range customizable (ask for it before starting the guessing).
// You can add lives. (optional)
// Example
// I've the number between 1-100. You have 5 lives.

// > 20
// Too high. You have 4 lives left.

// > 10
// Too low. You have 3 lives left.

// > 15
// Congratulations. You won!

let LIVES: number = 5;
let NUMBER_TO_GUESS: number = -1;

function isValidRange(range: string[]): boolean {
    if (range.length != 2 || parseInt(range[0]).toString() != range[0] || parseInt(range[1]).toString() != range[1]) {
        console.log('Improper range format!');
        return false;
    }
    if (parseInt(range[1]) - parseInt(range[0]) < 10) {
        console.log('The minimum difference is 10!');
        return false;
    }
    
    return true;
}

function setNumberToGuess(userInput: any) {
    let range: string[] = userInput.toString().trim().split('-')
    const validRange: boolean = isValidRange(range);

    if (validRange) {
        NUMBER_TO_GUESS = Math.round(Math.random() * (parseInt(range[1]) - parseInt(range[0]))) + parseInt(range[0]);
        console.log(`\n*** Guess my number between ${range[0]} and ${range[1]} ***`);
        console.log('Hint:', NUMBER_TO_GUESS);
    }
}

function checkIfGuessed(userInput: any): { response: boolean; message: string; } {
    const guess: number = parseInt(userInput.toString().trim());
    let textHighLow: string = '';

    if (guess == NUMBER_TO_GUESS) {
        return { response: true, message: '\nCongratulations. You won!\n' }
    } else if (guess < NUMBER_TO_GUESS) {
        LIVES--;
        textHighLow = 'low';
    } else {
        LIVES--;
        textHighLow = 'high';
    }

    return { response: false, message: `Too ${textHighLow}. You have ${LIVES} lives left.\n` };
}

function printMessage(message: string) {
    if (LIVES >= 1) {
        console.log(message);
    } else {
        console.log('This was your last chance, unfortunately you died :(\n');
    }
}

function startGame() {
    const stdin = process.openStdin();
    let guessed: { response: boolean; message: string; } = { response: false, message: '' };
    
    console.log('\nPlease add range (format: 1-100)');
    stdin.addListener('data', (userInput: any) => {
        if (NUMBER_TO_GUESS == -1) {
            setNumberToGuess(userInput);
        } else {
            guessed = checkIfGuessed(userInput);
            printMessage(guessed.message);
        }

        if (guessed.response || LIVES < 1) {
            stdin.pause();
        }        
    });
}

startGame();

export{}
