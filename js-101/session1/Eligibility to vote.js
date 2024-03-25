// Problem Description
// You need to create a function called canVote that takes an array of numbers,ages, as its input parameter. Implement the function to filter and return an array containing only the ages that are greater than or equal to 18, as these are considered valid ages for voting. Ensure that you use the filter method for this implementation.

// Testing Your Code:

// After implementing the canVote function, you must validate your code as follows:

// Make a function call to the canVote function, with the argument [32, 33, 16, 40], and store the value returned by it in a variable, and console.log this variable.

// If you got [32, 33, 40] logged on the console, your implementation is correct for this case, else it is wrong.

// Hint: The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array otherwise it will not be pushed.

// Sample Input
// 33, 32, 16, 40

// Sample Output
// 33, 32, 40

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function canVote(ages) {
  // You only need to implement this function.
  return ages.filter((age) => age >= 18);
}

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
// ------  Other Approach --------------
// function canVote(ages){
//   return ages.filter(checkAdult);
// }
// function checkAdult(age){
//   return age >= 18;
// }
// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS

if (JSON.stringify(canVote([32, 33, 16, 40])) !== JSON.stringify([32, 33, 40]))
  console.log(
    "Test fails: Expected [32, 33, 40] for input ages = [32, 33, 16, 40]"
  );
else console.log("Sample test case for input arr = [32, 33, 16, 40] passed!");
// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS
module.exports = canVote;
