const assertArraysEqual = require("./assertArraysEqual");
//const eqArrays = require("./eqArrays");

const without = (list, filter) => {
  let filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (!filter.includes(list[i])) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["world"]), ["hello", "world", "lighthouse"]);
