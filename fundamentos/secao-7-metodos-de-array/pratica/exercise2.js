const numbers = [4, 9, -1, 16, -5, 25];

const squareRoot = numbers.map((num) =>{
  const numSQRT = Math.sqrt(num);

  if (numSQRT < 0) {
    return NaN
  } else {
    return numSQRT;
  }
});

console.log(squareRoot);