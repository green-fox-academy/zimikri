'use strict'

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ["Arthur", "Boe", "Chloe"];
const tmp: string = names[0];

//names[0] = names[2];
//names[2] = tmp;

[names[0], names[2]] = [names[2], names[0]];

console.log(names);
