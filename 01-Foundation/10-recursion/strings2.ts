'use strict'

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function deleteChar(text: string, delChar: string = 'x', counter: number = 0): string {
    if (counter == text.length) return text;

    if (text[counter] == 'x') {
        text = (counter == 0) ? text.substring(counter + 1) : text.substring(0, counter) + text.substring(counter + 1);
        counter--;
    }
    
    return deleteChar(text, delChar, counter + 1);
}

console.log(deleteChar('xvxrtxXgdkyzx'));
