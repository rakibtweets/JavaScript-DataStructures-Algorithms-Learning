/*
 *Recursive Bubble Sort
 */

function recursiveBubbleSort(arr, n = arr.length - 1) {
  if (n === 1) return arr;
  let swap = false;
  for (let j = 0; j <= n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      swap = true;
    }
  }
  if (!swap) return;
  return recursiveBubbleSort(arr, n - 1);
}

const unsortedArray = [6, 2, 5, 4, 3, 1];
console.log(recursiveBubbleSort(unsortedArray, unsortedArray.length));
