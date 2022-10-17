// 1.	Given a string:
let sentence = "Ala ma kota a twój tata sprzedaje jabłka na straganie"; 
// a.	count how many words it contains // w nawiasie zawyczaj sie w tym wypadku daje str od string
function numberOfWords(word) { 
  return word.split(" ").length; 
}
console.log(numberOfWords(sentence));
// b.	count how many letter “A”  is in it
//insert your string here
let letterOfSentences = sentence.split("a");
console.log(letterOfSentences.length - 1);

// c.	display longest word
function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (i = 0; i < str.length - 1; i++)
    {
        if (longest < str.length)
        {
            longest = str.length;
            word = str;
            }
    }
    return word;
}
console.log(longestWord(sentence));



// d.	display how many words of length same as the longest is in the string
// e.	Examples:
// f.	“This is an example.”
// g.	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
