// Problem Description
// You are given a number a as an argument.You have to implement the function incrementNumber that will increment the number by 1 and return the result.

// You need to write a function named incrementNumber.It must take 1 input parameter that represents a number.Implement the function such that it increments the number by 1 and returns the result.
//     Hint: Use addition operator(+).
//     Hint: Use this code to test your implementation for one set of inputs.Copy paste this in the IDE after you write your function and click on ‘Run Code’:

// if (incrementNumber(2) !== 3)
//     console.log("Test fails: Expected 3 for input a = 2");
// else
//     console.log("Sample test case for input a = 2 passed!");

// Sample Input
// 10

// Sample Output
// 11

// Explanation
// 10 + 1 = 11

// 6 Step Strategy to solve problems
// Use the 6 step strategy to solve any problem
// Understand the problem
// Design test data / test cases(i.e.input and expected output)
// Derive the solution(write pseudo code for the solution)
// Test the solution(do a dry run of the pseudo code for the test data and confirm it works)
// Write the program / code(using JavaScript here)
// Test the code(debug any syntax errors and logical errors)


function incrementNumber(a) {
    return a + 1;
}

if (incrementNumber(2) !== 3)
    console.log("Test fails: Expected 3 for input a = 2");
else
    console.log("Sample test case for input a = 2 passed!");
