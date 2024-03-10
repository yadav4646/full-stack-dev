// Problem Description
// A school has the following rules for grading system:
//     [0, 25) - F
//     [25, 45) - E
//     [45, 50) - D
//     [50, 60) - C
//     [60, 80) - B
//     [80, 100] - A
// If the input is less than 0 or greater than 100 then it is considered invalid.
// You are given a number marks as an argument.You have to implement the function gradeMarks such that it will return the corresponding grade or "Invalid" if the input is invalid.
//     Hint: Use "if else if “ kind of chain construct along with logical operators.
// Sample Input 1
// 83.5
// Sample Output 1
// A
// Explanation
// 83.5 is greater than 80 and less than 100, so return "A".
// Sample Input 2
// 42
// Sample Output 2
// E
// Explanation
// 42 is greater than 25 and less than 45, so return "E".


function gradeMarks(marks) {
    // You only need to implement this function.
    if (marks >= 0 && marks <= 100) {
        if (marks >= 0 && marks < 25) {
            return "F"
        } else if (marks >= 25 && marks < 45) {
            return "E"
        } else if (marks >= 45 && marks < 50) {
            return "D"
        } else if (marks >= 50 && marks < 60) {
            return "C"
        } else if (marks >= 60 && marks < 80) {
            return "B"
        } else if (marks >= 80 && marks < 100) {
            return "A"
        }
    } else {
        return "Invalid"
    }
}

if (gradeMarks(45) !== "D")
    console.log("Test fails: Expected D for input marks = 45");
else
    console.log("Sample test case for input marks = 45 passed!");


