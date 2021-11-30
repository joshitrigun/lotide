const assert = require("chai").assert;
const tail = require("../tail");
//const assertEqual = require("../assertEqual");

//const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result, "Labs");
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), [3]);
  });
  it("returns 3 for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8]), [8]);
  }); 
});
