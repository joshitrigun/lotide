const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const numArray = [1, 3, 4, 5, 6, 7, 8, 12, 3, 6, 54, 87, 32, 33];

const mid = Math.floor(numArray.length / 2);
const len = numArray.length;

const middle = (arr) => {
  let newArr = [];
  if (arr.length % 2 === 0) {
    newArr.push(arr[mid - 1]);
    newArr.push(arr[mid]);
  } else {
    newArr.push(arr[mid]);
  }
  return newArr;
};

middle(numArray);
console.log(middle(numArray));
assertArraysEqual(middle(numArray), [8, 12]);
//optional chaining
// how to use assertion here
