# Merge Sort Algorithm

Merge Sort is a divide and conquer algorithm, It divides the given array into two queal halves and merge the 2 sorted arrays.

There are two main functions in the Merge Sort algorithm:

1. `merge()`: This function is used to merge the two sorted halves into a single sorted array. It assumes that both halves are already sorted and merge both of them.
2. `mergeSort()`: The function divides the array into two parts, `low to mid` and `mid+1 to high`.
   **low:** leftmost index of the array  
    **high:** rightmost index of the array
   **mid:** middle index of the array
   It recursively split the arrray and go from top to bottom until all subarrays size becomes 1. Then it starts merging the subarrays from bottom to top.

### Complexity Analysis

- Time Complexity: O(n log n) in all cases (best, average, and worst).
- Space Complexity: O(n) due to the temporary arrays used for merging.

### Merge Sort Pseudocode

```c
function mergeSort(array, low, high):
    if low >= high return:
        mid = (low + high) / 2
        mergeSort(array, low, mid)
        mergeSort(array, mid + 1, high)

    return merge(array, low, mid, high)
```

```c
   function merge(array, low, mid, high):
    result = []
    left = low
    right = mid + 1

    while left <= mid and right <= high:
        if array[left] <= array[right]:
            result.push(array[left])
            left = left + 1
        else:
            result.push(array[right])
            right = right + 1

    while left <= mid:
        result.push(array[left])
        left = left + 1

    while right <= high:
        result.push(array[right])
        right = right + 1

    for i = low to high:
        array[i] = result[i - low]

    return array

```

### Merge Sort Algorithm By JavaScript

```javascript
function mergeSort(arr = [], low = 0, high = arr.length - 1) {
  if (low >= high) return arr; // Base case: If the array segment has one or no elements, it's already sorted.
  const mid = Math.floor((low + high) / 2); // Find the midpoint of the array segment.

  mergeSort(arr, low, mid); // left half
  mergeSort(arr, mid + 1, high); // right half
  return merge(arr, low, mid, high);
}

function merge(arr = [], low, mid, high) {
  let result = [];
  let left = low;
  let right = mid + 1;

  // two halves: [low...mid] && [mid+1..high]
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
console.log(mergeSort([1, 5, 6, 3, 8, 4, 7, 2])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Dry Run - Merge Sort Visualization

> **Initial Array:** `[5, 2, 4, 1]`  
> **Goal:** Sort in ascending order

---

### 📋 Step 1: Initial Call

**Function:** `mergeSort(arr, 0, 3)`

```
Array State: [5, 2, 4, 1]
              ↑        ↑
           low=0    high=3
```

- **Parameters:** `low = 0`, `high = 3`
- **Mid calculation:** `mid = Math.floor((0 + 3)/2) = 1`
- **Action:** Split into two recursive calls:
  - 🟦 **Left half:** `mergeSort(arr, 0, 1)` → indices 0-1
  - 🟨 **Right half:** `mergeSort(arr, 2, 3)` → indices 2-3

---

### 🟦 Step 2: Process Left Half

**Function:** `mergeSort(arr, 0, 1)`

```
Focus: [5, 2] (indices 0-1)
        ↑  ↑
      low=0 high=1
```

- **Parameters:** `low = 0`, `high = 1`
- **Mid calculation:** `mid = Math.floor((0 + 1)/2) = 0`
- **Split into:**
  - `mergeSort(arr, 0, 0)` → `[5]` ✅ **Base case**
  - `mergeSort(arr, 1, 1)` → `[2]` ✅ **Base case**

### 🔄 Merge Operation: `merge(arr, 0, 0, 1)`

| Step | Compare        | Action           | Result Array   |
| ---- | -------------- | ---------------- | -------------- |
| 1    | `5` vs `2`     | `2 < 5` → take 2 | `[2, ?, ?, ?]` |
| 2    | Copy remaining | take 5           | `[2, 5, ?, ?]` |

**✅ Array after merge:** `[2, 5, 4, 1]`

---

### 🟨 Step 3: Process Right Half

**Function:** `mergeSort(arr, 2, 3)`

```
Focus: [4, 1] (indices 2-3)
        ↑  ↑
      low=2 high=3
```

- **Parameters:** `low = 2`, `high = 3`
- **Mid calculation:** `mid = Math.floor((2 + 3)/2) = 2`
- **Split into:**
  - `mergeSort(arr, 2, 2)` → `[4]` ✅ **Base case**
  - `mergeSort(arr, 3, 3)` → `[1]` ✅ **Base case**

### 🔄 Merge Operation: `merge(arr, 2, 2, 3)`

| Step | Compare        | Action           | Result Array   |
| ---- | -------------- | ---------------- | -------------- |
| 1    | `4` vs `1`     | `1 < 4` → take 1 | `[2, 5, 1, ?]` |
| 2    | Copy remaining | take 4           | `[2, 5, 1, 4]` |

**✅ Array after merge:** `[2, 5, 1, 4]`

---

### 🎯 Step 4: Final Merge

**Function:** `merge(arr, 0, 1, 3)`

```
Merging: [2, 5] with [1, 4]
          ↑  ↑        ↑  ↑
        left half  right half
```

### 🔄 Detailed Merge Process

| Step | Left Pointer | Right Pointer | Compare | Action | Result         |
| ---- | ------------ | ------------- | ------- | ------ | -------------- |
| 1    | `arr[0] = 2` | `arr[2] = 1`  | `1 < 2` | Take 1 | `[1, ?, ?, ?]` |
| 2    | `arr[0] = 2` | `arr[3] = 4`  | `2 < 4` | Take 2 | `[1, 2, ?, ?]` |
| 3    | `arr[1] = 5` | `arr[3] = 4`  | `4 < 5` | Take 4 | `[1, 2, 4, ?]` |
| 4    | `arr[1] = 5` | (exhausted)   | -       | Take 5 | `[1, 2, 4, 5]` |

---

### 🎉 Final Result

```
Original Array: [5, 2, 4, 1]
Sorted Array:   [1, 2, 4, 5]
```

### 📊 Algorithm Summary

| Metric                    | Value      |
| ------------------------- | ---------- |
| **Time Complexity**       | O(n log n) |
| **Space Complexity**      | O(n)       |
| **Total Comparisons**     | 5          |
| **Total Recursive Calls** | 7          |
| **Is Stable?**            | ✅ Yes     |

### 🌳 Call Tree Visualization

```
mergeSort(0,3) [5,2,4,1]
├─ mergeSort(0,1) [5,2]
│  ├─ mergeSort(0,0) [5] ← base case
│  ├─ mergeSort(1,1) [2] ← base case
│  └─ merge(0,0,1) → [2,5,4,1]
├─ mergeSort(2,3) [4,1]
│  ├─ mergeSort(2,2) [4] ← base case
│  ├─ mergeSort(3,3) [1] ← base case
│  └─ merge(2,2,3) → [2,5,1,4]
└─ merge(0,1,3) → [1,2,4,5] ✨
```
