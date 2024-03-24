// Problem Description
// You need to create a function named sum that takes an array of numbers, arr, as its input parameter. Utilize the reduce method to implement the function, ensuring that it returns the sum of the elements in the array.

// Testing Your Code:

// After implementing the sum function, you must validate your code as follows:

// Make a function call to the sum function, with the argument [1, 2, 3, 4], and store the value returned by it in a variable, and console.log this variable.

// If you have 10 logged on the console, your implementation is correct for this case, else it is wrong.

// // Hint: The reduce() method reduces an array of values down to just one value.

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function sum(arr) {
  // You only need to implement this function.
  var ans = arr.reduce((result, item) => result + item, 0);
  return ans;
}

if (sum([32, 33, 16, 40]) !== 121)
  console.log("Test fails: Expected 121 for input arr = [32, 33, 16, 40]");
else console.log("Sample test case for input arr = [32, 33, 16, 40] passed!");
// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS

module.exports = sum;
