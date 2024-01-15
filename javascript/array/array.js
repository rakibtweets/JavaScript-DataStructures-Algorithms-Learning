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

// Todo:Copy Array Items Using slice()

let arrayIntegers = [1, 2, 3, 4, 5];
let arraySliceIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arraySliceIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arraySliceIntegers3 = arrayIntegers.slice(4); // returns [5]
console.log(arraySliceIntegers1, arraySliceIntegers2, arraySliceIntegers3);

// Todo: Iterate Through All an Array's Items Using For Loops

const greatherThanTen = (arr) => {
  let newArr = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(greatherThanTen([2, 12, 8, 14, 80, 0, 1]));

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const elements = arr[i];
    if (elements.indexOf(elem) === -1) {
      newArr.push(elements);
    }
  }

  return newArr;
}

const orginalArray = [
  [3, 2, 3],
  [1, 6, 3],
  [3, 13, 26],
  [19, 3, 9]
];

const orginalArray2 = [
  [10, 8, 3],
  [14, 6, 23],
  [3, 18, 6]
];

const filterArrResult = filteredArray(orginalArray, 18);

console.log(filterArrResult);
