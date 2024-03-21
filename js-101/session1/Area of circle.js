// Problem Description
// Aryan is a small kid and the circle is his favourite shape. Whenever he gets a number he tries to find the area of a circle whose radius is that given number.

// Create a function named findAreaofCircle that has a parameter r that represents a number that represents the radius of a circle. The function should be implemented to compute and return a number representing the area of the circle with the given radius. It is assured that the provided radius is always greater than 0.

// Testing your code:

// After implementing the findAreaofCircle function, you must validate it as follows:

// Make a function call to the findAreaofCircle function with the argument 3, and store the value returned by it in a variable, and console.log this variable.

// If you got 28.274333882308138 logged on the console, your implementation is correct for this case, else it is wrong.

// Hint 1: Area of circle is Pi * r * r (r is the radius of the circle).

// Hint 2: Use Math.PI to get the value of pi.

// Sample Input
// 3

// Sample Output
// 28.274333882308138

module.exports = findAreaofCircle;

function findAreaofCircle(r) {
  return Math.PI * r * r;
}

const area = findAreaofCircle(3);
console.log(area);
