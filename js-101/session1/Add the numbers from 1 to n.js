// Problem Description
// You are given a number n as an argument.You have to implement a function findSumOfFirstN which will add all the numbers from 1 to n and returns the sum.
// Please note that the value of n will be always greater than 0.
// You need to write a function named findSumOfFirstN.It must take 1 input parameter that represents a number.Implement the function such that it add all the numbers from 1 to n and returns the sum.
// Please note that the value of n will be always greater than 0.
// Hint 1: Use a new variable that can be used to store and return the sum.
//     Hint 2: Use for-loop to iterate from 1 to n.
//         Hint: Use this code to test your implementation for one set of inputs.Copy paste this in the IDE after you write your function and click on ‘Run Code’:
// if (findSumOfFirstN(3) !== 6)
//     console.log("Test fails: Expected 6 for input n = 3");
// else
//     console.log("Sample test case for input n = 3 passed!");
// Sample Input 1
// 3
// Sample Output 1
// 6
// Explanation
// For n = 3, output is 6 i.e, 1 + 2 + 3
// Sample Input 2
// 5
// Sample Output 2
// 15
// Explanation
// For n = 5, output is 15 i.e, 1 + 2 + 3 + 4 + 5

module.exports = findSumOfFirstN;

function findSumOfFirstN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

if (findSumOfFirstN(3) !== 6)
    console.log("Test fails: Expected 6 for input n = 3");
else console.log("Sample test case for input n = 3 passed!");
