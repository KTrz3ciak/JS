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
// 2. Create a function that returns number of days till Friday


let today = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(typeof Number(daysOfWeek));
console.log(daysOfWeek);
function daysTillFriday(day) {
    let numbersOfDays = 0;
    for (let i = 0; day.length; i++)
    {
        if (day == "Monday")
        {
            numbersOfDays++;
            console.log("Number of days till friday is: " + numbersOfDays);
        } else {
            console.log("Today friday");
        }
    }
    // switch (daysOfWeek[today.getDay("Friday")])
    // {
    //     case 0: day = 'Sunday'; break;
    //     case 1: day = 'Monday'; break;
    //     case 2: day = 'Tuesday'; break;
    //     case 3: day = 'Wednesday'; break;
    //     case 4: day = 'Thursday'; break;
    //     case 5: day = 'Friday'; console.log("here friday"); break;
    //     case 6: day = 'Saturday'; break;
    // }
    console.log(numbersOfDays);
    return numbersOfDays;
    // return numbersOfDays;
}
console.log(daysTillFriday(daysOfWeek));