//  Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

// A: 8192
// K: 4096
// Q: 2048
// J: 1024
// T:  512
// 9:  256
// 8:  128
// 7:   64
// 6:   32
// 5:   16
// 4:    8
// 3:    4
// 2:    2
// A:    1

// {
//    rank: 1,       // A value from 1 - 9 to rank hands, lower is better
//    value: 'ABCDE' // A value that represents the faces to compare, lower is better
// }

const suits = ["C", "D", "H", "S"];
const cardsValue = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const karty = "AS KS 4C 9D 3S";
const ranks = {
  royal_flush: false,
  straight_flush: false,
  quads: false,
  full_house: false,
  flush: false,
  straight: false,
  trips: false,
  two_pairs: false,
  pair: false,
  high_card: true,
};
let [pair, twoPair, threeKind, straight, flush, fullHouse, fourKind] = [false, false, false, false, false, false, false];
let cardColors = {'C': 0, 'D' : 0, 'H' : 0, 'S': 0}
// club (♣), diamond (♦), heart (♥), spades (♠)
let valueCount = { '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, 'J': 0, 'Q': 0, 'K': 0, 'A': 0 };
//  wartość karty na reku - poczatkowo wszystkie na 0
let highValue = 0;
let secondValue = 0;
let thirdValue = 0;
let sValues = hand.split(" ").map(e => e.substring(0, e.length - 1)).sort(a, b);

for (const e of hand.split(" ")) {
  valueCount[e.substring(0, e.length - 1)]++;
  cardColors[e.charAt(e.length - 1)]++;
}
for (const key in colors) if (colors[key] == 5) flush = true;
  if (sValues[0] === sValues[1] && sValues[3] === sValues[4] && (sValues[1] === sValues[2]  || sValues[2] === sValues[3])) fullHouse = true;
  for (const key in valueCount){
    if (valueCount[key] == 2 && pair) twoPair = true;
    else if (valueCount[key] == 2) pair = true;
    else if (valueCount[key] == 3) threeKind = true;
    else if (valueCount[key] == 4) fourKind = true;
    else if (valueCount[key] == 1) trdValue = Math.max(cardValues.indexOf(key), trdValue);
    if (valueCount[key] == 2 && (twoPair || fullHouse)) sndValue = cardValues.indexOf(key)+1;
    else if (valueCount[key] == 2 || valueCount[key] == 3 || valueCount[key] == 4) highValue = cardValues.indexOf(key)+1;
    if (twoPair){
      let sndHolder = sndValue;
      sndValue = Math.min(highValue, sndHolder);
      highValue = Math.max(highValue, sndHolder);
    }
  }
  if (cardValues.indexOf(sValues[0])+1 == cardValues.indexOf(sValues[1]) && cardValues.indexOf(sValues[1])+1 == cardValues.indexOf(sValues[2]) && cardValues.indexOf(sValues[2])+1 == cardValues.indexOf(sValues[3]) && cardValues.indexOf(sValues[3])+1 == cardValues.indexOf(sValues[4])) straight = true;
  if (sValues.join('') == '2345A'){
    straight = true;
    highValue = -1;
  }
  if (highValue == 0) highValue = cardValues.indexOf(sValues[4]);
  if (straight && flush) return 100000 + highValue*200 + sndValue*10 + trdValue;
  if (fourKind) return 90000 + highValue*200 + sndValue*10 + trdValue;
  if (fullHouse) return 80000 + highValue*200 + sndValue*10 + trdValue;
  if (flush) return 70000 + highValue*200 + sndValue*10 + trdValue;
  if (straight) return 60000 + highValue*200 + sndValue*10 + trdValue;
  if (threeKind) return 50000 + highValue*200 + sndValue*10 + trdValue;
  if (twoPair) return 40000 + highValue*200 + sndValue*10 + trdValue;
  if (pair) return 20000 + highValue*200 + sndValue*10 + trdValue;
  return highValue*200 + sndValue*10 + trdValue;


// function getPokerHand(hand) {
//   const cards = hand.split(" ");
//   const faces = cards.map(a => String.fromCharCode([77 - order.indexOf(a[0])])).sort()
//   const suits = cards.map(a => a[1]).sort();
//   const counts = faces.reduce(count, {});
//   const duplicates = Object.values(counts).reduce(count, {})
//   const flush = suits[0] === suits[4];
//   const first = faces[0].charCodeAt(0);
//   const straight = faces.every((f, index) => f.chardCodeAt(0) - first === index);
//   let rank =
//     (flush && straight && 1) || (duplicates[4] && 2) || 
//     (duplicates[3] && duplicates[2] & 3) ||
//     (flush && 4) || (straight && 5) || (duplicates[3] && 6) ||
//     (duplicates[2] > 1 && 7) || (duplicates[1] && 8) || 9
//   return { rank, value: faces.sort(byCountFirst.join("")) }
//   function byCountFirst(a, b) {
//     const countDiff = counts[b] - counts[a]
//     if (countDiff) return countDiff
//     return b > a ? -1 : b === a ? 0 : 1
//   }
// }
