# Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.

## How Bubble Sort Works

1. Start at the beginning of the array.
2. Compare the first two elements.
3. If the first element is greater than the second element, swap them.
4. Move to the next pair of elements and repeat the process.
5. Continue this for the entire array.
6. After each pass, the largest unsorted element will have bubbled up to its correct position.
7. Repeat the process for the remaining unsorted elements.

## Approach:

### The algorithm steps are as follows:

- First, we will select the range of the unsorted array. For that, we will run a loop(say i) that will signify the last index of the selected range. The loop will run backward from index n-1 to 0(where n = size of the array). The value i = n-1 means the range is from 0 to n-1, and similarly, i = n-2 means the range is from 0 to n-2, and so on.
- Within the loop, we will run another loop(say j, runs from 0 to i-1 though the range is from 0 to i) to push the maximum element to the last index of the selected range, by repeatedly swapping adjacent elements.
  Basically, we will swap adjacent elements(`if arr[j] > arr[j+1]`) until the maximum element of the range reaches the end.
- Thus, after each iteration, the last part of the array will become sorted. Like: after the first iteration, the array up to the last index will be sorted, and after the second iteration, the array up to the second last index will be sorted, and so on.
- After (n-1) iteration, the whole array will be sorted.

## Time Complexity

- Best Case: O(n) - The array is already sorted.
- Average Case: O(n^2) - The array is in random order.
- Worst Case: O(n^2) - The array is sorted in reverse order.

## Space Complexity

- O(1) - Bubble Sort is an in-place sorting algorithm.

## Dry run - Bubble Sort

Let's dry run the Bubble Sort algorithm on the array: [5, 1, 4, 2, 8]

## Algorithm Recap

- **Outer loop (`i`)** → controls the number of passes.  
  Runs from `n-1` down to `1`. After each pass, the largest element is placed in its correct position at index `i`.

- **Inner loop (`j`)** → performs adjacent comparisons within the unsorted portion.  
  Runs from `0` to `i-1`. For each comparison:
  - If `arr[j] > arr[j+1]`, **swap**.
  - Else, **no swap**.

---

## Pass 1 (outer loop i = 4)

Array before pass: `[5, 1, 4, 2, 8]`  
Inner loop runs `j = 0 → 3`

- **j=0:** compare `5` and `1` → swap → `[1, 5, 4, 2, 8]`
- **j=1:** compare `5` and `4` → swap → `[1, 4, 5, 2, 8]`
- **j=2:** compare `5` and `2` → swap → `[1, 4, 2, 5, 8]`
- **j=3:** compare `5` and `8` → no swap → `[1, 4, 2, 5, 8]`

➡ Largest element `8` bubbled to the last index (sorted position).

---

## Pass 2 (outer loop i = 3)

Array before pass: `[1, 4, 2, 5, 8]`  
Inner loop runs `j = 0 → 2`

- **j=0:** compare `1` and `4` → no swap → `[1, 4, 2, 5, 8]`
- **j=1:** compare `4` and `2` → swap → `[1, 2, 4, 5, 8]`
- **j=2:** compare `4` and `5` → no swap → `[1, 2, 4, 5, 8]`

➡ Next largest element `5` in correct position.

---

## Pass 3 (outer loop i = 2)

Array before pass: `[1, 2, 4, 5, 8]`  
Inner loop runs `j = 0 → 1`

- **j=0:** compare `1` and `2` → no swap → `[1, 2, 4, 5, 8]`
- **j=1:** compare `2` and `4` → no swap → `[1, 2, 4, 5, 8]`

➡ No swaps so far, but algorithm continues to next pass.

---

## Pass 4 (outer loop i = 1)

Array before pass: `[1, 2, 4, 5, 8]`  
Inner loop runs `j = 0`

- **j=0:** compare `1` and `2` → no swap → `[1, 2, 4, 5, 8]`

➡ No swaps in this pass → algorithm stops early (array already sorted).

---

## Final Result

The sorted array is: `[1, 2, 4, 5, 8]`
