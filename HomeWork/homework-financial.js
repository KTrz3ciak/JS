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
  const financialObject = {
    moneySpentAt2014: getSpendingsIn2014(),
    earningPerCompany: getEaringsPerCompany()
    // getSpendingsPerTransactionType(type, moneySpent)
    // {
    //   return financialData[type] += parseInt(moneySpent);
    // }
    
  };
  // TODO (create functions for calculations below)
  return financialObject;
}


console.log(getFiancialObject());

function getSpendingsIn2014() {
  const moneySpent = financialData.reduce((sum, currentElement) => {
    const costNumber = Math.round(currentElement.cost * 10) / 10;
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014')) {
      // console.log("There is cost: " + costNumber);
      return sum + costNumber;
    }
    return sum;
  }, 0);
  // TODO (create functions for calculations below)

  return moneySpent;
}
console.log(getSpendingsIn2014());

function getEaringsPerCompany() {
  return financialData.reduce((nameCompany, currentElement) => {
    const currentCompany = currentElement.detailsOfPayent.company;
    const currentCost = currentElement.cost;
    // console.log(currentCompany);
    financialData.forEach((elements) => {
          return nameCompany[currentCompany] += +currentCost;
        });
        if (nameCompany[currentCompany] === undefined)
        {
        nameCompany[currentCompany] = 0;
        }
        return nameCompany;
      }, {})     
    }
    console.log(getEaringsPerCompany());


// function getEaringsPerCompanyMANGELICA() {
//   const earnings = financialData.reduce((sum, currentElement) =>
//   {
//     const costNumber = Math.round(currentElement.cost * 2) / 2;
//     if (currentElement.cost > 0 && currentElement.detailsOfPayent.company.includes('MANGELICA'))
//     {
//       return sum + costNumber;
//     }
//     return sum;
//   },0)
//   return earnings;
// }
// // console.log(getEaringsPerCompanyMANGELICA());

// function getEaringsPerCompanyCODAX() {
//   const earnings = financialData.reduce((sum, currentElement) =>
//   {
//     const costNumber = Math.round(currentElement.cost * 2) / 2;
//     if (currentElement.cost > 0 && currentElement.detailsOfPayent.company.includes('CODAX'))
//     {
//       return sum + costNumber;
//     }
//     return sum;
//   },0)
//   return earnings;
// }
// console.log(getEaringsPerCompanyCODAX());

// function getSpendingsPerTransactionType() {
//   const transactionType = financialData.reduce((add, currentType) => {
//     const spendings = getFiancialObject().moneySpentAt2014;
//     if (currentType.detailsOfPayent.Type === 1) {
//       // console.log("Hello There 1");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 2) {
//       // console.log("Hello There 2");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 3) {
//       // console.log("Hello There 3");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 4) {
//       // console.log("Hello There 4");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 5) {
//       // console.log("Hello There 5");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 6) {
//       // console.log("Hello There 6");
//       return add + currentType;
//     } else if (currentType.detailsOfPayent.Type === 7) {
//       // console.log("Hello There 7");
//       return add + currentType;
//     }
//     return add;
//   }, 0)
//   return transactionType;
// }
// console.log(getSpendingsPerTransactionType());