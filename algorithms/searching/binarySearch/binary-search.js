/**
 * Binary Search Algorithm
 * @param {number[]} sortedArray - The array to search (must be sorted).
 * @param {number} target - The target value to find.
 * @returns {number} - The index of the target value in the array, or -1 if not found.
 */

export function binarySearch(sortedArray, target) {
  let left = 0; // Initialize the left pointer to the beginning of the array.
  let right = sortedArray.length - 1; // Initialize the right pointer to the end of the array.

  while (left <= right) {
    // Continue the search as long as the left pointer is less than or equal to the right pointer.
    const mid = Math.floor((left + right) / 2); // Calculate the middle index of the current search space.

    if (sortedArray[mid] === target) {
      return mid; // If the target is found at the middle index, return the index.
    } else if (sortedArray[mid] < target) {
      left = mid + 1; // If the target is greater than the middle element, narrow the search space to the right half.
    } else {
      right = mid - 1; // If the target is smaller than the middle element, narrow the search space to the left half.
    }
  }

  return -1; // If the target is not found in the array, return -1.
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 11;
const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}.`);
} else {
  console.log(`Target ${targetValue} not found in the array.`);
}
