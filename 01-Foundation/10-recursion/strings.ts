'use strict'

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function changeChar(text: string, counter: number = 0): string {
    if (counter == text.length) return text;

    if (text[counter] == 'x') 
        text = (counter == 0) ? 'y' + text.substring(counter + 1) : text.substring(0, counter) + 'y' + text.substring(counter + 1);
    
    return changeChar(text, counter + 1);
}

console.log(changeChar('xvxrtxXgdkyzx'));
