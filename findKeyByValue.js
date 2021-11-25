const assertEqual = require("./assertEqual");
const findKeyByValue = (obj, value) => {
  for (const oKey in obj) {
    if (obj[oKey] === value) {
      return oKey;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
