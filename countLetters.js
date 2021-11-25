const assertEqual = require("./assertEqual");

const countLetters = (str) => {
  const result = {};
  for (const s of str) {
    !result[s] ? (result[s] = 1) : (result[s] += 1);
  }
  console.log(result);
  return result;
};

const output = countLetters("lighthouse in the house");
console.log(output);
assertEqual(output["h"], 4);
