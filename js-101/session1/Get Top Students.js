// Complete the function getTopStudents that takes in students, an array of objects, and N, a number as parameters. The function should return an array containing the names of top N students based on their grades in the format 'name: "name_of_student"' for that make use of the helper function addAllStudents in which you will add all the students in the above format.

// You can assume that the students array will always contain objects with the properties name and grade.

// Note : The code's functionality can be verified by clicking on the run button and subsequently submitting it for final evaluation.

// Sample Input 1
// [ { name: "Alice", grade: 90 }, { name: "Bob", grade: 95 }, { name: "Charlie", grade: 85 }, { name: "David", grade: 92 }, { name: "Eve", grade: 88 } ], 3

// Sample Output 1
// [ 'name: Bob', 'name: David', 'name: Alice' ]

// Explanation
// Bob, David, and Alice are the top 3 students with the highest grade.

// Sample Input 2
// [ { name: 'Alice', grade: 85 }, { name: 'Bob', grade: 92 }, { name: 'Charlie', grade: 78 }, { name: 'David', grade: 88 }, { name: 'Emily', grade: 95 } ], 1

module.exports = getTopStudents;

function addAllStudents(students) {
  return students.map((student) => `name: ${student.name}`);
}

function getTopStudents(students, N) {
  let sortedStudents = students.sort((a, b) => b.grade - a.grade);
  let topNStudents = sortedStudents.slice(0, N);
  return addAllStudents(topNStudents);
}

// CRIO_SOLUTION_START_MODULE_L1_PROBLEMS
function getTopStudents(students, N) {
  students.sort((a, b) => b.grade - a.grade);
  const all_Students = [];

  function addAllStudents() {
    let count = 0;
    students.forEach((student) => {
      if (count >= N) {
        return;
      }
      all_Students.push(`name: ${student.name}`);
      count++;
    });
  }

  addAllStudents();
  return all_Students.slice(0, N);
}

if (
  JSON.stringify(
    getTopStudents(
      [
        { name: "Alice", grade: 85 },
        { name: "Emily", grade: 95 },
        { name: "Charlie", grade: 78 },
      ],
      2
    )
  ) !== JSON.stringify(["name: Emily", "name: Alice"])
)
  console.log("Test fails: Expected Emily and Alice as the top two students");
else console.log("Sample test case for N = 2 passed!");

// CRIO_SOLUTION_END_MODULE_L1_PROBLEMS

module.exports = getTopStudents;
