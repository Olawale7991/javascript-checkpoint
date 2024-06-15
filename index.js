// Reverse a String: Write a function that reverses a given string.
// const add = ['wale', 'rasak', 'shina'];
// add.unshift('tosin')
// add.reverse() 


// Count Characters: Create a function that counts the number of characters in a string.
// console.log(add.length);


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// const array = [10, 40, 20, 5, 23, 70, 38]
// console.log(array[3], array[5]);

// Sum of Array: Create a function that calculates the sum of all elements in an array.
const num = [10, 40, 20, 5, 23, 70, 38];

let sum = 0;
let i = 0;

while (i < num.length) {
    sum += num[i];
    i++
}

console.log(sum);
// const sum = 0;

// for (let i = 0; i < num.length; i++){
//     sum += num[i];
// }
// console.log(sum);

// Original array with mixed types
const mixedArray = [1, 'two', 3, 'four', 5, 'six', 7, true, null, 8, undefined, '9'];

function isNumber(element) {
  return typeof element === 'number';
}
const numbersArray = mixedArray.filter(isNumber);

console.log(numbersArray); 