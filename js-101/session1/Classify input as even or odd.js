// Problem Description
// You are given a number num as an argument.You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.
// You need to write a function named evenOrOdd.It must take 1 input parameter that represents a number.Implement the function such that it returns the string "Even" for even numbers or "Odd" for odd numbers.
//     Hint: Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly divided by 2.
// Hint: You can use conditionals to implement it.
//     Hint: Use this code to test your implementation for one set of inputs.Copy paste this in the IDE after you write your function and click on ‘Run Code’:

// if (evenOrOdd(2) !== "Even")
//     console.log("Test fails: Expected Even for input num = 2");
// else
//     console.log("Sample test case for input num = 2 passed!");
// Sample Input
// 10
// Sample Output
// Even
// Explanation
// 10 is divisible by 2 hence the output is Even.

module.exports = evenOrOdd;

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

if (evenOrOdd(2) !== "Even")
    console.log("Test fails: Expected Even for input num = 2");
else console.log("Sample test case for input num = 2 passed!");
