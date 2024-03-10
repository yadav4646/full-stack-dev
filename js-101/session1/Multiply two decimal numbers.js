// Problem Description
// You are given two decimal numbers a and b as arguments.You have to implement the function multiplyTwoDecimals which will multiply the two numbers.
//     Hint: Use multiplication operator(*)
// Sample Input
// 896.78, 11.5
// Sample Output
// 10312.97
// Explanation
// 896.78 * 11.5 = 10312.97

// 6 Step Strategy to solve problems
// Use the 6 step strategy to solve any problem

// Understand the problem
// Design test data / test cases(i.e.input and expected output)
// Derive the solution(write pseudo code for the solution)
// Test the solution(do a dry run of the pseudo code for the test data and confirm it works)
// Write the program / code(using JavaScript here)
// Test the code(debug any syntax errors and logical errors)


function multiplyTwoDecimals(a, b) {
    // You only need to implement this function.
    return a * b;
}

if (multiplyTwoDecimals(896.78, 11.5) !== 10312.97)
    console.log("Test fails: Expected 10312.97 for input a = 896.78 and b = 11.5");
else
    console.log("Sample test case for input a = 896.78 and b = 11.5 passed!");


