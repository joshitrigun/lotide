const letterPositions = (sentence) => {
  const letterPosition = {};
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    //console.log(currentChar);
    if (currentChar !== " ") {
      if (letterPosition[currentChar]) {
        letterPosition[currentChar].push(i);
      } else {
        letterPosition[currentChar] = [i];
      }
    }
  }
  console.log(letterPosition);
  return letterPosition;
};

letterPositions("hhhh");
