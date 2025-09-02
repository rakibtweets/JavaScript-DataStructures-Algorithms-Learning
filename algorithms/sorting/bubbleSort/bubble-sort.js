/*
 *Bubble Sort Algorithm
 *The Bubble Sort algorithm is a simple sorting algorithm that repeatedly steps through the list,
 *compares adjacent elements and swaps them if they are in the wrong order.
 *The pass through the list is repeated until the list is sorted.
 */

function bubbleSort(arr = []) {
  const n = arr.length;

  // outer loop
  for (let i = n - 1; i >= 0; i--) {
    // inner loop

    let didSwap = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }

  return arr;
}

console.log(bubbleSort([13, 56, 24, 52, 20, 9]));
console.log(bubbleSort([1, 2, 3, 4, 5]));

function bubbleSortTrace(arr = []) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = false;
    console.log(`\nOuter i=${i} start: [${arr.join(', ')}]`);
    for (let j = 0; j <= i - 1; j++) {
      console.log(` compare j=${j}: ${arr[j]} vs ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        didSwap = true;
        console.log(`  swap -> [${arr.join(', ')}]`);
      } else {
        console.log(`  no swap`);
      }
    }
    if (!didSwap) {
      console.log(' no swaps this pass — array is sorted. breaking early.');
      break;
    }
  }
  return arr;
}

console.log('\nResult:', bubbleSortTrace([13, 56, 24, 52, 20, 9]));
