// var example 1
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i); // 3

// var example 2
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); // 3

// Let example 1
let printTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printTwo = function () {
      return i;
    };
  }
}
console.log(printTwo());
console.log(i); //2

// Let example 2
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); // block scope
  }
  console.log('Function scope i is: ', i); // function scope
  return i;
}

console.log(checkScope()); // function scope
