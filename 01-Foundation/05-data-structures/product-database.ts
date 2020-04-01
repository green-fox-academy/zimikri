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
    // How much is the fish?
    // What is the most expensive product?
    // What is the average price?
    // How many products' price is below 300?
    // Is there anything we can buy for exactly 125?
    // What is the cheapest product?

const PRODUCT_DATABASE = new Map<string, number>([
    ['Eggs', 200],
    ['Milk', 200],
    ['Fish', 400],
    ['Apples', 150],
    ['Bread', 50],
    ['Chicken', 550]
]);

function showPriceOfProduct(products, productName: string): void {
    console.log(`The price of ${productName}: ${products.get(productName)}`);
}

function getMostExpensiveProductName(products): string {
    let mostEpensiveProductName: string = '';
    let maxPrice: number = 0;

    products.forEach((value, key) => {
        if(value > maxPrice) {
            mostEpensiveProductName = key;
            maxPrice = value;
        } else if (value == maxPrice) {
            mostEpensiveProductName += `, ${key}`;
        }
    });

    return mostEpensiveProductName;
}

function showMostExpensiveProduct(products): void {
    const mostEpensiveProductName: string = getMostExpensiveProductName(products);
    console.log(`The most expensive product(s): ${mostEpensiveProductName}`);
}

function getPricesArray(products): number[] {
    return [...products.values()];
}

function getAveragePriceOfProducts(pricesArray): number {
    return pricesArray.reduce((sum, value) => sum + value) / pricesArray.length;
}

function showAveragePriceOfProducts(products): void {
    const pricesArray: number[] = getPricesArray(products);
    const averagePriceOfProducts: number = getAveragePriceOfProducts(pricesArray);
    console.log(`The averige price of products: ${averagePriceOfProducts}`);
}

function getHowManyProductsThePriceBelow(pricesArray, maxPrice): number {
    return pricesArray.filter(value => {return value < maxPrice}).length;
}

function showHowManyProductsThePriceBelow(products, maxPrice: number): void {
    const pricesArray: number[] = getPricesArray(products);
    const howManyProductsThePriceBelow: number = getHowManyProductsThePriceBelow(pricesArray, maxPrice);
    console.log(`${howManyProductsThePriceBelow} product(s) below the price of ${maxPrice}`);
}

function hasProductForThePrice(pricesArray: number[], price: number): boolean {
    return pricesArray.indexOf(price) != -1;
}
function showIsThereAnyProductForThePrice(products, price: number): void {
    const pricesArray: number[] = getPricesArray(products);
    const hasProduct = hasProductForThePrice(pricesArray, price);
    console.log(`We can${(hasProduct) ? '' : '\'t'} buy product(s) for the price of ${price}`);
}

function getCheapestProductName(products): string {
    let cheapestProductName: string = '';
    let minPrice: number = 0;

    products.forEach((value, key) => {
        if(value < minPrice || minPrice == 0) {
            cheapestProductName = key;
            minPrice = value;
        } else if (value == minPrice) {
            cheapestProductName += `, ${key}`;
        }
    });

    return cheapestProductName;
}

function showCheapestProduct(products): void {
    const cheapestProduct: string = getCheapestProductName(products);
    console.log(`The cheapest product(s): ${cheapestProduct}`);
}

showPriceOfProduct(PRODUCT_DATABASE, 'Fish');
showMostExpensiveProduct(PRODUCT_DATABASE);
showAveragePriceOfProducts(PRODUCT_DATABASE);
showHowManyProductsThePriceBelow(PRODUCT_DATABASE, 300);
showIsThereAnyProductForThePrice(PRODUCT_DATABASE, 125);
showCheapestProduct(PRODUCT_DATABASE);

export{}