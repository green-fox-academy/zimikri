'use strict'

// Reuse your Animal class
// Create a Farm class
//     it has list of Animals
//     it has slots which defines the number of free places for animals
//     breed() -> creates a new animal if there's place for it
//     slaughter() -> removes the least hungry animal

import Farm from './Farm';

const SLOTS: number = 5;
const farm: Farm = new Farm(SLOTS);

console.log(farm.getFreeSlots());

fillFarm(farm);
// console.log(farm.slaughter());

console.log(farm);
farm.slaughter();
console.log(farm);


function fillFarm(farm: Farm) {
    const freeSlots: number = farm.getFreeSlots();
    for (let i = 0; i < freeSlots; i++) {
        farm.breed();
    }    
}
