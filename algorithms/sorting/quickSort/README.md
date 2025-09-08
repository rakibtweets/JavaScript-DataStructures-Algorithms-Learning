# Quick Sort

Quick Sort is divide-and-conquer algorithm.

## Quick Sort Algorithm

1. Choose a pivot element from the array.
2. Partitioning the array so elements smaller than the pivot go to the left, and elements larger go to the right.
3. Recursively sorting the left and right subarrays.

## Complexity Analysis

- Time Complexity:

  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n^2) (when the smallest or largest element is always chosen as the pivot)

- Space Complexity: O(log n) due to recursive stack space.

## Pseudocode

```js
function quickSort(arr, low, high):
    if low < high:
        pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)   // left subarray
        quickSort(arr, pivotIndex + 1, high)  // right subarray
```

```js

function partition(arr, low, high):
    pivot = arr[low]
    i = low
    j = high
    while i < j:
        while arr[i] <= pivot and i <= high - 1:
            i = i + 1
        while arr[j] > pivot and j >= low + 1:
            j = j - 1
        if i < j:
            swap(arr[i], arr[j])
    swap(arr[low], arr[j])  // place pivot in correct position
    return j

```

## Quick Sort in JavaScript

```js
function quickSort(arr = []) {
  function qs(arr, low, high) {
    if (low < high) {
      let pivotIndex = partition(arr, low, high);
      qs(arr, low, pivotIndex - 1);
      qs(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }
      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }

  qs(arr, 0, arr.length - 1);
  return arr;
}

console.log(quickSort([4, 6, 2, 5, 7, 9, 1, 3]));
```

## Dry Run – Quick Sort Visualization

**Input Array:** `[4, 6, 2, 5, 7, 9, 1, 3]`

---

### Step 1: First Partition

- Pivot = **4**
- Rearranging → `[3, 1, 2, 4, 7, 9, 6, 5]`
- Pivot (4) placed at correct index **3**.

---

### Step 2: Sort Left `[3, 1, 2]`

- Pivot = **3**
- Rearranging → `[2, 1, 3, 4, 7, 9, 6, 5]`
- Pivot (3) placed at index **2**.

---

### Step 3: Sort Left `[2, 1]`

- Pivot = **2**
- Rearranging → `[1, 2, 3, 4, 7, 9, 6, 5]`
- Pivot (2) placed at index **1**.
- Left part sorted ✅

---

### Step 4: Sort Right `[7, 9, 6, 5]`

- Pivot = **7**
- Rearranging → `[1, 2, 3, 4, 5, 6, 7, 9]`
- Pivot (7) placed at index **6**.

---

### Step 5: Sort Left `[5, 6]`

- Pivot = **5**
- Rearranging → `[1, 2, 3, 4, 5, 6, 7, 9]`
- Pivot (5) placed at index **4**.
- Left part sorted ✅

---

### Step 6: Sort Right `[9]`

- Single element → Already sorted ✅

---

### ✅ Final Sorted Array

`[1, 2, 3, 4, 5, 6, 7, 9]`✅ Sorted!

## 🔹 Call Stack Tree Visualization

For input: `[4, 6, 2, 5, 7, 9, 1, 3]`

```pgsql
quickSort([4,6,2,5,7,9,1,3])
└── qs(low=0, high=7)
    ├── partition → pivot=4, index=3
    ├── qs(low=0, high=2)
    │   ├── partition → pivot=3, index=2
    │   ├── qs(low=0, high=1)
    │   │   ├── partition → pivot=2, index=1
    │   │   ├── qs(low=0, high=0)   // stops
    │   │   └── qs(low=2, high=1)   // stops
    │   └── qs(low=3, high=2)       // stops
    └── qs(low=4, high=7)
        ├── partition → pivot=7, index=6
        ├── qs(low=4, high=5)
        │   ├── partition → pivot=5, index=4
        │   ├── qs(low=4, high=3)   // stops
        │   └── qs(low=5, high=5)   // stops
        └── qs(low=7, high=7)       // stops

```
