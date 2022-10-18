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
