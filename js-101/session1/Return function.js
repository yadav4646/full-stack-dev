// roblem Description
// Implement a function greeting that takes in a parameter day that represents the string that indicates a day of the week, and returns a function named say that takes in no parameters and returns a string in the form "Today is day". For example, if the day is "Monday", it must return "Today is Monday".

// After implementing the greeting function, you must validate it as follows:

// Make a function call to the greeting function with the argument ‘Monday’. This will return the function say, hence, you must call this function as well and store the value returned by it in a variable, and console.log this variable.

// If you got ‘Today is Monday’ logged on the console, your implementation is correct for this case, else it is wrong.

// Sample Input
// Monday

// Sample Output
// Today is Monday

// Explanation
// Today is Monday will be the output.

module.exports = greeting;

// function greeting(day) {
//   return function say() {
//     return "Today is " + day;
//   }
// }

// let sayFunction = greeting('Monday');

// let result = sayFunction();

// console.log(result);

function greeting(day) {
  return function say() {
    return `Today is: ${day}`;
  };
}

let sayFunc = greeting("Monday");

let res = sayFunc();

console.log(res);
