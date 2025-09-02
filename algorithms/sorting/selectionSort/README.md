# Selection Sort

Selection sort is a simple sorting algorithm that works by repeatedly selecting the minimum element from the unsorted portion of the array and moving it to the beginning. The algorithm divides the array into two parts: the sorted part and the unsorted part. Initially, the sorted part is empty, and the unsorted part contains all the elements. The algorithm continues until the entire array is sorted.

Selection Sort Algorithm

1.  Start with the first element as the minimum.
2.  Compare the minimum with the next element. If the next element is smaller, update the minimum.
3.  Continue this for the entire array. Once the end is reached, swap the minimum with the first element.
4.  Move to the next element and repeat the process until the array is sorted.

For Example

Consider the unsorted array [64, 25, 12, 22, 11].

1.  Start with the first element (64) as the minimum.
2.  Compare 64 with the next element (25). Since 25 is smaller, update the minimum to 25.
3.  Continue this for the entire array. The minimum is now 11.
4.  Swap 11 with the first element (64). The array is now [11, 25, 12, 22, 64].
5.  Move to the next element (25) and repeat the process until the array is sorted.

The sorted array is [11, 12, 22, 25, 64].

## Dry Run of Selection Sort

The following dry run will clarify the concepts:

Assume the given array is:  
`{7, 5, 9, 2, 8}`

---

### Outer Loop Iteration 1

- The range is the **whole array starting from the 1st index**.
- The minimum element in this range is **2**.
- Swap 2 with the element at the 1st index (7).

**Array after Iteration 1:**  
`{2, 5, 9, 7, 8}`

---

### Outer Loop Iteration 2

- The range is from the **2nd index to the last index** (since the 1st index is already sorted).
- The minimum element in this range is **5**.
- 5 is already in the correct position, so no swap is needed.

**Array after Iteration 2:**  
`{2, 5, 9, 7, 8}`

---

### Outer Loop Iteration 3

- The range is from the **3rd index to the last index**.
- The minimum element in this range is **7**.
- Swap 7 with the element at the 3rd index (9).

**Array after Iteration 3:**  
`{2, 5, 7, 9, 8}`

---

### Outer Loop Iteration 4

- The range is from the **4th index to the last index**.
- The minimum element in this range is **8**.
- Swap 8 with the element at the 4th index (9).

**Array after Iteration 4:**  
`{2, 5, 7, 8, 9}`

---

✅ So, after **4 iterations** (i.e. `n-1` iterations where `n = size of the array`), the given array is **fully sorted**:  
`{2, 5, 7, 8, 9}`

## Selection Sort – JavaScript Implementation

```javascript
function selectionSort(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([7, 5, 9, 2, 8]));
// Output: [2, 5, 7, 8, 9]
```
