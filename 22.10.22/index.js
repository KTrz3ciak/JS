//operatory logiczne:
// let v1 = 4;
// let v2 = 10;
// let v3 = 3;
// let v4 = false;
// let v5 = 0;

// console.log(v1 > 5 || (v2 < 100 && v3 == 3));

function calculateAverage(inputArray) {
    // sum all number;
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++)
    {
        sum = + inputArray[i];
        }
    //divide by inputArray length
    return sum / inputArray.length;
}
let numbers = [1, 2, 3, 4];
console.log(calculateAverage(numbers));

// let today = new Date();
// console.log(today.getMinutes());
function getDayNameInPolish()
{
    let today = new Date();
    // console.log(today);
    let dayOfWeek = today.getDay();
    let daysInPolish = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];
    return daysInPolish[dayOfWeek];
}
console.log(getDayNameInPolish());

let max = 100;
let random = Math.floor(Math.random() * (max + 1));
console.log(random);

// 0 lub 1 = 1 
function getFactorial(number) {
    // number === 0 || 1 === 1
    // number * factorial(number - 1)
    if (number === 0 || number === 1) {
        return 1;
    } else
        return number * getFactorial(number - 1);
    // let result = 1;
    // for (let i = number; i > 1; i--)
    // {
    //     result *= i;
    // }
    // return result;
}
console.log(getFactorial(3));

function sumNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
let numb = [1, 2, 3];
let result = sumNumbers(...numb);
console.log(result);


function logNumbersOfArguments(...args) {
    console.log(Array.isArray(args));
    console.log(args.length);
}
logNumbersOfArguments(1, 5, 23, "hi", false); 

let numbs = [1, 2, 3];
let numbs2 = [4, 5, 6];
let copy = [...numbs,...numbs2];
copy[0] = 100;
console.log(copy);