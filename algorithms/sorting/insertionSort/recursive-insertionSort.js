/* 

*Recursive Insertion Sort

*/

function recursiveInsertionSort(arr = [], index = 0, n = arr.length) {
  if (index === n) return arr; // base case
  let j = index;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1]; // swap
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }

  return recursiveInsertionSort(arr, index + 1, n);
}

const unsortedArray = [6, 2, 5, 4, 3, 1];
console.log(recursiveInsertionSort(unsortedArray, 0, unsortedArray.length));
