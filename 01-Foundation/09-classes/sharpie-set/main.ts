'use strict'

// Reuse your Sharpie class
// Create SharpieSet class
//     it contains a list of Sharpie
//     countUsable() -> sharpie is usable if it has ink in it
//     removeTrash() -> removes all unusable sharpies

import Sharpie from './Sharpie';
import SharpieSet from './SharpieSet';

const sharpieSet: SharpieSet = new SharpieSet();
const colors: string[] = ['red', 'green', 'blue', 'black'];

for (let i = 1; i <= 5; i++) {
    let sharpie: Sharpie = new Sharpie(
        colors[Math.floor(Math.random() * 4)],
        Math.floor(Math.random() * 4) + 1,
        Math.floor(Math.random() * 3) * (Math.floor(Math.random() * 50) + 1)
    )
    
    sharpieSet.add(sharpie);
}

console.log(sharpieSet.sharpies);
console.log(`Usable: ${sharpieSet.countUsable()}`);
console.log(`Unusable: ${sharpieSet.sharpies.length - sharpieSet.countUsable()}`);
sharpieSet.removeTrash();
console.log('After trash:');
console.log(sharpieSet.sharpies);


