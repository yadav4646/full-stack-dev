// Problem Description
// You are given two numbers a and b as arguments.You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.
//     Hint: Use addition operator(+).
//         Hint: Use a new variable which can be used to store and return the sum.
// Sample Input
// 89, 11
// Sample Output
// 100
// Explanation
// We get 89 + 11 = 100

// 6 Step Strategy to solve problems
// Use the 6 step strategy to solve any problem

// Understand the problem
// Design test data / test cases(i.e.input and expected output)
// Derive the solution(write pseudo code for the solution)
// Test the solution(do a dry run of the pseudo code for the test data and confirm it works)
// Write the program / code(using JavaScript here)
// Test the code(debug any syntax errors and logical errors)

function sumOfTwoNumbers(a, b) {
    // You only need to implement this function.
    return a + b;
}

if (sumOfTwoNumbers(1, 2) !== 3)
    console.log("Test fails: Expected 3 for input a = 1 and b = 2");
else
    console.log("Sample test case for input a = 1 and b = 2 passed!");

module.exports = sumOfTwoNumbers;

