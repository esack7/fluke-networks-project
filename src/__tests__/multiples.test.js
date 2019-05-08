"use strict";

const multiples = require("../multiples/index");

describe("Testing Multiples function", () => {
  test("Sum of muliples below 10 should be 23", () => {
    expect(multiples(10)).toBe(23);
  });
  test("Sum of muliples below 22 should be 119", () => {
    expect(multiples(22)).toBe(119);
  });
  test("Passing 0, 1, 2 or 3 to multiples function should be zero", () => {
    expect(multiples(0)).toBe(0);
    expect(multiples(1)).toBe(0);
    expect(multiples(2)).toBe(0);
    expect(multiples(3)).toBe(0);
  });
  test("Sum of multiples below 1000 should be 233168", () => {
    expect(multiples()).toBe(233168);
    expect(multiples(1000)).toBe(233168);
  });
});
