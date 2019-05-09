"use strict";

const multiples = require("./multiples/index");
const largSum = require("./large-sum/index");
let arg = process.argv[2];

if (arg) arg = arg.toLowerCase();

if (arg === "multiples") {
  process.stdout.write(`
  The solution to the Multiples of 3 and 5 exercise is:
  
  ${multiples()}
  `);
} else if (arg === "largesum") {
  process.stdout.write(`
  The solution the Large Sum exercise is:
  
  ${largSum()}
  `);
} else {
  process.stdout.write(
    `To run this program you must either type either:
    - "npm start multiples"
    - "npm start largesum"`
  );
}
