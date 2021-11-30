const tail = (arr) => {
  if (!arr) {
    return arr;
  }
  return arr.slice(-1);
};

console.log(tail([1, 2, 3]));
module.exports = tail;
