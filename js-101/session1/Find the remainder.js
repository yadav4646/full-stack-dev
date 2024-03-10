// Problem Description
// You are given two numbers a and b as arguments.You have to implement the function remainderOfDivision that returns the remainder when you divide the first number by the second number.
// Hint: Choose the correct arithmetic operator that can give the remainder.Remainder will be a whole number.
// Sample Input
// 10, 3
// Sample Output
// 1
// Explanation
// When 10 is divided by 3, we get a quotient of 3 and a remainder of 1.


function remainderOfDivision(a, b) {
    // You only need to implement this function.
    return a % b

}

if (remainderOfDivision(10, 3) !== 1)
    console.log("Test fails: Expected 1 for input a = 10 and b = 3");
else
    console.log("Sample test case for input a = 10 and b = 3 passed!");

