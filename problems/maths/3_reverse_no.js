/* 
! problem : Reverse a number
? Time complexity : O(log n)
? Space complexity : O(1)
*/

const reverseNumber = (number) => {
  let reverseNum = 0;
  let numToReverse = Math.abs(number);
  while (numToReverse > 0) {
    let lastDigit = numToReverse % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    numToReverse = Math.floor(numToReverse / 10);
  }
  return number < 0 ? -reverseNum : reverseNum;
};

console.log(reverseNumber(12345)); // { originalNo: 12345, reverseNumber: 54321 }
console.log(reverseNumber(-6789)); // { originalNo: -6789, reverseNumber: -9876 }
console.log(reverseNumber(1534236469));
