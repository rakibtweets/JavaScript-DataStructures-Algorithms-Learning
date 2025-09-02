/*
 *Selection Sort Algorithm
 *1. Start with the first element as the minimum.
 *2. Compare the minimum with the next element. If the next element is smaller, update the minimum.
 *3. Continue this for the entire array. Once the end is reached, swap the minimum with the first element.
 *4. Move to the next element and repeat the process until the array is sorted.
 */

/*
!Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm. 
*/

function selectionSort(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([13, 46, 24, 52, 20, 9]));
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
