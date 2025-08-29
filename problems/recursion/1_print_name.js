/* 
! problem: print name 5 times using recursion 

?TC : O(n)
?SC : O(n) (due to function call stack)
*/

function printName(name, count = 5) {
  if (count <= 0) return;
  console.log(name);
  return printName(name, count - 1);
}

printName('Rakib', 4);
