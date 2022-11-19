function return2Methods() {
    let myTimeout;

    function logwithTimeout(message,time) {
        myTimeout = setTimeout(() => console.log(message), time)
    }
    function cancellog() {
        clearTimeout(myTimeout);
    }
    return {
        logwithTimeout,
        cancellog,
    };
}
const loggerObj = return2Methods();   // nie przypisując tutaj do zmiennej 
loggerObj.logwithTimeout("hello", 1000);  // dotyczy innego obiektu
loggerObj.cancellog(); // dotyczy również innego obiektu


function getStopWatch() {
    let interval;
    let second = 0;
    function start() {
        interval = setInterval(() => {
            second++;
            console.log(second);
        }, 1000)
    }
    function pause() {
        clearInterval(interval);      
    }
    
    function stop() {
        second = 0;
        clearInterval(interval);
    }
    return {
        start,
        pause,
        stop,
    }
}

// const getstopWatch = getStopWatch();
// getstopWatch.start();
// setTimeout(getstopWatch.pause, 5500);
// setTimeout(getstopWatch.start, 6000);
// setTimeout(getstopWatch.stop, 8000);
// setTimeout(getstopWatch.start, 9000);


//================================================================================

// function displayData(data) { console.log(data); }
// function sayHi() { console.log("Hi"); }
// function blockFor1s() { }

// setTimeout(sayHi, 0);

// const futureData = fetch("wp.pl");
// futureData.then(displayData);

// blockFor1s();
// console.log("I'm still first");

const fetch = require('node-fetch');

const URL = 'https://js-pb.herokuapp.com/v1/name/';
const URL2 = 'https://js-pb.herokuapp.com/v1/user/';
const URL3 = 'https://js-pb.herokuapp.com/v2/user/';

const ID = 5;

// fetch(`${URL}${ID}`)
// .then((userName) => userName.text())
// .then((name) => console.log(name));
// fetch(`${URL2}${ID}`)
//     .then((userName) => userName.json())
//     .then((user) => console.log(user.role));
fetch(`${URL3}${ID}`)
    .then((userName) => {
        if (userName.ok === false) {
            // console.log('Serwer error: ', userName.status);
            throw new Error('Network error: ' + userName.status);
        } else {
            return userName.json()
        }
    })
    .then((user) => console.log(user.role))
    .catch((error) => console.log(error));



