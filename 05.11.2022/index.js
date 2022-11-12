// let userName = ['Bob', 'John', 'Scarlet'];
// // for (let i = 0; i < name.length; i++){
// //     console.log("Welcome " + name[i]);
// //     logUser(userName[i]);
// // }
// declarative
// userName.forEach(logUser);

// function logUser(userName) {
//     console.log("Welcome " + userName);
// }

const numbers = [1, 5, 3, 6, 8, 2, 10, 10, 283, 4, 7];
const character = ["a", "b", "c", "d"];
numbers.sort((a, b) => a - b)
//{
    // if (a > b) {
    //     return 1;
    // }
    // if (a < b) {
    //     return - 1; 
    // }
    // if (a == b) {
    //     return 0;
    // }

// })
console.log(numbers);

const numbers2 = [5, 28, 12, 6, 3, 19, 2];

const result = numbers2.map((currentElement, index) => {
    if (index % 2 === 0)
    {
        return currentElement
    } else {
        return currentElement * 2;
        }
})
console.log(result);

const numbers3 = [1, 2, 3];
const result3 = numbers3.reduce((accumulator, currentElement) => {
    return accumulator + currentElement;
}, 0);
console.log(result3);

const numbers4 = [1, 2, 3, 12, 56, 7, 2, 389, 6, 0];
const result4 = numbers4.reduce((accumulator, currentElement) => {
    if (currentElement % 2 === 0) {
        return accumulator + currentElement;
    } else {
        return accumulator - currentElement;
    }
}, []);
console.log(result4);


const numbers5 = [1, 2, 3];
const result5 = numbers.map(number => number * 2)
    .sort((a, b) => b - a)
    .filter((number) => number < 4)

console.log(result5);

const numbers6 = [4, 1, 3, 2, 12, 3, 29, 4, 6, 34, 16, 28];
const result6 = numbers6.map((number) => number * 2).filter((number) => number < 40).sort((a, b) => b - a);
console.log(result6);


const episodes = require("./episodes.json");
const characters = require("./characters.json");
const locations = require("./locations.json");

function allDeadPeople() {
    const result = characters.reduce((sum, currentElement) => {
        if (currentElement.status === 'Dead') {
            return sum + 1;
        } else {
            return sum;
        }
    }, 0)
    return result;
}
console.log(allDeadPeople())

function mapAllCharactersLivingOnEarth() {
    const result = characters.filter((character) => {
        // (character.origin.name.includes('Earth')
        if (character.origin.name.includes('Earth')) {
            return true;
        }
        return false;
    }).sort((a, b) => {
        if (a.name > b.name){
            return 1;
        }else if (a.name < b.name) {
            return -1;
        }else if (a.name === b.name){
            return 0;
        }
    })
    return result;
}
// console.log(mapAllCharactersLivingOnEarth());
// console.log('a');

// 15-04-2018
// const evalDate = new Date(2018, 3, 15);   // 3 bo to index miesiaca 3 
const evalDate = new Date('2018-04-15'); 
const evalDateMS = evalDate.getTime();

console.log(evalDateMS);
function mapCharactersByDate() {
    const result = characters.filter(currChar => {
        const creationDate = new Date(currChar.created);
        const creationDateMS = creationDate.getTime();
        if (creationDate < evalDateMS)
        {
            return true;
        } 
        return false;
    })
    return result;
}
console.log(mapCharactersByDate());
const number = 1;