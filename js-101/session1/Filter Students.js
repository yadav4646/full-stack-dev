// Problem Description
// Write a function called filterStudents that takes in students, an array of objects, and passingGrade, a number as parameters. The function should return an array containing the names of all the students who have achieved a grade greater than or equal to the passing grade.

// You can assume that the students array will always contain objects with the properties name, age, and grade.

// Note:

// Students must be an array and passingGrade must be a number.

// The code's functionality can be verified by clicking on the run button and subsequently submitting it for final evaluation.

// Sample Input
// [

// { name: 'Alice', age: 18, grade: 85 },

// { name: 'Bob', age: 19, grade: 92 },

// { name: 'Charlie', age: 17, grade: 78 },

// ], 90

// Sample Output
// ['Bob']

// Explanation
// Bob is the only student who has achieved higher grades than passing grades.

module.exports = filterStudents;
function filterStudents(students, passingGrade) {
  let passingStudents = students.filter(
    (student) => student.grade >= passingGrade
  );
  return passingStudents.map((student) => student.name);
}
