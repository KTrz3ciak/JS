
// 1.	Given a string:
let sentence = "Increase your productivity with AI-powered writing assistant";
// let sentence = "ala ma kota"; 
// a.	count how many words it contains // w nawiasie zawyczaj sie w tym wypadku daje str od string
function numberOfWords(word) { 
  return word.split(" ").length; 
}
console.log("Number of word in the sentence is equal " + numberOfWords(sentence));
// b.	count how many letter “A”  is in it
let letterOfSentences = sentence.split("a");
//insert your string here
console.log("Number of letter a in the sentence is equal " + (letterOfSentences.length - 1));

// c.	display longest word
const longestWord = (sentence) => {
  const strArray = sentence.split(' ');                                         //funkcja napisana trybem strzałkowym, skrócnym
  const sortedStrArray = strArray.sort(
    (sentenceA, sentenceB) => {
      return sentenceB.length - sentenceA.length;
    }
  );
  return sortedStrArray[0];
  
}
console.log(longestWord(sentence));

// function longestWord(sentence) {
//   const strArray = sentence.split(' ');
//   const sortedStrArray = strArray.sort(function(sentenceA, sentenceB)        //Funckja napisana w zwykły sposób
//   {
//      return sentenceB.length - sentenceA.length;
//   })
//   return sortedStrArray[0];
// }
// console.log(longestWord(sentence));


// d.	display how many words of length same as the longest is in the string
// e.	Examples:
// f.	“This is an example.”
// g.	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let secondSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// function findLongestWord(word) {
//   return word.length;
//   //first method For Loop
//   // 1. split string 
//   let wordSplit = word.Split(" ");
//   // 2.  Adding a variable that will hold the length of the longest 
//   let longestWord = 0;
//   // 3. Create For Loop
//   for (let i = 0; i < wordSplit.length; i++)
//   {
//     if (wordSplit[i].length > longestWord) // If wordSplit[i].length is greater than the word ...
//       longestWord = wordSplit[i].length; // ...then longestWord  == wordSplit[i].split
//   }
//   return longestWord;
// }
// console.log(findLongestWord(secondSentence));

function findLongestWord(word) {
  // 1. split string and sort array by elements.
  let longestWord = word.split(' ').sort(function (a, b)
  {
    return b.length - a.length;
  });
  // 2. return length of the first sorted element array
  return longestWord[0].length;
}
console.log(findLongestWord(secondSentence));

// 2.	Gene finder - file: brca1.json - augment gene finder by:
// a.	Displaying number of all genes
const brca = require("./brca1.json");
//console.log(brca);


// b.	Displaying length of longest and shortest gene
// 3.	Mario - Augment simple version to print out a whole pyramid like this:
// a.	 
let height = 5;
// repeat n time, where n is pyramid height
for (let i = 1; i <= height; i++) {
    // 1. count spaces for the line
    let spacesCount = height - i;
    // 2. count hashes for the line
    let hashesCount = i;
    // 3. display the line
    let output = "";

    for (let j = 1; j <= spacesCount; j++)
    {
      output += " ";
    }
    console.log(output);
  
    for (let l = 1; l <= hashesCount; l++)
    {
      output += "#";                             // Stworzona pętlą powodująca odwrotności wypisywania # niz w poprzedniej pętli
    }
    output += " ";                              // odstęp między dwoma schodkami
    
    for (let k = 1; k <= hashesCount; k++)
    {
      output += "#";
    }
    console.log(output);
  
}



 
// 4.	Credit Card - write a program that will tell if the credit card number is valid and what type of card it is (American Express / MasterCard / Visa)
// a.	For card number validation - Luhn’s Algorithm is used (https://en.wikipedia.org/wiki/Luhn_algorithm)
// let numberOfCreditCard = 3111111111111113;
// function luhnValid3(cardNo) { // cardNo as a string w/ digits only
//     var d = 0, e = false; // e = even = n-th digit counted from the end
//     return ( cardNo.split("").reverse().reduce(
//           function(s,dstr){ d = parseInt(dstr);
//               return (s + [0,1,2,3,4,5,6,7,8,9,0,2,4,6,8,1,3,5,7,9][d+((e=!e)?0:10)]);
//             }
//          ,0
//          ) % 10 == 0
//       );
// }
// console.log(luhnValid3(numberOfCreditCard));
// b.	Assume:
// i.	All American Express numbers start with 34 or 37; 
// ii.	MasterCard numbers start with 51, 52, 53, 54, or 55; 
// iii.	All Visa numbers start with 4
// iv.	American Express uses 15-digit numbers
// v.	MasterCard uses 16-digit numbers
// vi.	Visa uses 13- and 16-digit numbers
// c.	Display either card type or INVALID
