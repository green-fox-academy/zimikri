'use strict'

import DiceSet from './DiceSet';

const diceSet: DiceSet = new DiceSet();

console.log('ori', diceSet.roll());

for (let index = 0; index < diceSet.numOfDices; index++) {
    if (diceSet.getCurrent(index) == 6) continue;

    do {
        diceSet.reroll(index);
        console.log(index, diceSet.getCurrent(index), diceSet.getCurrent());
    } while (diceSet.getCurrent(index) < 6)
}

