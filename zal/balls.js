// 4.	EXAM Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.

// let sizeOfLabel = 3;
let balls = [1, 1, 1, 2, 1, 1, 1, 1];
// let balls1 = balls.splice(0, 3);
// let balls2 = balls.splice(0, 3);
// let balls3 = balls.splice(0, 2);
// // console.log(balls);
// console.log(`Wartości poszczególnych tabel:\n Label I ${balls1}\n Label II ${balls2}\n Label III ${balls3}`)
let randomBall = balls[Math.floor(Math.random() * balls.length)];
let firstGroup = balls.splice(0, 3);
let secondGroup = balls.splice(0, 3);
let thirdGroup = balls;
// console.log(balls);
// console.log(randomBall);
console.log(firstGroup);
console.log(secondGroup);
console.log(thirdGroup);
// let randomBall1 = balls1[Math.floor(Math.random() * 3)];
// let randomBall2 = balls2[Math.floor(Math.random() * 3)];
// let randomBall3 = balls3[Math.floor(Math.random() * 2)]; // losowe wybranie elementu z tablicy
// console.log(`${randomBall1} ${randomBall2} ${randomBall3}`);

let sizeOfBall1 = firstGroup.length;
let sizeOfBall2 = secondGroup.length;
let sizeOfBall3 = thirdGroup.length;
let sumBall1 = 0;
let sumBall2 = 0;
let sumBall3 = 0;

    for (let i = 0; i < firstGroup.length; i++) {
        sumBall1 += firstGroup[i];
        // console.log(sumBall1);
}
    for (let j = 0; j < secondGroup.length; j++) {
        sumBall2 += secondGroup[j];
        // console.log(sumBall2);
}
    for (let k = 0; k < thirdGroup.length; k++) {
        sumBall3 += thirdGroup[k];
        // return sumBall3.split();
        // console.log(typeof(sumBall3));
}
console.log(`First group: ${sumBall1}\nSecond group: ${sumBall2}\nThird group: ${sumBall3}`);
// function compareBalls(ball1, ball2, sizeOfBall1, sizeOfBall2) {
//
//     for (let j = 0; j < sizeOfBall2; j++) {
//         sumBall2 += ball2[j];
//         console.log(ball2);
//     }
//     return sumBall1;
// }
// compareBalls(balls, balls2, sizeOfBall1, sizeOfBall2)

// if (sumBall1 == sumBall2)
// {
//     console.log("Suma kul jest sobie równa")
// } else if (sumBall1 < sumBall2)
// {
//     console.log("Suma kul 2 jest wieksza od sumy kul 1")
// } else if (sumBall1 > sumBall2) {
//     console.log("Suma kul 2 jest wieksza od sumy kul 1")
// } else {
//     return sumBall3;
// }
// function compareBallFromTheGroup(ball) {
//         if (ball[0] === ball[1]) {
//                 console.log("wieksza z trzech kul jest kula 3")
//                 return ball[2];
//             } else if (ball[0] < ball[1]) {
//                 console.log("kula druga jest cięższa od pierwszej")
//                 return ball[0];
//             } else {
//                 console.log("kula pierwsza jest cięższa od drugiej")
//                 return ball[1];
//     }   
// }

function compareSumOfBalls(balls1 , balls2 , balls3) {
    
    if (balls1 == balls2)
        {
            console.log("Waga kul jest sobie równa");
            if (balls3[0] < balls3[1]) {
                console.log(`pierwszy element trzeciej grupy: ${balls3[0]}`);
                // console.log("pierwszy element trzeciej grupy: ", balls3[0]);
            } else {
                console.log(`drugi element trzeciej grupy: ${balls3[1]}`);
                // console.log("drugi element trzeciej grupy: ", balls3[1]);
            }     
    } else if (balls1 < balls2)
    {
            console.log("Waga kul drugiej grupy jest wieksza od wagi kul grupy pierwszej")    
            // compareBallFromTheGroup(balls1);
            if (balls2[0] === balls2[1]) {
                console.log("najcięższa z wszystkich kul jest kula 3 - " , balls2[2])
                // return balls1[2];
            } else if (balls2[0] < balls2[1]) {
                console.log("kula druga jest cięższa od pierwszej - " , balls2[1])
                // return balls1[1];
            } else {
                console.log("kula pierwsza jest cięższa od drugiej - ", balls2[0])
                // return balls1[0];
            }
    } else if (balls1 > balls2) {
            console.log("Waga kul pierwszej grupy jest wieksza od wagi kul drugiej grupy")
            // compareBallFromTheGroup(balls1);
            if (balls1[0] === balls1[1]) {
                console.log("najcięższa z wszystkich kul jest kula 3 - ", balls1[2])
                // return balls2[2];
            } else if (balls1[0] < balls1[1]) {
                console.log("kula druga jest cięższa od pierwszej - ", balls1[1])
                // return balls2[1];
            } else {
                console.log("kula pierwsza jest cięższa od drugiej - ", balls1[0])
                // return balls2[0];
            }
    } 
    return balls1;
}
console.log(compareSumOfBalls(firstGroup, secondGroup, thirdGroup));

