'use strict';

let names: string[] = [];

// Print out the number of elements in the list
console.log(names.length);

// Add William to the list
names.push('William');

// Print out whether the list is empty or not
if (names.length == 0) {
    console.log('Empty list');
}
else {
    console.log('Not empty list');
}

// Add John to the list
names.push('John');

// Add Amanda to the list
names.push('Amanda');

// Print out the number of elements in the list
console.log(names.length);

// Print out the 3rd element
console.log(names[2]);

// Iterate through the list and print out each name
names.forEach(name => {
    console.log(name);
});

// Iterate through the list and print name with number
names.forEach((name, index) => {
    console.log((index+1) + '. ' + name);
});

// Remove the 2nd element
names.splice(1,1);

// Iterate through the list in a reversed order and print out each name
names.reverse().forEach(name => {
    console.log(name);
});

// Remove all elements
names = [];
