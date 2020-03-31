'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const INGREDIENTS: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];
const HEADER: any[] = [
    { name: 'Ingredient', needsCooling: 'Needs cooling', inStock: 'In stock' }
];

function getMaxColumnnWiths(objects: any[], columnWidths) {
    objects.forEach((oneObject) => {
        Object.entries(oneObject).forEach((value, key) => {
            if (typeof columnWidths.get(value[0].toString()) == 'undefined' || columnWidths.get(value[0].toString()) < value[1].toString().length) {
                columnWidths.set(value[0].toString(), value[1].toString().length);
            }
        });
    });

    return columnWidths;
}

function printLine(rowData, columnWidths, columnSeparator: string = '|', padChar: string = ' ') {
    let line: string = '';
    let width: number = 0;

    [...columnWidths.keys()].forEach((name) => {
        width = columnWidths.get(name);
        line += columnSeparator + padChar + rowData[name] + padChar.repeat(width - rowData[name].toString().length + 1);
    });
    line += columnSeparator;

    console.log(line);
}

function printSeparatorLine(columnWidths) {
    const separatorObject = { name: '-', inStock: '-', needsCooling: '-' };
    printLine(separatorObject, columnWidths, '+', '-');
}

function printHeader(header: any[], columnWidths) {
    console.log();
    printSeparatorLine(columnWidths);
    printLine(header[0], columnWidths);
    printSeparatorLine(columnWidths);
}

function printBody(ingredients: any[], columnWidths) {
    ingredients.forEach((ingredient) => {
        printLine(ingredient, columnWidths);
    });
    printSeparatorLine(columnWidths);
    console.log();
}

function printIngredientsTable(ingredients: any[], header: any[], columnWidths) {
    printHeader(header, columnWidths);
    printBody(ingredients, columnWidths);
}

function printIngredients(ingredients: any[], header: any[]) {
    let columnWidths = new Map<string, number>();
    columnWidths = getMaxColumnnWiths(header, columnWidths);
    columnWidths = getMaxColumnnWiths(ingredients, columnWidths);

    printHeader(header, columnWidths);
    printBody(ingredients, columnWidths);
}

printIngredients(INGREDIENTS, HEADER);