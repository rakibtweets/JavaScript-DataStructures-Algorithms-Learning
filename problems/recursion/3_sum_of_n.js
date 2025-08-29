/* 
!Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

*/

const sumOfN = (number, sum = 0) => {
  if (number <= 0) return sum;
  sum = sum + number;
  console.log(sum);
  return sumOfN(number - 1, sum);
};

console.log(sumOfN(5));

// without recursion

function summationOfN(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(summationOfN(5));

function sumOfNumber(number) {
  let sum = 0;
  let i = 1;
  while (i <= number) {
    sum = sum + i;
    i++;
  }
  return sum;
}
console.log(sumOfNumber(5));
