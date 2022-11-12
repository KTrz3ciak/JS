// 1.	Based on data in the financial.json file 
//  a.	Use the starter file homework-financial.js
//  b.	Create an object that will give us data about:
//      i.	How much money was spent in 2014
//      ii.	Earnings per company
//      iii. Spendings per transaction type
//      iv.	Spendings by month
//      v.	Spendings per day of the week
const financialData = require('./financial.json');

console.log('Financial data: ' + getFiancialObject());

function getFiancialObject() {
  const financialObject = financialData.reduce((sum, currentElement) => {
    const costNumber = Number(currentElement.cost);
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014')) {
      console.log("There is cost: " + costNumber);
      return "\n" + costNumber;
    }
  });
  // TODO (create functions for calculations below)
  return financialObject;
}
// filter((date) => {
//     (date.detailsOfPayent.date.includes('-2014'))
//     {
//       return true;
//     }
//     return false;
//   }).

// TODO (util functions)
// function moneySpent() {
//   const result = financialData.filter((cost) => {
//     if (financialData.origin.date.includes("2014"))
//     {
//       return true;
//     }
//     return false;
//   })
//   return result;
// }
// console.log(monetSpent());