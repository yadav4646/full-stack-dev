// Problem Description
// You are given an array of numbers arr as an argument. You need to implement the function multiplyThree which returns a new array wherein all its elements are multiplied by 3. Please note that you need to implement this problem using the map method.

// Hint: map() is used for transforming the array, and creating a new array by calling a function for every array element.

// Sample Input
// 1, 2, 3, 4

// Sample Output
// 3, 6, 9, 12

// Explanation
// All elements are multiplied by 3.

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function multiplyThree(arr) {
  // You only need to implement this function.
  let newArr = arr.map((e) => e * 3);
  return newArr;
}

if (JSON.stringify(multiplyThree([1, 2, 3])) !== JSON.stringify([3, 6, 9]))
  console.log("Test fails: Expected [3, 6, 9] for input arr = [1, 2, 3]");
else console.log("Sample test case for input arr = [1, 2, 3] passed!");

module.exports = multiplyThree;
