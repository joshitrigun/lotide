const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  const retArr = [];
  for (const arr of array) {
    //!callback(arr) ? retArr.push(arr) : retArr;
    if (!callback(arr)) {
      retArr.push(arr);
    } else {
      return retArr;
    }
  }
  return retArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], [1, 2, 5, 7, 2]);
assertArraysEqual(
  ["I've", "been", "to", "Hollywood"],
  ["I've", "been", "to", "Kathmandu"]
);
assertArraysEqual(
  ["I've", "been", "to", "Hollywood"],
  ["I've", "been", "to", "Canada"]
);
assertArraysEqual(
  ["I've", "been", "to", "Hollywood"],
  ["I've", "been", "to", "Hoolowood"]
);
