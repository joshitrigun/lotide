const rollLoadedDie = (() => {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  const len = list.length;
  console.log(len);
  return function () {
    /* your code here */
    return Math.floor(1 + Math.random() * len);
  };
})();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
