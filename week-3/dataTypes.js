// String Operations
let firstName = 'Carrie';
let lastName = 'Bradshaw';
let fullName = firstName + ' ' + lastName;
console.log('Full Name:', fullName);

// Number Operations
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Division:', division);

// Boolean Operations
let isGreater = num1 > num2;
let isEqual = num1 === num2;
let isPositive = 5 > 0 && 10 > 0;
let isPositive2 = 5 < 0 || 10 > 0;
console.log('Is num1 greater than num2?', isGreater);
console.log('Are num1 and num2 equal?', isEqual);
console.log('Are num1 and num2 positive numbers?', isPositive);

// Adding number to string
let age = 28;
let message = 'I am ' + age + ' years old.';
console.log('Message:', message);

/*--------------------------------------------*/

let numOne = '10';
let numTwo = '5';
let sumOfNumbers = numOne + numTwo; // Concatenates strings
let parseIntSumOfNumbers = parseInt(numOne) + parseInt(numTwo); // Converts strings to numbers before addition

console.log('Sum without parseInt:', sumOfNumbers); // Output: '105'
console.log('Sum with parseInt:', parseIntSumOfNumbers); // Output: 15

/*--------------------------------------------*/