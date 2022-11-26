
// Create a function that returns a Promise that has
// a 50% chance of resolving, and 50% chance of rejecting,
// on resolve it should return “Now I work”
// and on reject “Now I don’t’.

function getRandomPromise() {
  const shouldBeResolved = true;
  const myPromise = new Promise((resolve, reject) => {
    anotherFunction(resolve, reject);
  });
  function anotherFunction(resolve, reject) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log("50% for resolve and 50% with reject");
    console.log(`Random percentage is ${randomNumber}%`);
  setTimeout(function() {
    if (randomNumber <= 50) {
      console.log("Now I work with resolve"); //50% - czyli od 0 - do 0,49 
    } else {
      console.log("Now I don\'t work with reject");  // 50% - czyli od 0.51 - do 100
    }
  });
  }
  return myPromise;

  }; 

getRandomPromise() 
  .then((result) => console.log('I expect this to be "Now I work": ', result))
  .catch((error) => console.log('I expect this to be "Now I don\'t": ', error));