"use strict";

const largeSum = require("../large-sum/index");
const { data } = require("../large-sum/numbers-data");
const {
  calculateSumCarryOver,
  createCalcArray
} = require("../large-sum/large-sum-utils");

const mockLargeNumArray = [
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789,
  123456789123456789123456789
];
const mockLargeNumArray2 = [
  222222222222222222222222222,
  333333333333333333333333333,
  444444444444444444444444444
];
const mockLargeNumArray3 = [123456789123456789123456789];

describe("Testing Large Sum function", () => {
  test("The default result of calling large-sum function will be 5537376230", () => {
    expect(largeSum()).toBe(5537376230);
  });
  test("Passing in data array and 10 as params will result in same as default call", () => {
    expect(largeSum(data, 10)).toBe(5537376230);
  });
  test("Passing in mockLargeNumArray and 8 as params will result 11111111", () => {
    expect(largeSum(mockLargeNumArray, 8)).toBe(11111111);
  });
  test("Passing in mockLargeNumArray2 and 3 as params will result 999", () => {
    expect(largeSum(mockLargeNumArray2, 3)).toBe(999);
  });
});

describe("Testing Large Sum helper functions", () => {
  test("The calculateSumCarryOver function with problem data set array passed in should return 3", () => {
    expect(calculateSumCarryOver(data)).toBe(3);
  });
  test("The calculateSumCarryOver function with mockLargeNumArray passed in should return 2", () => {
    expect(calculateSumCarryOver(mockLargeNumArray)).toBe(2);
  });
  test("The calculateSumCarryOver function with mockLargeNumArray3 passed in should return 1", () => {
    expect(calculateSumCarryOver(mockLargeNumArray3)).toBe(1);
  });
  test("The createCalcArray function with mockLargeNumArray3 passed in should return [[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,9]]", () => {
    expect(createCalcArray(mockLargeNumArray3)).toEqual([
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 9]
    ]);
  });
  test("The createCalcArray should return nested arrays with length of greater than 14", () => {
    expect(
      createCalcArray(mockLargeNumArray3)[0].length
    ).toBeGreaterThanOrEqual(14);
    expect(createCalcArray(mockLargeNumArray)[5].length).toBeGreaterThanOrEqual(
      14
    );
    expect(createCalcArray(data)[88].length).toBeGreaterThanOrEqual(14);
  });
});
