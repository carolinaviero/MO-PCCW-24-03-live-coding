const displayFruitsInformation = (fruits) => {
  let fruitSentences = [];
  let shortestFruit = fruits[0];
  let longestFruit = fruits[0];

  for (let i = 0; i < fruits.length; i++) {
    const fruitSentence = "I love " + fruits[i]
    fruitSentences.push(fruitSentence)

    if (fruits[i].length > longestFruit.length) {
      longestFruit = fruits[i]
    }

    if (fruits[i].length < shortestFruit.length) {
      shortestFruit = fruits[i]
    }
  }

  return {
    fruitSentences,
    shortestFruit,
    longestFruit,
  }
}

console.log(displayFruitsInformation())

