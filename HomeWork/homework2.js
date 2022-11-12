// 1.	Array exercises:
// a.	example array: [1,6,23,8,4,8,3,7]
// b.	Create a function that takes in an array of numbers and returns sum of all elements
// c.	Create a function that takes in an array of numbers and returns sum of first and last element
// d.	Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
// e.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.
// f.	Create a function that takes in an array and returns it in random order
// g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// h.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// 2.	Create a function that returns number of days till Friday
// 3.	Create two functions:
// a.	First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
// b.	Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
// c.	Reference: https://youtu.be/l6jqKRXSShI
// 4.	Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion
// 5.	Create a function that:
// a.	Checks if a given number is a prime number
// b.	akes in n (numbers) as a parameter and returns first n prime numbers
// 6.	Implement binary search
// 7.	Implement selection sort
// 8.	Implement merge sort



//1.b
let myArray = [1, 6, 23, 8, 4, 8, 3, 7];
// let rArr = Math.floor(Math.random() * 8);
let ranArray = Math.floor(Math.random() * myArray.length);
// console.log("Random array: " + rArr);
console.log("Random index from array is: " + ranArray);
console.log("Length of array is: " + myArray.length);
console.log("Start array: " + myArray);
// console.log(array.length);
function sumArray(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    return sum;
}
console.log("Sum of all elements on my array is: " + sumArray(myArray));

// 1.c
let sumFirstLast = 0;
function sumFirstLastArray(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum = inputArray[0] + inputArray[i];
    }
    return sum;
}
console.log("Sum of first and last element on my array is:  " + sumFirstLastArray(myArray));
//Math.floor(Math.random() * (max - min + 1) + min)
// 1.d
function reverseArray() {
    let output = [];
    // for (let i = 0; i < inputArray.length; i++) {
    //     output.push(inputArray.pop());;       // only 4 last number will  be reversed bcs i === 4 in this loop
    // }
    // return output
     while (myArray.length) {     // length of array
        output.push(myArray.pop()); // method push / pop | push method -> first element == last element &&
    }                             // pop method -> takes the last element from the array and returns it 
  return output;
}
console.log("Reverse array: " + reverseArray(myArray));
// 1.e
// e.	Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.
let myArray2 = [1, 6, 23, 8, 4, 8, 3, 7];
function arrayOfNumbersAndAttemps() {
    let attemps = Math.floor(Math.random() * myArray2.length);
    console.log("This is number of attemp: " + attemps);
    return myArray2[attemps];
}
console.log("This is the number under any attempt: " + arrayOfNumbersAndAttemps(myArray));
// 1.f
function getRandomArray() {
    let randomArray = Math.floor(Math.random() * myArray2.length);
    return myArray2[randomArray];
}
console.log("Random number of my array is: " + getRandomArray(myArray2));
// 1.g
//g. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let myArray3 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
function oddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            sum += arr[i];
            // console.log(sum);
        }
    }
    
    return sum;
    
}
console.log("Sum numbers on odd position is: " + oddNumbers(myArray3));

// 1.h
// h. With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
let array4 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98]
function addAndAsbstract(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
            console.log("even:" + sum);   // parzyste
        } else if (arr[i] % 2 === 1) {
            sum -= arr[i];
            console.log("odd:" + sum); // nieparzyste
        }
        }
    return sum;
}
console.log("End score is: " + addAndAsbstract(array4));
// 2.	Create a function that returns number of days till Friday
let FRIDAY_INDEX = 5; // You can often see 'constants' or config values written in this way

function getDaysTillFriday() {
  let today = new Date();
  let dayIndex = today.getDay();
  let diff = FRIDAY_INDEX - dayIndex;

  if (diff === -1) {
    // today === saturday case
    return 6;
  }
  
  return diff;
}

console.log('Days till friday: ' + getDaysTillFriday());

// 3. Create two functions:
// a.	First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
// b.	Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
let ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
// ^ we often write 'constants' or configuration variables like this 

function caesarEncode(text, key) {
  let encodedText = '';
  for (let i = 0; i < text.length; i++) {
    encodedText += encodeSingleCharacter(text[i], key);
  }
  return encodedText;
}

function encodeSingleCharacter(character, key) {
  let charUpperCase = character.toUpperCase();

  if (ALPHABET.includes(charUpperCase) === false) {
    // non letter character
    return character;
  }

  let shiftedIndex = (ALPHABET.indexOf(charUpperCase) + key) % ALPHABET.length; 
  // ^ we use % for a case, when the key would be higher than alphabet's length

  if (shiftedIndex < 0) { // this is a case when the key is lower than 0 (we go 'backwards' on the alphabet)
    shiftedIndex = ALPHABET.length + shiftedIndex;
  }

  if (ALPHABET.includes(character) === false) { // if the original character is lowercase we want to return it in lowercase
    return ALPHABET[shiftedIndex].toLowerCase();
  }

  return ALPHABET[shiftedIndex];
}

let myKey = 27;
let exampleText = 'ABcdEf Lorem, ipsum, dolor.';
let encodedText = caesarEncode('ABcdEf Lorem, ipsum, dolor.', myKey);

console.log('Example text: ' + exampleText);
console.log('Encoded text with key ' + myKey + ': ' + encodedText);

function caesarDecode(text, key) {
  return caesarEncode(text, -key); 
  // ^ if we know the key, decoding our secret message is the same as encoding it, while going in 'reverse' through the alphabet
}

let decodedText = caesarDecode(encodedText, myKey);

console.log('Decoded text with key ' + myKey + ': ' + decodedText);

// 4.	Create a function that takes in a n (number) as a parameter
//    and returns first n Fibonacci numbers - use recursion

function getFirstFibbNumbers(n) {
  let result = [];
  let getFibonacciNumber = getFibonacciFunction();
  for (let i = 1; i <= n; i++) {
    result.push(getFibonacciNumber(i));
  }
  return result;
}

function getFibonacciFunction() {
  let cache = [];
  return function getFibboncci(n) {
    // closure pattern, we save results in cache to
    // avoid recalculating fibonacci numbers we already calculated
    if (cache[n - 1]) {
      return cache[n - 1];
    }

    if (n === 1) {
      cache[0] = 0;
      return 0;
    }

    if (n === 2) {
      cache[1] = 1;
      return 1;
    }
    const result = getFibboncci(n - 1) + getFibboncci(n - 2);
    cache[n - 1] = result;
    return result;
  };
}

console.log('First 10 Fibonacci numbers are: ' + getFirstFibbNumbers(10));

// 5.	Create a function that:
//  a.	Checks if a given number is a prime number
//  b.	Takes in n (numbers) as a parameter and returns first n prime numbers

function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(n) {
  let result = [];
  for (let currentNumber = 2; result.length < n; currentNumber++) {
    if (isPrime(currentNumber)) {
      result.push(currentNumber);
    }
  }
  return result;
}

console.log('First 10 prime numbers are: ' + getPrimeNumbers(10));

// 6 Implement Binary Search (This algorithm assumes that the array is sorted)
function findElementBinary(inputArray, targetElement) {
  let currentIndex = Math.floor(inputArray.length / 2);
  let currentElement = inputArray[currentIndex];

  if (currentElement === targetElement) {
    return 'Found ' + currentElement;
  }

  if (inputArray.length === 0 || inputArray.length === 1) {
    // we checked the currentElement's and the targetElement's euqlity before
    return 'Not found';
  }

  if (currentElement > targetElement) {
    return findElementBinary(inputArray.slice(0, currentIndex), targetElement);
  }

  if (currentElement < targetElement) {
    return findElementBinary(inputArray.slice(currentIndex + 1), targetElement);
  }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findElementBinary(arr, 0));

// 7. Implement selection sort
function sortBySelection(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    // repeat arrayOfNumbers.length - 1 times
    let smallest = arrayOfNumbers[i]; // initial smallest number is going to be current number
    let smallestIndex = i; // initial smallest number's ined is goint to be current number's index

    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      // repeat for each non sorted number
      if (arrayOfNumbers[j] < smallest) {
        smallest = arrayOfNumbers[j];
        smallestIndex = j;
      }
    }

    let copy = arrayOfNumbers[i]; // make copy to not loose value at index i
    arrayOfNumbers[i] = arrayOfNumbers[smallestIndex];
    arrayOfNumbers[smallestIndex] = copy;
  }
  return arrayOfNumbers;
}

let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2];
sortBySelection(exampleArray);
console.log(exampleArray);

// 8. Merge sort
function sortByMerge(array) {
  if (array.length <= 1) {
    return array;
  }

  let indexOfHalf = Math.floor(array.length / 2);
  let leftArray = array.splice(0, indexOfHalf);
  let rightArray = array;

  return merge(sortByMerge(leftArray), sortByMerge(rightArray));
}

function merge(leftArr, rightArr) {
  let sortedArray = [];

  while (leftArr.length > 0 || rightArr.length > 0) {
    let smallerElement;

    if (leftArr.length === 0) {
      smallerElement = rightArr.shift();
    } else if (rightArr.length === 0) {
      smallerElement = leftArr.shift();
    } else if (leftArr[0] < rightArr[0]) {
      smallerElement = leftArr.shift();
    } else {
      smallerElement = rightArr.shift();
    }

    sortedArray.push(smallerElement);
  }

  return sortedArray;
}

let exampleArray = [6, 2, 7, 3, 6, 8, 10, 2];
let sortedArray = sortByMerge(exampleArray);
console.log(sortedArray);
