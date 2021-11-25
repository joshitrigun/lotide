const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => should PASS
assertObjectsEqual(ab, abc); // => should FAIL
assertObjectsEqual(cd, dc); // => should PASS
assertObjectsEqual(cd, cd2); // => should FAIL
module.exports = assertArraysEqual;
