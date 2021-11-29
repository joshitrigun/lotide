const middle = (arr) => {
  const mid = Math.floor(arr.length / 2);

  let newArr = [];
  if (arr.length % 2 === 0) {
    newArr.push(arr[mid - 1]);
    newArr.push(arr[mid]);
  } else {
    newArr.push(arr[mid]);
  }
  return newArr;
};

module.exports = middle;
