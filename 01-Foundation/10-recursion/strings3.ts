'use strict'

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

function adjacentChar(text: string, counter: number = 1): string {
    if (counter == text.length) return text;

    text = text.substring(0, counter) + '*' + text.substring(counter + 1);
    counter++;
    
    return adjacentChar(text, counter + 1);
}

console.log(adjacentChar('xvxrtxXgdkyzx'));
