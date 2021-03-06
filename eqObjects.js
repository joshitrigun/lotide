const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  //checking length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    //checking if obj1 and 2 are array or not
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false

*/
module.exports = eqObjects;
