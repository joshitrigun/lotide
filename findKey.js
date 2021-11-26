const assertEqual = require("./assertEqual");

const findKey = (obj, callback) => {
  // console.log(Object.keys(obj));
  for (const key in obj) {
    //console.log(ob);
    //console.log(value(obj[key]));
    if (callback(obj[key])) {
      return key;
    }
  }
};

const keyFound = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(keyFound, "noma");
