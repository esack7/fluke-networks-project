const { data } = require("./numbers-data");
const { calculateSumCarryOver, createCalcArray } = require("./large-sum-utils");

module.exports = (largeNumArray = data, digits = 10) => {
  let sum = 0;
  let nestedIteration = 0;

  // Create array of int arrays representative of the large number equivilent.
  // 12345 => [1,2,3,4,5]
  const calcArray = createCalcArray(largeNumArray);

  // Calculates the maximum digits that a summation of all the integers in calcArray at a particular iteration
  const sumCarryOver = calculateSumCarryOver(calcArray);

  while (sum < Math.pow(10, digits + sumCarryOver)) {
    for (let i = 0; i < calcArray.length; i += 1) {
      sum += calcArray[i][nestedIteration];
    }
    nestedIteration += 1;
    sum *= 10;
  }
  // Return statement truncates the sum by a factor of the sumCarryOver value plus one,
  // which will be first 10 digits(or amount defined by digits) of the sum
  return Math.floor(sum / Math.pow(10, sumCarryOver + 1));
};
