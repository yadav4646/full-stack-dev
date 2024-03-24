// Problem Description
// Given an array of numbers arr as an argument. You need to implement the function sortNumerically which will sort the array in ascending order.

// Hint: Use the customized sort method to sort the given array.

// Sample Input
// 2, 3, 1, 4

// Sample Output
// 1, 2, 3, 4

// Explanation
// Elements are sorted in ascending order as 1, 2, 3, and 4.

/**
 * @param {number[]} arr
 */

function sortNumerically(arr) {
  // You only need to implement this function.
  arr.sort((a, b) => a - b);
}

var arr = [20, 10, 50, 60];
if (sortNumerically(arr) && arr != [10, 20, 50, 60])
  console.log(
    "Test fails: Expected [10, 20, 50, 60] for input arr = [20, 10, 50, 60] "
  );
else console.log("Sample test case for input arr = [20, 10, 50, 60] passed!");

module.exports = sortNumerically;
