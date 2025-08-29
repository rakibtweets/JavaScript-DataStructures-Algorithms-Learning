/* 
!Problem: Print n times using recursion
?TC : O(n)
?SC : O(n) (due to function call stack)
*/

function printNTime(n, count = 1) {
  if (count > n) return;
  //   console.log(count);
  return printNTime(n, count + 1);
}
printNTime(5);

function printNTimeReverse(n) {
  if (n <= 0) return;
  console.log(n);
  return printNTimeReverse(n - 1);
}
printNTimeReverse(5, 6);
