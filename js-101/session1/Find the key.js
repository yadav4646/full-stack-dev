// Problem Description
// You are given an array of numbers arr and number key as arguments. You need to implement the function search in which you have to use for…each to iterate through the array and if the key is present return true else return false.

// Sample Input
// [1, 2, 3, 4], 0

// Sample Output
// false

// Explanation
// 0 is not present in the array hence the output is false.

/**
 * @param {number[]} arr
 * @param {number} key
 * @return {boolean}
 */

function search(arr, key) {
  // You only need to implement this function.
  let found = false;

  arr.forEach((num) => {
    if (num === key) {
      found = true;
    }
  });

  return found;
}

if (search([1, 2, 3, 2, 3, 2], 0) != false)
  console.log(
    "Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 "
  );
else
  console.log(
    "Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!"
  );

module.exports = search;
