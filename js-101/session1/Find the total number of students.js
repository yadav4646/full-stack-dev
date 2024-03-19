// Problem Description
// You are given a 2D array of numbers arr. You have to implement the function matrixSum which will return the sum of all elements of the matrix.

// Hint 1: To iterate through 2D arrays, use nested loops.

// Hint 2: Iterate through the array and compute the sum of all elements.

// Sample Input 1
// [[23,48],[12,18]]

// Sample Output 1
// 101

// Explanation
// Sum of the elements 23 + 48 + 12 + 18 is equal to 101.

// Sample Input 2
// [[5, 1], [2, 3]]

// Sample Output 2
// 11

// Explanation
// Sum of the elements 5 + 1 + 2 + 3 is equal to 11.

/**
 * @param {number[][]} arr
 * @return {number}
 */

function matrixSum(arr) {
  // You only need to implement this function.

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      total = total + arr[i][j];
    }
  }
  return total;
}

if (
  matrixSum([
    [5, 1],
    [2, 4],
  ]) != 12
)
  console.log("Test fails: Expected 12 for input arr = [[5, 1], [2, 4]]");
else console.log("Sample test case for input arr = [[5, 1], [2, 4]] passed!");

module.exports = matrixSum;
