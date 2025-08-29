/* 
!problem: Find the GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers.
?description: The GCD or HCF of two numbers is the largest number that divides both of them without leaving a remainder. It is useful in simplifying fractions, finding common denominators, and solving problems involving divisibility.
*/

const gcd = (num1, num2) => {
  let gcd = 1;
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return `GCD of ${num1} and ${num2} : ${gcd}`;
};

// console.log(gcd(20, 40));

/* 
! Optimized Approach: Euclidean Algorithm
?TC: O(log(min(num1, num2)))
?SC: O(1)
*/

const gcdEuclidean = (num1, num2) => {
  let gcd = 1;
  while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  if (num1 === 0) {
    gcd = num2;
  } else {
    gcd = num1;
  }
  return gcd;
};

console.log(gcdEuclidean(20, 50));
