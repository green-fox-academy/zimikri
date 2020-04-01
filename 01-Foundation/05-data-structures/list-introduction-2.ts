'use strict';

// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
let A: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// Create a new list ('List B') with the values of List A
let B: string[] = [...A];

// Print out whether List A contains Durian or not
if (A.includes('Durian')) {
    console.log('List A contains Durian');
}
else {
    console.log('List A not contains Durian');
}

// Remove Durian from List B
B.splice(B.indexOf('Durian'), 1);

// Add Kiwifruit to List A after the 4th element
A.splice(3, 0, 'Kiwifruit');

// Compare the size of List A and List B
if (A.length > B.length) {
    console.log('List A bigger');
}
else {
    console.log('List A smaller');
}

// Get the index of Avocado from List A
console.log('Index of Avocado in list A: ' + A.indexOf('Avocado'));

// Get the index of Durian from List B
if (B.indexOf('Durian') > -1) {
    console.log('Index of Durian in list B: ' + B.indexOf('Durian'));
}
else {
    console.log('There is no Durian in list B');
}

// Add Passion Fruit and Pomelo to List B in a single statement V1
B = [...B, 'Passion Fruit', 'Pomelo'];

// Add Passion Fruit and Pomelo to List B in a single statement V2
// B.splice(0, 0, 'Passion Fruit', 'Pomelo');
// B.concat(['Passion Fruit', 'Pomelo']);
console.log(B);

// Print out the 3rd element from List A
console.log(A[2]);
