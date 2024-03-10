// Problem Description
// You are given two numbers a and b as arguments.You have to implement the function findLargest that will return the largest number between the two numbers.

//     Hint: Use comparison operator(>).
//         Hint: This can be solved using if else.
// Sample Input
// 1, 9
// Sample Output
// 9
// Explanation
// As 9 is greater than 1, return 9.


function findLargest(a, b) {
    // You only need to implement this function.
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

if (findLargest(1, 2) !== 2)
    console.log("Test fails: Expected 2 for input a = 1 and b = 2");
else
    console.log("Sample test case for input a = 1 and b = 2 passed!");

