function calculateAverageLength(stringArray) {
  const length = stringArray.length;
  let total = 0;

  for (const string of stringArray) {
    total += string.length;
  }

  return total > 0 ? total / length : total;
}

const myArray = [];

console.log(calculateAverageLength(myArray))
