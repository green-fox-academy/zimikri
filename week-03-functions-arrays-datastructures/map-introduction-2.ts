'use strict';

// Create a map where the keys are strings and the values are strings with the following initial values
// Key	Value
// 978-1-60309-452-8	A Letter to Jo
// 978-1-60309-459-7	Lupus
// 978-1-60309-444-3	Red Panda and Moon Bear
// 978-1-60309-461-0	The Lab
let map = new Map<string, string>([
    ['978-1-60309-452-8',	'A Letter to Jo'],
    ['978-1-60309-459-7',	'Lupus'],
    ['978-1-60309-444-3',	'Red Panda and Moon Bear'],
    ['978-1-60309-461-0',	'The Lab']
]);
    
// Print all the key-value pairs in the following format
// A Letter to Jo (ISBN: 978-1-60309-452-8)
map.forEach((value, key) => {
    console.log(`${value} (ISBN: ${key})`);
});

// Remove the key-value pair with key 978-1-60309-444-3
map.delete('978-1-60309-444-3');

// Remove the key-value pair with value The Lab
map.forEach((value, key) => {
    if (value == 'The Lab') map.delete(key);
});

// Add the following key-value pairs to the map
// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
map.set('978-1-60309-450-4', 'They Called Us Enemy');
map.set('978-1-60309-453-5', 'Why Did We Trust Him?');

// Print whether there is an associated value with key 478-0-61159-424-8 or not
if (map.has('478-0-61159-424-8')) {
    console.log('\nMap has value with key: 478-0-61159-424-8');
}
else {
    console.log('\nMap has no associated value with key: 478-0-61159-424-8');
}

// Print the value associated with key 978-1-60309-453-5
console.log('\nThe value associated with key 978-1-60309-453-5: ' + map.get('978-1-60309-453-5'));

// console.log(map.entries());
