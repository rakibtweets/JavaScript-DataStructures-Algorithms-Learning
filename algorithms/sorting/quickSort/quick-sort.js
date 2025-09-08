/*
 *Quick Sort Algorithm: An efficient sorting algorithm using divide-and-conquer approach.
 * Time Complexity: O(N*logN), where N = size of the array.
 * Space Complexity: O(1)
 */

// quick sort function recursively sorts an array

//* qs is recursive helper function for quick sort
function qs(arr = [], low = 0, high) {
  //* base condition: only preceed if there are at least 2 element to sort
  if (low < high) {
    let pivotIndex = partition(arr, low, high); //* partition array: return the final index of pivot
    qs(arr, low, pivotIndex - 1); //* * recursively sort the right sub array(element > pivot)
  }
}
//* Main quick sort function (entry point)
function quickSort(arr = []) {
  qs(arr, 0, arr.length - 1);
  return arr;
}

/*
 * Partition function:
 * -------------------
 * - Chooses the first element as pivot.
 * - Rearranges elements so that:
 *     → All elements <= pivot are on the left
 *     → All elements > pivot are on the right
 * - Returns the pivot's final index.
 */
function partition(arr, low, high) {
  let pivot = arr[low]; //* choose pivot
  let i = low; //* left pointer
  let j = high; // * right pointer

  //* keep movinng i (to right) and j (to left) until they cross
  while (i < j) {
    // * move i untill we find an element greater and pivot
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    //* Move j until we find an element smaller or equal to pivot
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    //* Swap misplaced elements
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  //* Place pivot in its correct position (swap pivot with arr[j])
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j; // * return final index
}

console.log(quickSort([8, 2, 6, 4, 5, 3, 1, 7]));
