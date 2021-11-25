const assertEqual = require("./assertEqual");

const findKeyByValue = (obj, value) => {
  //for (const [key, value] of Object.entries(obj)) {
  // return `${key}: ${value}`;
  // }
  for (const oKey in obj) {
    console.log(oKey);
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
