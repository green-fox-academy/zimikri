'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...parameters: any[]) {
    console.log(...parameters);
}

printParams('egy paraméter');
printParams('sok paraméter', 1, 2, [4, 'gizi']);
