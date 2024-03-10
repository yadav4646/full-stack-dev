// Problem Description
// You are given three numbers a, b and c as arguments.You have to implement the function compareNumbers such that EITHER the first number is equal to the second OR the second number is equal to the third, return true.Else, return false.
//     Hint: This is a combination of comparison operator and logical operator.
// Sample Input
// 10, 99, 99
// Sample Output
// true
// Explanation
// The second number(99) and third number(99) are equal, hence true.


function compareNumbers(a, b, c) {
    // You only need to implement this function.
    if (a == b || b == c) {
        return true
    } else {
        return false
    }
}

if (compareNumbers(1, 1, 2) !== true)
    console.log("Test fails: Expected true for input a = 1, b = 1 and c = 2");
else
    console.log("Sample test case for input a = 1, b = 1 and c = 2 passed!");


