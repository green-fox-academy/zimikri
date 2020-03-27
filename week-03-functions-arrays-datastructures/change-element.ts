'use strict'

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let nums: number[] = [1, 2, 3, 8, 5, 6];

nums = nums.map((value) => {return ((value == 8) ? 4 : value)});
console.log(nums[3]);
