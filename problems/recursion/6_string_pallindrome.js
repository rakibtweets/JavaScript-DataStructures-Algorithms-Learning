/* 
!problem: Check if the given string is pallindrom or not.
*/

// Javascript Method approach

const isPalindrome = (str = '') => {
  const reversed = str.split('').reverse().join('');
  console.log(reversed);
  return str === reversed;
};

// console.log(isPalindrome('madam'));

// use for loop method approach

function isStrPallindrome(str = '') {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}

// console.log(isStrPallindrome('ababa'));
// console.log(isStrPallindrome('Hasan'));
// console.log(isStrPallindrome('11211'));

// recursion approach

function isStringPallindrome(string = '', left = 0, right = string.length - 1) {
  if (left >= right) return true;
  if (string[left] !== string[right]) return false;
  return isStringPallindrome(string, left + 1, right - 1);
}

// console.log(isStringPallindrome('madam'));

function isValidPallindrome(string = '') {
  let str = string.toLowerCase().replace(/[^a-z0-9]/gi, '');

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isValidPallindrome('A man, a plan, a canal: Panama'));
console.log(isValidPallindrome('race a car'));
