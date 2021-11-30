const assert = require("chai").assert;
const middle = require("../middle");
//const assertArraysEqual = require("../assertArraysEqual");

//const numArray = [1, 3, 4, 5, 6, 7, 8, 12, 3, 6, 54, 87, 32, 33];

//middle(numArray);

//assertArraysEqual(middle(numArray), [8, 12]);

describe("#middle", () => {
  it("returns [8] for [1, 3, 4, 5, 6, 7, 8, 12, 3, 6, 54, 87, 32, 33]", () => {
    assert.strictEqual(
      middle([1, 3, 4, 5, 6, 7, 8, 12, 3, 6, 54, 87, 32, 33]),
      [8, 12]
    );
  });
  it("returns [1] for [1, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});
