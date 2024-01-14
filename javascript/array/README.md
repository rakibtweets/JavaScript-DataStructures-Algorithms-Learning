# Array and It's methods

1. **What is array data structure** ?

Array is a set of collection of data.The `array` is a object type non premitive data.
According to `geeksforgreek`: An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array

![Array image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png)

- **Creating an Array:**
  Using an array literal is the easiest way to create a JavaScript Array.

```javascript
const arrayName = [item1, item2, ...];
const arrayNumbers = [4, 4,10,5,25,3,...];

```

- ### **Access Array elements**

```javascript
let ourArray = ['a', 'b', 'c'];
let valueAt2ndPosition = ourArray[1];
```

2. ### **Add Item to an Array with `push()` and `unshift()`**

```javascript
let ourArray = ['a', 'b', 'c'];
ourArray.push('d');
console.log(ourArray); // ['a', 'b', 'c','d']
```

`array.push()` method add item at the end of an array

```javascript
let ourArray = ['b', 'c', 'd'];
ourArray.unshift('a');
console.log(ourArray); // ['a', 'b', 'c','d']
```

`array.unshift()` method add item at the start of an array.

3. ### **Remove Item form an Array with `pop()` and `shift()`**

```javascript
let ourArray = ['a', 'b', 'c'];
ourArray.pop('c');
console.log(ourArray); // ['a', 'b']
```

`array.pop()` method remove item from the end of an array

```javascript
let ourArray = ['b', 'c', 'd'];
ourArray.shift('b');
console.log(ourArray); // [ 'c','d']
```

`array.shift()` method remove item from the start of an array.

4. ### **Remove Items Using `splice()`**

The `splice()` method `adds/removes` items to/from an array, and then returns the removed item. The first argument specifies the array position/index for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

```javascript
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 3); // remove 2 elements from index 2
console.log(spliceEl); // return removed elements ['not', 'so']
```

**Note:** `array.splice()` method modifies the original array and returns the deleted array.

5. ### **purpose of the arrat `slice()` method**

The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end of the array

Some of the examples of this method are,

```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

another example

```javascript
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); // return ['snow', 'sleet']
```
