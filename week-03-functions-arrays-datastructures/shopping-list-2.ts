'use strict';

// Represent the following products with their prices
//     Product    Amount
//     Milk    1.07
//     Rice    1.59
//     Eggs    3.14
//     Cheese    12.60
//     Chicken Breasts    9.40
//     Apples    2.31
//     Tomato    2.58
//     Potato    1.75
//     Onion    1.10

// Represent Bob's shopping list
//     Product    Amount
//     Milk    3
//     Rice    2
//     Eggs    2
//     Cheese    1
//     Chicken Breasts    4
//     Apples    1
//     Tomato    2
//     Potato    1

// Represent Alice's shopping list
//     Product    Amount
//     Rice    1
//     Eggs    5
//     Chicken Breasts    2
//     Apples    1
//     Tomato    10

// Create an application which solves the following problems.
//     How much does Bob pay?
//     How much does Alice pay?
//     Who buys more Rice?
//     Who buys more Potato?
//     Who buys more different products?
//     Who buys more products? (piece)

const PRODUCT_PRICES = new Map<string, number> ([
    ['Milk', 1.07],
    ['Rice', 1.59],
    ['Eggs', 3.14],
    ['Cheese', 12.60],
    ['Chicken Breasts', 9.40],
    ['Apples', 2.31],
    ['Tomato', 2.58],
    ['Potato', 1.75],
    ['Onion', 1.10]
]);
const LIST_OF_BOB = new Map<string, number> ([
    ['Milk', 3],
    ['Rice', 2],
    ['Eggs', 2],
    ['Cheese', 1],
    ['Chicken Breasts', 4],
    ['Apples', 1],
    ['Tomato', 2],
    ['Potato', 1]
]);
const LIST_OF_ALICE = new Map<string, number> ([
    ['Rice', 1],
    ['Eggs', 5],
    ['Chicken Breasts', 2],
    ['Apples', 1],
    ['Tomato', 10]
]);
// It's useful, because we can add more shopping list
const SHOPPING_LISTS = new Map ([
    ['Bob', LIST_OF_BOB],
    ['Alice', LIST_OF_ALICE]
]);

function getPaidAmount(productPrices, shoppingList): number {
    let paidAmount: number = 0;

    shoppingList.forEach((value, key) => {
        paidAmount += productPrices.get(key) * value
    });

    return paidAmount;
}

function showHowMuchPersonPaid(person: string, productPrices, shoppingList): void {
    const paidAmount: number = getPaidAmount(productPrices, shoppingList);
    console.log(`${person} paid: ${paidAmount}`);
}

function getWhoBuysMoreFrom(itemName: string, shoppingLists): string {
    let buysMoreName: string = '';
    let itemCountOnList: number = 0;
    
    shoppingLists.forEach((shoppingList, name) => {
        if (typeof shoppingList.get(itemName) != 'undefined' && shoppingList.get(itemName) > itemCountOnList) {
            itemCountOnList = shoppingList.get(itemName);
            buysMoreName = name;
        }
    });

    return buysMoreName;
}

function showWhoBuysMoreFrom(itemName: string, shoppingLists): void {
    const whoBuysMoreName: string = getWhoBuysMoreFrom(itemName, shoppingLists);
    console.log(`${whoBuysMoreName} buys more from ${itemName}.`);
}

function getWhoBuysMoreDifferentProducts(shoppingLists): string {
    let buysMoreName: string = '';
    let itemKindOnList: number = 0;

    shoppingLists.forEach((shoppingList, name) => {
        if (shoppingList.size > itemKindOnList) {
            itemKindOnList = shoppingList.size;
            buysMoreName = name;
        }
    });

    return buysMoreName;
}

function showWhoBuysMoreDifferentProducts(shoppingLists) {
    const buysMoreDifferentProductsName: string = getWhoBuysMoreDifferentProducts(shoppingLists);
    console.log(`${buysMoreDifferentProductsName} buys more different products`);
}

function getWhoBuysMorePieces(shoppingLists): string {
    let buysMoreName: string = '';
    let maxCountOfPieces: number = 0;

    shoppingLists.forEach((shoppingList, name) => {
        const countOfPiecesInList: number = [...shoppingList.values()].reduce((sum, itemCount) => sum + itemCount);
        if (countOfPiecesInList > maxCountOfPieces) {
            maxCountOfPieces = countOfPiecesInList;
            buysMoreName = name;
        }
    });

    return buysMoreName;
}

function showWhoBuysMorePieces(shoppingLists) {
    const buysMoreDifferentProductsName: string = getWhoBuysMorePieces(shoppingLists);
    console.log(`${buysMoreDifferentProductsName} buys more pieces of products`);
}

showHowMuchPersonPaid('Bob', PRODUCT_PRICES, LIST_OF_BOB);
showHowMuchPersonPaid('Alice', PRODUCT_PRICES, LIST_OF_ALICE);
showWhoBuysMoreFrom('Rice', SHOPPING_LISTS);
showWhoBuysMoreFrom('Potato', SHOPPING_LISTS);
showWhoBuysMoreDifferentProducts(SHOPPING_LISTS);
showWhoBuysMorePieces(SHOPPING_LISTS);

export{}