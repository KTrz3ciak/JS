
// Create a function that returns a Promise that has
// a 50% chance of resolving, and 50% chance of rejecting,
// on resolve it should return “Now I work”
// and on reject “Now I don’t’.

const { resolve } = require("path");

function getRandomPromise() {
  const shouldBeResolved = true;
  const myPromise = new Promise((resolve, reject) => {
    anotherFunction(resolve, reject);
  });
  function anotherFunction(resolve, reject) {
    let randomNumber = Math.floor(Math.random() * 10) / 10;
    console.log(randomNumber);
  setTimeout(function() {
    if (randomNumber <= 0.5) {
      resolve();  //50% - czyli od 0 - do 0,49 
    } else {
      reject();  // 50% - czyli od 0.51 - do 100
    }
  }, 300);
  }
  return myPromise;

  }; 

getRandomPromise() 
  .then((result) => console.log('I expect this to be "Now I work": ', result))
  .catch((error) => console.log('I expect this to be "Now I don\'t": ', error));