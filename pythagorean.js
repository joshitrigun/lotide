const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];
const result = input.map((coordinate) => {
  return Math.sqrt(Math.pow(coordinate.x, 2) + Math.pow(coordinate.y, 2));
});

console.log(result[0] === 5);
console.log(result[1] === 132);
console.log(result[2] === 17);
