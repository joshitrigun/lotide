const eq = require("./eqArrays");
const aaq = require("./assertArraysEqual");

const flatten = (array) => {
  // Create a new array
  let fArray = [];
  for (let e of array) {
    if (Array.isArray(e)) {
      fArray = fArray.concat(flatten(e));
    } else {
      fArray.push(e);
    }
  }
  return fArray;
};

console.log(flatten([1, 2, 4, [5, [7, 8]]]));

aaq(flatten([1, 2, 4, [5, [7, 8]]]), [1, 2]);
