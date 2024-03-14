// Problem Description
// You are given a number n as an argument. You have to implement the function "oddNumbers" to return all odd numbers greater than 0 and less than or equal to n in the form of an array.
// Hint: The value of n will be greater than 0.
// Sample Input 1
// 10
// Sample Output 1
// 1, 3, 5, 7, 9
// Explanation
// The odd numbers from 1 to 10 are 1, 3, 5, 7, and 9.

/**
 * @param {number} n
 * @return {number[]}
 */

function oddNumbers(n) {
  // You only need to implement this function.

  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

if (oddNumbers(5).toString() !== [1, 3, 5].toString())
  console.log("Test fails: Expected [1, 3, 5] for input n = 5");
else console.log("Sample test case for input n = 5 passed!");

module.exports = oddNumbers;
