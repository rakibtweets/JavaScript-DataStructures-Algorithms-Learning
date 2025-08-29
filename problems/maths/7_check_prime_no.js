/* 
! Problem: Check if a number is prime or not
? Time Complexity: O(sqrt(n))
? Space Complexity: O(1)
*/

// brute force solution
/* 
? Time Complexity: O(n)
? Space Complexity: O(1)
*/

const isPrimeNo = (number) => {
  let count = 0;
  if (number < 1) return false;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
      console.log(count);
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPrimeNo(7));
// console.log(isPrimeNo(13));
// console.log(isPrimeNo(10));

// optimized solution
/*
? Time Complexity: O(sqrt(n))
? Space Complexity: O(1)
*/

const isPrimeNoOptimized = (number) => {
  let count = 0;
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) {
      count++;
      if (i !== number / i) {
        count++;
      }
    }
  }
  if (count === 2) {
    return `${number} is a prime number`;
  } else {
    return `${number} is not a prime number`;
  }
};

console.log(isPrimeNoOptimized(3));
console.log(isPrimeNoOptimized(8));
console.log(isPrimeNoOptimized(11));
