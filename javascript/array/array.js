// add items to an array with push() and unshift()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
arr.push(11);
console.log(arr);
arr.unshift(0);
console.log(arr);

// Remove Items from an Array with pop() and shift()

let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); // remove last element of array
console.log(greetings);
greetings.shift(); // remove first element of array
console.log(greetings);

// Remove Items Using splice() : modify the contents of an array by removing or replacing existing elements and/or adding new elements

// example 1
let array = ['today', 'was', 'not', 'so', 'great'];

const spliceEl = array.splice(2, 2); // remove 2 elements from index 2
console.log(spliceEl); // return removed elements ['not', 'so']

//  example 2
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

const arrayInteger1 = arrayIntegersOriginal1.splice(0, 2);
console.log(arrayInteger1); // return [1, 2]
const arrayInteger2 = arrayIntegersOriginal2.splice(1, 3);
console.log(arrayInteger2); // return [4, 5]

console.log('Original2:', arrayIntegersOriginal2);

// example 3
const arr1 = [2, 4, 5, 1, 7, 5, 2, 1];
const newArr = arr1.splice(1, 4);
console.log(newArr); // return [1, 7, 5, 2]
console.log(arr1); // return [2, 4, 5, 1]

// Todo: Add Items Using splice()
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); // return [10, 11, 12, 13, 14, 15]
