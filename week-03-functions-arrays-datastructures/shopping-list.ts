'use strict';

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?

const SHOPPING_LIST: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function isItOnList(list: string[], item: string): boolean {
    return (list.map(value => {return value.toUpperCase()}).indexOf(item.toUpperCase()) != -1);
}

function renderAnswer(item: string, onList: boolean): void {
    console.log(`We ${(onList) ? '' : 'don\'t '}have ${item} on the list`);
}

function doWeHave(list: string[], item: string): void {
    const onList: boolean = isItOnList(list, item);
    renderAnswer(item, onList);
}

doWeHave(SHOPPING_LIST, 'Milk');
doWeHave(SHOPPING_LIST, 'bananas');

export{}