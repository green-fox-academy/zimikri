'use strict'

// Create 5 trees
// Store the data of them in variables in your program
// for every tree the program should store its'
//     type
//     leaf color
//     age
//     sex
// you can use just variables, or lists and/or maps


const trees: any[] = [];
let attributes = new Map<string, any>();

for (let i = 1; i <= 5; i++) {
    attributes = new Map<string, any>([
        ['type', `type ${i}`],
        ['leaf color', `leaf color ${i}`],
        ['age', i * 2 + 12],
        ['sex', `sex ${i}`],
    ]);
    
    trees.push(attributes);
}

console.log(trees);
