/* 
! problem : Check if a number is a palindrome
? Time complexity : O(log10 n)
? Space complexity : O(1)
*/

const isPalindrome = (number) => {
  let orginalNo = number;
  let reversedNo = 0;
  while (orginalNo > 0) {
    let lastDigit = orginalNo % 10;
    reversedNo = reversedNo * 10 + lastDigit;
    orginalNo = Math.floor(orginalNo / 10);
  }
  return reversedNo === number ? true : false;
};

console.log(isPalindrome(23321));
console.log(isPalindrome(121121));
