// Create a map with the following key-value pairs.

// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982
// Create an application which solves the following problems.

let phoneBook = new Map([
    ['William A. Lathan', '405-709-1865'],
    ['John K. Miller', '402-247-8568'],
    ['Hortensia E. Foster', '606-481-6467'],
    ['Amanda D. Newland', '319-243-5613'],
    ['Brooke P. Askew', '307-687-2982']
]);

// What is John K. Miller's phone number?
function getNumberByName(name:string): string {
    return phoneBook.get(name);
}
console.log('John K. Miller\'s number:', getNumberByName('John K. Miller') );

// Whose phone number is 307-687-2982?
function getNameByNumber(phoneNumber:string): string {
    for (let [k, v] of phoneBook) {
        if (v === phoneNumber) { 
            return k; 
        }
    }  
    return 'This number not in phonebook';
}
console.log(getNameByNumber('307-687-2982') );


// Do we know Chris E. Myers' phone number?
function hasInPhonebook(name:string): string {
    return (phoneBook.has(name)) ? `There is number for ${name} in phonebook` : `There is no number for ${name} in phonebook`;
}
console.log(hasInPhonebook('Chris E. Myers') );

