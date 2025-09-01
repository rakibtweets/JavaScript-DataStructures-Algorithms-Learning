/* 
! Problem statement: find frequency of a character in given String.
* Hashing: Hashing is a technique to store and retrieve data quickly.
*/

//* Brute Force Hashing using string charCodeAt()

function stringHash(s = '', character = '') {
  let hash = Array(256);
  for (const char of s) {
    let charCode = char.charCodeAt();
    if (hash[charCode]) {
      hash[charCode] += 1;
    } else {
      hash[charCode] = 1;
    }
  }
  return hash[character.charCodeAt()] ?? 0;
}

console.log(stringHash('Apple', 'A'));
console.log(stringHash('abcdeabdg', 'a'));
console.log(stringHash('abcdeabdg', 'h'));

function stringHashMap(s = '', chacter) {
  let hash = new Map();
  for (let char of s) {
    let charCode = char.charCodeAt();
    hash.set(charCode, (hash.get(charCode) || 0) + 1);
  }

  return hash.get(chacter.charCodeAt()) ?? 0;
}

console.log(stringHashMap('Apple', 'A'));
console.log(stringHashMap('AAbcdAFddd', 'd'));
