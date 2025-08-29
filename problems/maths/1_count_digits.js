//* Problem Statement: Given an integer N, return the number of digits in N

const countDigitsInNumber = (number) => {
  const digits = number.toString().length;

  return `The number ${number} has ${digits} digits.`;
};

console.log(countDigitsInNumber(12345));
console.log(countDigitsInNumber(0));
console.log(countDigitsInNumber(-9876));

// another approach

const countDigits = (number) => {
  let count = 0;
  let absNumber = Math.abs(number);

  while (absNumber > 0) {
    count = count + 1;
    absNumber = Math.floor(absNumber / 10);
  }
  return `The number ${number} has ${count} digits.`;
};

console.log(countDigits(12345));
console.log(countDigits(0));
console.log(countDigits(-9876));

const optimalCountDigits = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

console.log(optimalCountDigits(12345));
console.log(optimalCountDigits(0));
console.log(optimalCountDigits(-9876));
