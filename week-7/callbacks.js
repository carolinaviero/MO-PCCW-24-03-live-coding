const triple = (number) => {
  return number * 3;
};

const quadruple = (num) => {
  return number * 4;
}


const tripleTheSum = (num1, num2, callback) => {
  const sum = num1 + num2;
  return callback(sum);
};

// console.log(tripleTheSum(3, 1, triple)); //12


const greeting = (fullname) => {
  console.log({ fullname })
  return `Hello ${fullname}! Nice to meet you!`;
};

const helloUser = (firstName, lastName, callback) => {
  const name = `${firstName} ${lastName}`;
  console.log({ name })

  return callback(name);
};

console.log(helloUser("Carl", "Smith", greeting))