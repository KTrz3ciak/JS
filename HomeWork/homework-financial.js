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
    const costNumber = Math.round(currentElement.cost * 10) / 10;
    const nameCompany = currentElement.detailsOfPayent.company;
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014')) {
      // console.log("There is cost: " + costNumber);
      return sum + costNumber;
    } else if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014'))
    {
      return sum + costNumber;
    } else if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014')) 
    {
      return sum + costNumber;
    }
    return sum;
  }, 0);
  // TODO (create functions for calculations below)

  return financialObject;
}
// function earingsPerCompany() {
//   const earings = financialData.filter((company) =>
//   {
//     if (company.detailsOfPayent.company === "ECSTASIA")
//     {
//       console.log("There is ECSTASIA company. ");
//       return true;
//     } else if(company.detailsOfPayent.company === "MANGELICA")
//     {
//       console.log("There is MANGELICA company. ");
//       return true
//     } else if(company.detailsOfPayent.company === "CODAX")
//     {
//       console.log("There is CODAX company. ");
//       return true;
//     }
//     return false;
//   })
//   return earings;
// }
// earingsPerCompany();

function earingsPerCompany() {
  const earings = financialData.reduce((sum, currentElement) => {
    const nameCompany = currentElement.detailsOfPayent.company;
    const costNumber = Number(currentElement.cost);
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.date.includes('2014')) {
      // console.log("There is cost: " + costNumber);
      if (currentElement.detailsOfPayent.company.includes("ECSTASIA")) {
        console.log("ECSTASIA earn: " + sum);
        return sum + costNumber;
      } else if (currentElement.detailsOfPayent.company.includes("MANGELICA")) {
        console.log("MANGELICA here: " + sum);
        return sum + costNumber;
      } else if (currentElement.detailsOfPayent.company.includes("CODAX")) {
        console.log("CODAX here: " + sum);
        return sum + costNumber;
      } else
      {
        return 0;
      };
    }
    return sum;
  },0);
  return earings;
}
console.log(earingsPerCompany());