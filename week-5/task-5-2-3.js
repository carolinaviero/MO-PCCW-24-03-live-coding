function removeStudentByName(students, studentName){
  let studentIndex = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      studentIndex = i;
      break;
    } 
  }
    
  if (studentIndex === -1) {
    return `No student found with name ${studentName}`
  } else {
    const removedStudent = students.splice(studentIndex, 1);
   return removedStudent;
  }
}

const students = [
  { name: 'Carolina', age: 50 }, 
  { name: 'Giovanna', age: 50 }, 
  { name: 'Leila', age: 50 }, 
  { name: 'Hannah', age: 50 },
  { name: 'Ashley', age: 50 }
];

const studentName = 'John';

console.log(removeStudentByName(students, studentName))
