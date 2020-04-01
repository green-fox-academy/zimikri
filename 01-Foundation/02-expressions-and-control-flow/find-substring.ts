'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string) : number {
    let place: number = -1;
    let keywordIndex: number = 1;

    for (let index = 0; index <= str.length - keyword.length; index++) {
        if (str[index] == keyword[0]) {
            place = index;
            keywordIndex = 1;
            
            while (place > -1 && keywordIndex < keyword.length) {
                if (str[index + keywordIndex] != keyword[keywordIndex]) {
                    place = -1;
                }
                keywordIndex++;
            }
            if (place > -1) {
                return place;
            }
        }
    }
  return place;
}

console.log('Place: ' + substr("this is what I'm searching in", "searching"));

console.log('Place: ' + substr("this is what I'm searching in", "not"));