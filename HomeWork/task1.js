

// 1.	Given a string:
let sentence = "Increase your productivity with AI-powered writing assistant"; 
// a.	count how many words it contains // w nawiasie zawyczaj sie w tym wypadku daje str od string
function numberOfWords(word) { 
  return word.split(" ").length; 
}
console.log(numberOfWords(sentence));
// b.	count how many letter “A”  is in it
let letterOfSentences = sentence.split("a");
//insert your string here
console.log(letterOfSentences.length - 1);

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
function findLongestWord(word) {
  return word.length;
  //first method For Loop
  // 1. split string 
  let wordSplit = word.Split(" ");
  // 2.  Adding a variable that will hold the length of the longest 
  let longestWord = 0;
  // 3. Create For Loop
  for (let i = 0; i < wordSplit.length; i++)
  {
    if (wordSplit[i].length > longestWord) // If wordSplit[i].length is greater than the word ...
      longestWord = wordSplit[i].length; // ...then longestWord  == wordSplit[i].split
  }
  return longestWord;
}
console.log(findLongestWord(secondSentence));

function findLongestWord(word) {
  // 1. split string and sort array by elements.
  var longestWord = word.split(' ').sort(function (a, b)
  {
    return b.length - a.length;
  });
  // 2. return length of the first sorted element array
  return longestWord[0].length;
}
console.log(findLongestWord(secondSentence));

// 2.	Gene finder - file: brca1.json - augment gene finder by:
// a.	Displaying number of all genes

function numberOfGenes(genes) {
    
  document.getElementById("./brca1.json").innerHTML = brcaFile;
  
}

// b.	Displaying length of longest and shortest gene
// 3.	Mario - Augment simple version to print out a whole pyramid like this:
// a.	 
let height = 5;
// repeat n time, where n is pyramid height
for (let i = 1; i <= 5; i++) {
    // 1. count spaces for the line
    let secondSpacesCount = 5 - 1;
    let spacesCount = 5 + i;
    // 2. count hashes for the line
    let secondHashesCoount = i;
    let hashesCount = i;
    // 3. display the line
   let output = "";
   for (let l = 1; l <= secondSpacesCount; l++)
    {
        output += " ";
    }
    console.log(output);
    
    for (let m = 1; m <= secondHashesCoount; m++)
    {
      output += "#";
    }
    console.log(output);
    
    // for (let j = 5; j >= spacesCount; j--)
    // {
    //   output += " ";
    // }
    // console.log(output);
  
    
    // for (let k = 1; k <= hashesCount; k++)
    // {
    //   output += "#";
    // }
    // console.log(output);
  
}

// function zrobChoinke(n) {
//   for (i = 1; i <= n; i++) {
//     for (j = n - 1; j >= i; j--) {
//       console.log(" ");
//       for (j = 1; j <= (2 * i - 1); j++) {
//         console.log("#");
//       }
//     }
    
//   }
//   console.log(zrobChoinke(10));
// }


 
// 4.	Credit Card - write a program that will tell if the credit card number is valid and what type of card it is (American Express / MasterCard / Visa)
// a.	For card number validation - Luhn’s Algorithm is used (https://en.wikipedia.org/wiki/Luhn_algorithm)
// b.	Assume:
// i.	All American Express numbers start with 34 or 37; 
// ii.	MasterCard numbers start with 51, 52, 53, 54, or 55; 
// iii.	All Visa numbers start with 4
// iv.	American Express uses 15-digit numbers
// v.	MasterCard uses 16-digit numbers
// vi.	Visa uses 13- and 16-digit numbers
// c.	Display either card type or INVALID
