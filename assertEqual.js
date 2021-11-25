const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};
/*
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
*/
module.exports = assertEqual;
