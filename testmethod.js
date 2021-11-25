const letterPositions = (sentence) => {
  const letterPosition = {};
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    if (currentChar !== " ") {
      letterPosition[currentChar]
        ? letterPosition[currentChar].push(i)
        : (letterPosition[currentChar] = [i]);
    }
  }
  return letterPosition;
};
console.log(letterPositions("HHH"));
console.log(letterPositions("This is Lighthouse"));
console.log(letterPositions("House of Cards"));
