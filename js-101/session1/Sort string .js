// Problem Description
// You need to create a function called sort that takes an array of strings, arr, as its input parameter. Implement the function to sort the elements of the array lexicographically.

// Testing Your Code:

// After implementing the sort function, you must validate your code as follows:

// Make a function call to the sort function, with the argument ["Banana", "Orange", "Apple" ], and store the value returned by it in a variable, and console.log this variable.

// If you got ["Apple", "Banana", "Orange"] logged on the console, your implementation is correct for this case, else it is wrong.

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function sort(arr) {
  // You only need to implement this function.
  arr.sort();
}

var arr = ["abc", "pqr", "banana"];
if (sort(arr) && arr != ["abc", "banana", "pqr"])
  console.log(
    "Test fails: Expected ['abc', 'banana', 'pqr'] for input arr = ['abc', 'pqr', 'banana'] "
  );
else
  console.log(
    "Sample test case for input arr = ['abc', 'pqr', 'banana'] passed!"
  );
// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS

module.exports = sort;
