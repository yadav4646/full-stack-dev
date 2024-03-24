// Problem Description
// You need to create a function called firstEven that takes an array of numbers, arr, as its input parameter. Implement the function to determine and return the first even number in the array. If there are no even numbers in the array, the function should return undefined.

// Testing Your Code:

// After implementing the firstEven function, you must validate it as follows:

// Make a function call to the firstEven function with the argument [1, 2, 3, 4], and store the value returned by it in a variable, and console.log this variable.

// If you have 2 logged on the console, your implementation is correct for this case, else it is wrong.

// Hint: Use the find method to find the first element in the array and if there is no such element that satisfies the given condition it returns undefined by default.

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function firstEven(arr) {
  // You only need to implement this function.
  return arr.find((e) => e % 2 == 0);
}

if (firstEven([1, 2, 3, 2, 3, 2]) != 2)
  console.log("Test fails: Expected 2 for input arr = [1, 2, 3, 2, 3, 2] ");
else console.log("Sample test case for input arr = [1, 2, 3, 2, 3, 2] passed!");

// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS

module.exports = firstEven;
