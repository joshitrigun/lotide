const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`Assertion Failed: [${actual}] === [${expected}]`);
    return false;
  }
};
/*
hey
*/
const head = (arr) => arr[0];
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
