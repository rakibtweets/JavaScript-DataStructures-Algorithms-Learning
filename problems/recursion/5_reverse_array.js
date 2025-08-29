/* 
!problem: you are given an array. The task is to reverse the array and print it
*/

//? Solution 1: Using an extra array.

// TC: O(n)
// SC: O(n)

function reverseArray(arr = []) {
  let temArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temArr.push(arr[i]);
  }
  return temArr;
}

// console.log(reverseArray([5, 4, 3, 2, 1]));

// Solution 2: Space-optimized iterative method

function reverseArrayBySwaping(arr = []) {
  let firstEl = 0;
  let lastEl = arr.length - 1;
  while (firstEl < lastEl) {
    let temp = arr[firstEl];
    arr[firstEl] = arr[lastEl];
    arr[lastEl] = temp;
    firstEl++;
    lastEl--;
  }

  return arr;
}

// console.log(reverseArrayBySwaping([7, 5, 3, 2, 1]));

// reverse array using recursion

const reverseArrayByRecursion = (
  arr = [],
  leftEl = 0,
  rightEl = arr.length - 1
) => {
  if (leftEl >= rightEl) return arr;
  let temp = arr[leftEl];
  arr[leftEl] = arr[rightEl];
  arr[rightEl] = temp;

  return reverseArrayByRecursion(arr, leftEl + 1, rightEl - 1);
};

console.log(reverseArrayByRecursion([7, 5, 3]));
