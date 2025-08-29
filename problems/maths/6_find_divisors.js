/* 
!problem : find divisors of a number
? Time Complexity: O(log sqrt(n))
? Space Complexity: O(1)
*/

// brute force solution
/* 
? Time Complexity: O(n))
? Space Complexity: O(1)
*/

const findDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};
console.log(findDivisors(36)); // [ 1, 16, 2, 8, 4 ]

// optimized solution
/* 
? Time Complexity: O(sqrt(n))
? Space Complexity: O(sqrt(n))
*/

const findDivisorsOptimized = (number) => {
  const divisors = [];
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
      if (i !== number / i) {
        divisors.push(number / i);
      }
    }
  }
  return divisors;
};

console.log(findDivisorsOptimized(36)); // [ 1, 36, 2, 18, 3, 12, 4, 9, 6 ]
