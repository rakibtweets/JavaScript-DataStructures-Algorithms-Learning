/*
!Problem statement: Given an array, we have found the number of occurrences of each element in the array.
 *Hashing: Hashing is a technique to store and retrieve data quickly.
 */

function countDuplicat(number, items) {
  let count = 0;
  for (let i = 0; i <= items.length - 1; i++) {
    if (items[i] === number) {
      count++;
    }
  }
  return count;
}

console.log(countDuplicat(4, [2, 3, 2, 4, 5, 4, 7]));
console.log(countDuplicat(10, [2, 3, 2, 4, 5, 4, 7]));

//* Object hasing method
function countFrequencyByObjectHash(n, arr = []) {
  let hash = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    let num = arr[i];
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  return hash[n] ? hash[n] : 0;
}

console.log(countFrequencyByObjectHash(10, [2, 3, 2, 2, 3, 4, 5, 4, 7]));
console.log(countFrequencyByObjectHash(2, [2, 3, 2, 2, 3, 4, 5, 4, 7]));

//*Array method Hashing
//* TC: O(n)
//* SC: O(n)
function countFrequencyByArrayHash(n, arr = []) {
  let hash = []; // hash array
  for (let item of arr) {
    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
  }
  return hash[n] ?? 0;
}

console.log(countFrequencyByArrayHash(10, [2, 3, 2, 2, 3, 4, 5, 4, 7]));
console.log(countFrequencyByArrayHash(2, [2, 3, 2, 2, 3, 4, 5, 4, 7]));

//* js map method
//* TC: O(n)
//* SC: O(n)
function countFrequencyByMap(n, arr = []) {
  let hash = new Map();
  for (const item of arr) {
    hash.set(item, (hash.get(item) || 0) + 1);
  }
  return hash.get(n) ?? 0;
}

// console.log(countFrequencyByMap(10, [2, 3, 2, 2, 3, 4, 5, 4, 7]));
console.log(countFrequencyByMap(4, [2, 3, 2, 2, 3, 4, 5, 4, 7]));
