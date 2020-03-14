'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse(myText: string): string {
    let arr: string[] = myText.split('');
    arr.reverse();
    return arr.join('');
}

function reverseShort(myText: string): string {
    return myText.split('').reverse().join('');
}

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(toBeReversed));

console.log('Short: ' + reverseShort(toBeReversed));

export = reverse;