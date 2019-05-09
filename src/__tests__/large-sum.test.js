"use strict";

const largeSum = require("../large-sum/index");
require("jest");

test("Large Sum tests", () => {
  expect(largeSum()).toBe(5537376230);
});
