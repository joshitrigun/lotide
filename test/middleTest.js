const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

const numArray = [1, 3, 4, 5, 6, 7, 8, 12, 3, 6, 54, 87, 32, 33];

middle(numArray);

assertArraysEqual(middle(numArray), [8, 12]);
