let balls = [1, 1, 1, 1, 1, 2, 1, 1];
let randomBall = balls[Math.floor(Math.random() * balls.length)];
let removedItem = balls.splice(randomBall,3);
console.log(balls);
console.log(randomBall);