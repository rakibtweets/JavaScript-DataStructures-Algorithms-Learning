# Javascript ES6

### comparing scopes of `let`, `var` and `const` keywords

When you declare a variable with the `var` keyword, it is declared globally, or locally if declared inside a function.

The `let` keyword behaves similarly, but with some extra features. When you declare a variable with the `let` keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i); // 3
```

Here the console will display the values `[0, 1, 2]` and `3`.

**problem with var:** This behavior will cause problems if you were to create a function and store it `for` later use inside a for loop that uses the `i` variable. This is because the stored function will always refer to the value of the updated global `i` variable.

As you can see, `printNumTwo()` prints `3`and not `2`. This is because the value assigned to `i` was updated and the `printNumTwo()` returns the global `i` and not the value `i` had when the function was created in the for loop. The `let` keyword does not follow this behavior:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); //2
console.log(i); // 2
```

another example of let scoping

```js
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
```

**Note:** `let` and `const` both scoping are same. `let` offers block-level scoping, `var`, an older construct, provides function-level scoping. On the other hand, `const` declares variables meant to remain constant throughout the program.

#### Visual deference between `var`, `let` and `const`

![var,let and const](https://media.licdn.com/dms/image/D5612AQGZLKjSZOzAgg/article-cover_image-shrink_720_1280/0/1687830010094?e=1710374400&v=beta&t=q67ngU_HZyU68TXYiIg9Yx3ZzEcmHJIAEAyTaTqyUBE)
