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
    earningPerCompany: {
      companyOne: getEaringsPerCompanyECSTASIA(),
      companyTwo: getEaringsPerCompanyMANGELICA(),
      companyThree: getEaringsPerCompanyCODAX()
    }
  };
  // TODO (create functions for calculations below)
  return financialObject;
}
function getSpendingsIn2014() {
  const moneySpent = financialData.reduce((sum, currentElement) => {
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

  return moneySpent;
}
console.log(getSpendingsIn2014());

function getEaringsPerCompanyECSTASIA() {
  const earnings = financialData.reduce((sum, currentElement) =>
  {
    const costNumber = Math.round(currentElement.cost * 2) / 2;
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.company.includes('ECSTASIA'))
    {
      return sum + costNumber;
    }
    return sum;
  },0)
  return earnings;
}
// console.log(getEaringsPerCompanyECSTASIA());

function getEaringsPerCompanyMANGELICA() {
  const earnings = financialData.reduce((sum, currentElement) =>
  {
    const costNumber = Math.round(currentElement.cost * 2) / 2;
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.company.includes('MANGELICA'))
    {
      return sum + costNumber;
    }
    return sum;
  },0)
  return earnings;
}
// console.log(getEaringsPerCompanyMANGELICA());

function getEaringsPerCompanyCODAX() {
  const earnings = financialData.reduce((sum, currentElement) =>
  {
    const costNumber = Math.round(currentElement.cost * 2) / 2;
    if (currentElement.cost > 0 && currentElement.detailsOfPayent.company.includes('CODAX'))
    {
      return sum + costNumber;
    }
    return sum;
  },0)
  return earnings;
}
// console.log(getEaringsPerCompanyCODAX());