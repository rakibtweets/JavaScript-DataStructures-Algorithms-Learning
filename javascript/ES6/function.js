// normal function
function add(a, b) {
  return a + b;
}
// arrow function
const summation = (a, b) => a + b;

// rest parameter with function parameters
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return `sum of ${args.length} arguments is: ${sum}}`;
}
console.log(sum(1, 2, 3, 4)); //6

// Concise Declarative Functions with ES6
// without es6
const person1 = {
  name: 'Taylor',
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  }
};
// with es6
const person = {
  name: 'Taylor',
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
