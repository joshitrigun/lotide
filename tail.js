const tail = (arr) => {
  if (!arr) {
    return arr;
  }
  return arr.slice(1);
};

module.exports = tail;
