# Insertion Sort

1. Start with the second element (index 1) of the array.
2. Compare the current element with the elements before it.
3. Shift all larger elements one position to the right to make space for the current element.
4. Insert the current element into its correct position.
5. Repeat steps 2-4 for all elements in the array.
6. The array is sorted when all elements have been processed.

**In short: Insertion Sorts takes the element and places it in the correct position**

## Pseudocode

```c
function insertionSort(array):
    for i from 1 to length(array) - 1:
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
    return array
```

## Time Complexity

- Best Case: O(n) - The array is already sorted.
- Average Case: O(n^2) - The array is in random order.
- Worst Case: O(n^2) - The array is sorted in reverse order.

## Space Complexity

- O(1) - Insertion Sort is an in-place sorting algorithm.

## Insertion Sort Algorithm in Javascript

An example of how to run the insertion sort algorithm in Javascript:

```javascript
function insertionSort(array) {
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
```

## Dry Run - Insertion Sort

Let's dry run the Insertion Sort algorithm on the array: [5, 2, 9, 1, 5, 6]

## Algorithm Recap

- Outer loop (i) → iterates from index 1 to n-1.
  Picks the key = array[i] (the element to insert into the sorted portion).

- Inner loop (j) → shifts elements in the sorted portion (array[0..i-1]) that are greater than key to the right.
  Continues until j < 0 or array[j] ≤ key.

- After the inner loop finishes, key is inserted at the correct position j+1.

# Dry run – Insertion Sort

Let's dry run the **Insertion Sort** algorithm on the array: `[5, 2, 9, 1, 5, 6]`

---

## Algorithm Recap

- **Outer loop (`i`)** → iterates from index `1` to `n-1`.  
  Picks the `key = array[i]` (the element to insert into the sorted portion).

- **Inner loop (`j`)** → shifts elements in the sorted portion (`array[0..i-1]`) that are **greater than `key`** to the right.  
  Continues until `j < 0` or `array[j] ≤ key`.

- After the inner loop finishes, `key` is inserted at the correct position `j+1`.

---

## Pass 1 (outer loop i = 1, key = 2)

Array before pass: `[5, 2, 9, 1, 5, 6]`

- **j=0:** compare `5` and `2` → shift → `[5, 5, 9, 1, 5, 6]`
- j = -1 → stop

Insert key (2) at index `0`:  
➡ `[2, 5, 9, 1, 5, 6]`

---

## Pass 2 (outer loop i = 2, key = 9)

Array before pass: `[2, 5, 9, 1, 5, 6]`

- **j=1:** compare `5` and `9` → no shift → `[2, 5, 9, 1, 5, 6]`

Insert key (9) at index `2`:  
➡ `[2, 5, 9, 1, 5, 6]`

---

## Pass 3 (outer loop i = 3, key = 1)

Array before pass: `[2, 5, 9, 1, 5, 6]`

- **j=2:** compare `9` and `1` → shift → `[2, 5, 9, 9, 5, 6]`
- **j=1:** compare `5` and `1` → shift → `[2, 5, 5, 9, 5, 6]`
- **j=0:** compare `2` and `1` → shift → `[2, 2, 5, 9, 5, 6]`
- j = -1 → stop

Insert key (1) at index `0`:  
➡ `[1, 2, 5, 9, 5, 6]`

---

## Pass 4 (outer loop i = 4, key = 5)

Array before pass: `[1, 2, 5, 9, 5, 6]`

- **j=3:** compare `9` and `5` → shift → `[1, 2, 5, 9, 9, 6]`
- **j=2:** compare `5` and `5` → no shift → `[1, 2, 5, 9, 9, 6]`

Insert key (5) at index `3`:  
➡ `[1, 2, 5, 5, 9, 6]`

---

## Pass 5 (outer loop i = 5, key = 6)

Array before pass: `[1, 2, 5, 5, 9, 6]`

- **j=4:** compare `9` and `6` → shift → `[1, 2, 5, 5, 9, 9]`
- **j=3:** compare `5` and `6` → no shift → `[1, 2, 5, 5, 9, 9]`

Insert key (6) at index `4`:  
➡ `[1, 2, 5, 5, 6, 9]`

---

## Final Result

The sorted array is: `[1, 2, 5, 5, 6, 9]`
