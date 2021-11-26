const countdownGenerator = (x) => {
  /* your code here */
  const decrement = () => {
    if (x === 0) {
      x--;
      return "Blast Off";
    } else if (x < 0) {
      x--;
      return "Rocket already gone, bub!";
    }
    x--;
    return "T-minus" + x;
  };
  return decrement;
};

const countdown = countdownGenerator(4);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
