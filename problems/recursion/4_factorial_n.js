/* 
!problem: find the factorial of n.
5! = 5*4*3*2*1
1! = 1
?TC => O(N), Since the function is being called n times, and for each function, we have only one printable line that takes O(1) time, so the cumulative time complexity would be O(N)
?Sc => O(N), In the worst case, the recursion stack space would be full with all the function calls waiting to get completed and that would make it an O(N) recursion stack space.
*/

function factorialOfN(num) {
  if (num === 0) return 1;

  return num * factorialOfN(num - 1);
}

console.log(factorialOfN(5));
