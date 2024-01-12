// test regex

// example 1
let textString = 'I am learning JavaScript regular expression.';
let testRegex = /JavaScript/; // regex syntax
let result = testRegex.test(textString);
console.log('result:', result);
// true
// example 2
let testStr = 'Hello, my name is Kevin.';
let testRegex2 = /kevin/;
let result2 = testRegex2.test(testStr);
console.log('result2:', result2); // false because of case sensitive

// ?Todo: Match a Literal String with Different Possibilities

// example 3
let petString = 'Rakib has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
console.log('result3:', result3);

// example 4

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myString);
console.log('result4:', result4);

// !todo: Extract Matches

// example 5
'Rakib, How are you doing?'.match(/Rakib/);
let ourSting = 'Regular expressions';
let ourRegex = /expressions/;
let result5 = ourSting.match(ourRegex);
console.log('result5:', result5);

// Todo: Find More Than the First Match

let repeatString = 'Repeat, Repeat, Repeat';
let repeatRegex = /Repeat/gi;
let result6 = repeatString.match(repeatRegex);
console.log('result6:', result6);

// Todo: Match Anything with Wildcard Period

let humStr = 'I will hum a song';
let hugStr = 'Bear hug';
let huRegex = /hu./;
let result7 = huRegex.test(huRegex);
console.log('result7:', result7);
result7 = huRegex.test(huRegex);
console.log('result7:', result7);

// Todo: Match Single Character with Multiple Possibilities
let bigStr = 'big';
let bagStr = 'bag';
let bugStr = 'bug';
let bogStr = 'bog'; //not bog
let bgRegex = /b[aiu]g/;
// test regex
let result8 = bgRegex.test(bigStr);
console.log('result8:', result8); // true
result8 = bgRegex.test(bagStr);
console.log('result8:', result8); // true
result8 = bgRegex.test(bugStr);
console.log('result8:', result8); // true
result8 = bgRegex.test(bogStr);
console.log('result8:', result8); // false

// match regex

result8 = bigStr.match(bgRegex);
console.log('result8:', result8); // true
result8 = bagStr.match(bgRegex);
console.log('result8:', result8); // true
result8 = bugStr.match(bgRegex);
console.log('result8:', result8); // true
result8 = bogStr.match(bgRegex);
console.log('result8:', result8); // null

// example 9
let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi; // Change this line
let result9 = quoteSample.match(vowelRegex);
console.log('result9:', result9);

// Todo: Match Letters of the Alphabet
let catStr = 'cat';
let batStr = 'bat';
let matStr = 'mat';
let bgRegex2 = /[a-e]at/i;
let result10 = catStr.match(bgRegex2);
console.log('result10:', result10); // true
result10 = batStr.match(bgRegex2);
console.log('result10:', result10); // true
result10 = matStr.match(bgRegex2);
console.log('result10:', result10); // null

// Todo: Match Numbers and Letters of the Alphabet
let jennyStr = 'Jenny8675309';
let myRegex = /[a-z0-9]/gi;
let result11 = jennyStr.match(myRegex);
console.log('result11:', result11);

// Todo: Match Single Characters Not Specified
let quoteSample2 = '3 blind mice.';
let myRegex2 = /[^aeiuo0-9]/gi;
let result12 = quoteSample2.match(myRegex2);
console.log('result12:', result12);

// Todo: Match Characters that Occur One or More Times

let difficultSpelling = 'Mississippi';
let myRegex3 = /s+/gi; // Change this line
let result13 = difficultSpelling.match(myRegex);
console.log('result13:', result13);

// Todo: Match Characters that Occur Zero or More Times
let soccerWord = 'gooooooooal!';
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
let result14 = soccerWord.match(goRegex);

console.log('result14:', result14);
result14 = gPhrase.match(goRegex);
console.log('result14:', result14);
result14 = oPhrase.match(goRegex);
console.log('result14:', result14);

// Todo: Find Characters with Lazy Matching
let text = '<h1>Winter is coming</h1>';
let myRegex4 = /<.*?>/;
let result15 = text.match(myRegex4);
console.log('result15:', result15);

// Todo: Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log('matchedCriminals:', matchedCriminals);
