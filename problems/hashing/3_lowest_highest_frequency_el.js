/* 
!Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Input: [2,2,3,4,4,2] 
lowest el: 3
hight frequency el:2
*/

function findLowestandHighestFrequencyEl(arr = []) {
  let hash = new Map();
  let minEl = 0;
  let minFreq = arr.length;
  let maxEl = 0;
  let maxFreq = 0;
  for (let el of arr) {
    hash.set(el, (hash.get(el) || 0) + 1);
  }

  for (const [el, count] of hash) {
    if (count > maxFreq) {
      maxFreq = count;
      maxEl = el;
    }
    if (count < minFreq) {
      minFreq = count;
      minEl = el;
    }
  }
  console.log('The highest frequency element is:', maxEl);
  console.log('The lowest frequency element is:', minEl);
  return {
    hightFreqEl: maxEl,
    lowFreqEl: minEl
  };
}

console.log(findLowestandHighestFrequencyEl([2, 2, 3, 4, 4, 2]));
