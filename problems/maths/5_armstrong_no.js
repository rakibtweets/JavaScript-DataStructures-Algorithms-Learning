/* 
! problem : Is Armstrong Number?
? Time Complexity: O(log n)
? Space Complexity: O(1)
*/

const isArmstrong = (num) => {
  let dupNo = num;
  const numDigits = num.toString().length;
  let sum = 0;
  while (dupNo > 0) {
    let digit = dupNo % 10;
    sum = sum + Math.pow(digit, numDigits);
    dupNo = Math.floor(dupNo / 10);
  }
  return num === sum ? true : false;
};

console.log(isArmstrong(153)); // return true
console.log(isArmstrong(112)); // return false
