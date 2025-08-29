// ! problem : Abstract digits from a number
/* 
? Time complexity : O(n)
? Space complexity : O(n)
*/

const abstructDigits = (number) => {
  let countDigits = 0;
  let absNumber = Math.abs(number);
  let abstractedDigits = [];
  while (absNumber > 0) {
    lastDigit = absNumber % 10;
    absNumber = Math.floor(absNumber / 10);
    abstractedDigits.push(lastDigit);
    countDigits++;
  }
  return {
    totalDigits: countDigits,
    abstructedDigits: abstractedDigits.reverse()
  };
};

console.log(abstructDigits(12345));
console.log(abstructDigits(234));
