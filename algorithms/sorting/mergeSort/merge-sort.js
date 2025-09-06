/*
 *Merge Sort: Divide and Conquer
 * Description: This code implements the Merge Sort algorithm, which is a divide-and-conquer sorting algorithm. It recursively divides the array into halves, sorts each half, and then merges the sorted halves back together.
 * Time Complexity: O(n log n) in all cases (best, average, worst)
 * Space Complexity: O(n) due to the temporary arrays used for merging.
 */

/**
 * Merge Sort Function: Divides the array into halves, sorts each half, and merges them.
 * @param {number[]} arr - The array to be sorted.
 * @param {number} low - The starting index of the array segment to be sorted.
 * @param {number} high - The ending index of the array segment to be sorted.
 * @method merge - Merges two sorted halves of the array.
 * @method mergeSort - Recursively sorts the array using the merge sort algorithm.
 * @returns {number[]} - The sorted array.
 */

function mergeSort(arr = [], low = 0, high = arr.length - 1) {
  if (low >= high) return arr; // Base case: If the array segment has one or no elements, it's already sorted.
  const mid = Math.floor((low + high) / 2); // Find the midpoint of the array segment.

  mergeSort(arr, low, mid); // left half
  mergeSort(arr, mid + 1, high); // right half
  return merge(arr, low, mid, high);
}

/**
 * Merge Function: Merges two sorted halves of an array into a single sorted segment.
 * @param {number[]} arr - The array containing the two halves to be merged.
 * @param {number} low - The starting index of the first half.
 * @param {number} mid - The ending index of the first half.
 * @param {number} high - The ending index of the second half.
 *@return {number[]} - The merged and sorted array segment.
 */

function merge(arr = [], low, mid, high) {
  let result = [];
  let left = low;
  let right = mid + 1;

  // two halves: [low...mid] && [mid+1..hight]
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
      result.push(arr[right]);
      right++;
    }
  }
  // If there are remaining elements in the left half, add them to the result.
  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }
  // If there are remaining elements in the right half, add them to the result.
  while (right <= high) {
    result.push(arr[right]);
    right++;
  }

  // Copy the sorted elements back into the original array segment.
  for (let i = low; i <= high; i++) {
    arr[i] = result[i - low];
  }
  return arr;
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // Output: [3, 9, 10, 27, 38, 43, 82]
console.log(mergeSort([1, 5, 6, 3, 8, 4, 7, 2])); // Output: [3, 9, 10, 27, 38, 43, 82]
