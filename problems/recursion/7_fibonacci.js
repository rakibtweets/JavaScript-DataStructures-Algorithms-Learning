/* 
!problem: Fibonacci Number
? fibonacci numbers: 0 1 1 2 3 5 8 13 21.......
*/

function nthFibonacci(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(nthFibonacci(7));

function nthFibonacciRecursion(n) {
  if (n <= 1) {
    return n;
  }
  return nthFibonacciRecursion(n - 1) + nthFibonacciRecursion(n - 2);
}
// console.log(nthFibonacciRecursion(7));

function fibonacciSeries(n) {
  let series = [];
  series[0] = 0;
  series[1] = 1;
  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}

console.log(fibonacciSeries(7));
