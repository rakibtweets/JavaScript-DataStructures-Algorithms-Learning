var maxFrequency = function (nums, k) {
  let freqMap = new Map();

  // Count frequency of each number
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let maxFreq = 0;
  let uniqueNums = Array.from(freqMap.keys());

  // Try making each unique number the "target" number
  for (let target of uniqueNums) {
    let operations = k;
    let currentFreq = freqMap.get(target); // Start with existing frequency

    for (let num of nums) {
      if (num < target) {
        let needed = target - num;
        if (operations >= needed) {
          operations -= needed;
          currentFreq++; // We can increase this number to match target
        }
      }
    }

    maxFreq = Math.max(maxFreq, currentFreq);
  }

  return maxFreq;
};

// Test cases
console.log(maxFrequency([1, 2, 4], 5)); // Output: 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // Output: 2
console.log(maxFrequency([3, 9, 6], 2)); // Output: 1
