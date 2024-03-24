// Problem Description
// Create a function named manipulatingArray that has a single parameter arr that represents an array of numbers. The function should modify the numbers within the array: if a number is even, it should be incremented by 5; otherwise, it should be multiplied by 5. But we don’t have to return anything, remember how arrays are passed and if any changes are made in the passed array does it reflect in the original array? Think about it. After implementing the manipulatingArray function, you will write a test case to validate your code.

// Testing your code:

// After implementing the manipulatingArray function, you must validate it as follows:

// Declare an array and initialize it with [9, 1, 7, 4]. Make a function call to the manipulatingArray function, with the created array as the argument. Then, console.log the array.

// If you got [45, 5, 35, 9] logged on the console, your implementation is correct for this case, else it is wrong.

// Hint: Objects and Arrays are passed by reference, meaning if any changes are made in the passed Object / Array those will be reflected in the original Object / Array.

module.exports = manipulatingArray;

function manipulatingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i] + 5;
    } else {
      arr[i] = arr[i] * 5;
    }
  }
}

var arr = [9, 1, 7, 4];
manipulatingArray(arr);
if (arr.toString() != [45, 5, 35, 9].toString()) {
  console.log(
    "Test fails: Expected [45, 5, 35, 9] for input arr = [9, 1, 7, 4]"
  );
} else {
  console.log("Sample test case for input arr = [9, 1, 7, 4] passed!");
}
