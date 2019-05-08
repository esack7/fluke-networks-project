"use strict";

const multiples = require("./multiples/index");
const largSum = require("./large-sum/index");
let arg = process.argv[2];

if (arg) arg = arg.toLowerCase();

if (arg === "multiples") {
  process.stdout.write(multiples().toString());
} else if (arg === "largesum") {
  process.stdout.write(largSum());
} else {
  process.stdout.write(
    `To run this program you must either type either:
    - "npm start multiples"
    - "npm start largesum"`
  );
}
