'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...parameters: any[]) {
    console.log(...parameters);
}

printParams('egy paraméter');
printParams('sok paraméter', 1, 2, [4, 'gizi']);

// Examples
// Create array
function createArray(...params: any[]) {
    return params;
}
console.log(createArray(1, 2, 'Gizi', true));

// Concat with glue (like mysql)
function concatWS(glue: string, ...elements: string[]) {
    return elements.join(glue);
}
console.log(concatWS(' ', 'Ez', 'egy', 'szöveg', 'szpészekkel'));
