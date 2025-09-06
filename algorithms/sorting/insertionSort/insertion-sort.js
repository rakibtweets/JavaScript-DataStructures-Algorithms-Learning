/* 
Insertion Sort Algorithm

1. Start with the second element (index 1) as the key.
2. Compare the key with the elements before it.
3. Shift all elements that are greater than the key to the right.
4. Insert the key at its correct position.
5. Repeat for all elements.

*/

function insertionSort(arr = []) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([5, 2, 9, 1, 5, 6]));

function insertionSortShiftMethod(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insertionSortShiftMethod([5, 2, 9, 1, 5, 6]));
