function removeStudent(students, order) {
  let studentToRemove;

  if (order === 'first') {
    studentToRemove = students.shift();
  } else if (order === 'last') {
    studentToRemove = students.pop()
  } else {
    return 'Order is invalid'
  }

  return studentToRemove;
}

const students = [
  { name: 'Carolina', age: 50 }, 
  { name: 'Giovanna', age: 50 }, 
  { name: 'Leila', age: 50 }, 
  { name: 'Hannah', age: 50 },
  { name: 'Ashley', age: 50 }
];

const order = 'middle';

console.log(removeStudent(students, order))