'use strict';

// Create a function that
    // - takes the name of a CSV file as a parameter,
    //   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - returns the year when the most births happened.
    //   - if there were multiple years with the same number of births then return any one of them

    // You can find such a CSV file in this directory named births.csv
    // If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

const fs = require('fs');
const FILE_PATH: string = 'data/births.csv';

function readFile(filePath: string): string {
    let fileContent: string = '';

    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.log(`Unable to read file: ${filePath}`);
    }

    return fileContent;
}

function getYearsMap(fileContent: string) {
    const yearRegex = /(\d{4})/g;
    const yearArray: string[] = fileContent.match(yearRegex);
    let yearsMap = new Map<string, number>();

    yearArray.forEach(year => {
        if (yearsMap.has(year)) {
            yearsMap.set(year, yearsMap.get(year) + 1);
        } else {
            yearsMap.set(year, 1);
        }
    });

    return yearsMap;
}

function getYearsMostBirth(yearsMap) {
    let yearsMostBirthSet = new Set<string>();
    let maxCount: number = 0;

    for (const [key, value] of yearsMap) { 
        if (value == maxCount) {
            yearsMostBirthSet.add(key);
        } else if (value > maxCount) {
            yearsMostBirthSet.clear();
            yearsMostBirthSet.add(key);
            maxCount = value;
        }
    }

    return yearsMostBirthSet;
}

function printYearsMostBirth(filePath: string) {
    const fileContent: string = readFile(filePath);
    const yearsMap = getYearsMap(fileContent);
    const yearsMostBirth = getYearsMostBirth(yearsMap);
    console.log(...yearsMostBirth);
}

printYearsMostBirth(FILE_PATH);

export{};