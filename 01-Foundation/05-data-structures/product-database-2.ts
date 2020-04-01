'use strict';

// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
// Create a map with the following key-value pairs.
    // Product name (key)	Price (value)
    // Eggs	200
    // Milk	200
    // Fish	400
    // Apples	150
    // Bread	50
    // Chicken	550

// Create an application which solves the following problems.
    // Which products cost less than 201? (just the name)
    // Which products cost more than 150? (name + price)

const PRODUCT_DATABASE = new Map<string, number>([
    ['Eggs', 200],
    ['Milk', 200],
    ['Fish', 400],
    ['Apples', 150],
    ['Bread', 50],
    ['Chicken', 550]
]);

function getMoreExpensiveProductsThanPrice(products, minPrice) {
    let tmpProducts = new Map([...products]);
    tmpProducts.forEach((value, key) => {
        if(value <= minPrice) tmpProducts.delete(key);
    });

    return tmpProducts;
}

function renderMapKeyValuePairs(map, showKey: boolean = true, showValue: boolean = true): void {
    map.forEach((value, key) => 
        console.log(`${(showKey) ? key : ''}${(showKey && showValue) ? ': ' : ''}${(showValue) ? value : ''}`)
    );
    console.log();
}

function showProductsMoreExpensiveThanPrice(products, minPrice: number, showKey: boolean = true, showValue: boolean = true): void {
    const moreExpensiveProducts = getMoreExpensiveProductsThanPrice(products, minPrice);
    console.log(`Products cost more than ${minPrice}:`);
    renderMapKeyValuePairs(moreExpensiveProducts, showKey, showValue);
}

function getCheaperProductsThanPrice(products, maxPrice) {
    let tmpProducts = new Map([...products]);
    tmpProducts.forEach((value, key) => {
        if(value > maxPrice) tmpProducts.delete(key);
    });

    return tmpProducts;
}

function showProductNamesCheaperThanPrice(products, maxPrice: number, showKey: boolean = true, showValue: boolean = false) {
    const cheaperProducts = getCheaperProductsThanPrice(products, maxPrice);
    console.log(`Products cost less than ${maxPrice}:`);
    renderMapKeyValuePairs(cheaperProducts, showKey, showValue);
}

showProductNamesCheaperThanPrice(PRODUCT_DATABASE, 201);
showProductsMoreExpensiveThanPrice(PRODUCT_DATABASE, 150);

export{}