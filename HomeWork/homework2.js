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
let rArr = Math.floor(Math.random() * 8);
let ranArray = Math.floor(Math.random() * myArray.length);
console.log("Random array: " + rArr);
console.log("Random index from array is: " + ranArray);
console.log("Length of array is: " + myArray.length);
console.log("Start array: " + myArray);
// console.log(array.length);
function sumArray(inputArray) {
    let sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    return sum;
}
console.log("Sum of all elements on my array is: " + sumArray(myArray));

// 1.c
let sumFirstLast = 0;
function sumFirstLastArray(inputArray) {
    let sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        sum = inputArray[0] + inputArray[i];
    }
    return sum;
}
console.log("Sum of first and last element on my array is:  " + sumFirstLastArray(myArray));

// 1.d
function reverseArray() {
    let output = [];
    // for (var i = 0; i < inputArray.length; i++) {
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
//  function arrayOfNumbersAndAttemps(array, attemps)
// {
//      let lowestScore = 0;
//      let output;
//     //  let randomArrayItems = Math.floor(Math.random() * array.length);
//     //  let random = array[randomArrayItems];
//     attemps = myArray.length;
//      for (let i = 0; i < myArray.length; i++) {
//          output = "Czy tutaj coś sie dzieje ? " + i + myArray[i];
//          console.log(output);
//         if (array[i] > lowestScore) 
//         {
//             lowestScore = myArray[i]
//         } 
//      }
//     return lowestScore;
// }
// console.log(arrayOfNumbersAndAttemps(myArray));
// 1.f
let myArray2 = [1, 6, 23, 8, 4, 8, 3, 7];
function getRandomArray() {
    let randomArray = Math.floor(Math.random() * myArray2.length);
    return myArray2[randomArray];
}
console.log("Random number of my array is: " + getRandomArray(myArray2));

