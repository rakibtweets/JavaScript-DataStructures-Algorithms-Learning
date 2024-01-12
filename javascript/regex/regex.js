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

// Todo: Match Beginning String Patterns
let firstString = 'Ricky is first and can be found.';
let firstRegex = /^Ricky/;
let notFirst = "You can't find Ricky now.";
let result16 = firstRegex.test(firstString);
console.log('result16:', result16);
result16 = firstRegex.test(notFirst);
console.log('result16:', result16);

// Todo: Match Ending String Patterns
let theEnding = 'This is a never ending story';
let lastRegex = /story$/;
result16 = lastRegex.test(theEnding);
console.log('result16:', result16);
let noEnding = 'Sometimes a story will have to end';
result16 = lastRegex.test(noEnding);
console.log('result16:', result16);

// Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = '42';
let varNames = 'important_var';
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));
console.log(varNames.match(shortHand).length);

shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// Todo: Match Everything But Letters and Numbers

let quoteSample3 = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/gi; // or /[^a-z0-9]/gi
let result17 = quoteSample3.match(nonAlphabetRegex).length;
console.log('result17:', result17);

// Todo: Match All Numbers

let numString = 'Your sandwich will be $5.00';
let numRegex = /\d/gi;
let nonRegex = /\D/gi;
let result18 = numString.match(numRegex);
console.log('result18:', result18);
result18 = numString.match(nonRegex).length;
console.log('result18:', result18);

// Todo: Restrict Possible Usernames

let userName = 'JackOfAllTrades';
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
let userResult = userCheck.test(userName);
console.log('userResult:', userResult);

// Todo: Match Whitespace
let whiteSpace = 'Whitespace. Whitespace everywhere!';
let spaceRegex = /\s/gi;
let spaceResult = whiteSpace.match(spaceRegex);
console.log('spaceResult:', spaceResult);

// Todo: Specify Upper and Lower Number of Matches

let a4 = 'aaaah';
let a2 = 'aah';
let multipleA = /a{3,5}h/;
console.log(multipleA.test(a4));
console.log(multipleA.test(a2));

// other example
let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6}\sno/;
console.log(ohRegex.test(ohStr));

// Todo: Specify Only the Lower Number of Matches
let a5 = 'haaaaah';
let a3 = 'haah';
let a100 = 'h' + 'a'.repeat(100) + 'h';
let multipleA2 = /ha{3,}h/i;
console.log(multipleA2.test(a5));
console.log(multipleA2.test(a3));
console.log(multipleA2.test(a100));

// Todo: Specify Exact Number of Matches
let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/i;
console.log(timRegex.test(timStr));

// Todo: Check for All or None
let favWord = 'favorite';
let favRegex = /favou?rite/;
console.log(favRegex.test(favWord));

// Todo: Positive and Negative Lookahead

let quit = 'qu';
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

// another example
let password = 'abc123';
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

// another example 2
let sampleWord = 'astronaut12';
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result19 = pwRegex.test(sampleWord);
console.log('result19:', result19);

// Todo: Check For Mixed Grouping of Characters
let testStr1 = 'Pumpkin';
let textRegex3 = /P(engu|umpk)in/;
console.log(textRegex3.test(testStr1));

// another example 2

let nameStr = 'Eleanor Roosevelt';
let nameRegex = /(Franklin|Eleanor).*Roosevelt/;
let result20 = nameRegex.test(nameStr);
console.log('result20:', result20);

// Todo: Reuse Patterns Using Capture Groups
let repeatNum = '42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
// regex should not match the string 42\t42\t42.

console.log(reRegex.test(repeatNum));

// Todo: Use Capture Groups to Search and Replace
let wrongText = 'The sky is silver.';
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, 'blue'));

// another example
let str = 'one two three';
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = '$3 $2 $1';

// Todo: Remove Whitespace from Start and End
let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g;
let result21 = hello.replace(wsRegex, '');
