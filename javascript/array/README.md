# Array and It's methods

- **What is array data structure** ?

  Array is a set of collection of data.The `array` is a object type non premitive data.
  According to `geeksforgreek`: An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array

  ![Array image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png)

  **Creating an Array:**
  Using an array literal is the easiest way to create a JavaScript Array.

  ```javascript
  const arrayName = [item1, item2, ...];
  const arrayNumbers = [4, 4,10,5,25,3,...];

  ```

  ### **Access Array elements**

  ```javascript
  let ourArray = ['a', 'b', 'c'];
  let valueAt2ndPosition = ourArray[1];
  ```

  ### **Add Item to an Array with `push()` and `unshift()`**

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
