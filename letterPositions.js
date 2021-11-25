const eq = require("./eqArrays");
const aae = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const letterPosition = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    if (currentChar !== " ") {
      if (letterPosition[currentChar]) {
        letterPosition[currentChar].push(i);
      } else {
        letterPosition[currentChar] = [i];
      }
    }
  }

  return letterPosition;
};

console.log(letterPositions("HHH"));
console.log(letterPositions("This is Lighthouse"));
console.log(letterPositions("House of Cards"));

aae(letterPositions("hello").e, [1]);
