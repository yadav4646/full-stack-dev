// Problem Description
// You are given a number a as an argument.You have to implement the function findCube that will return the cube of that number.Cube of a number basically means the number is multiplied by itself thrice.

// Hint: Use multiplication operator(*).
// Sample Input
// 3
// Sample Output
// 27
// Explanation
// Cube of 3 would be 3 x 3 x 3 = 27
// 6 Step Strategy to solve problems
// Use the 6 step strategy to solve any problem

// Understand the problem
// Design test data / test cases(i.e.input and expected output)
// Derive the solution(write pseudo code for the solution)
// Test the solution(do a dry run of the pseudo code for the test data and confirm it works)
// Write the program / code(using JavaScript here)
// Test the code(debug any syntax errors and logical errors)

function findCube(a) {
    // You only need to implement this function.
    return a ** 3
}


if (findCube(2) !== 8)
    console.log("Test fails: Expected 8 for input a = 2");
else
    console.log("Sample test case for input a = 2 passed!");


module.exports = findCube;

