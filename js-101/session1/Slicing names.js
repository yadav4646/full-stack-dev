// Problem Description
// You are given an array of strings names, number start, and number end as arguments. You need to implement the function getName that will get elements from start to end where the end index end is exclusive and returns these elements in the form of an array. Please note that you need to implement this problem using the slice method.

// Hint: The slice() method returns selected elements in an array, as a new array.

// Sample Input
// ["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"], 2, 4

// Sample Output
// ["Kiran", "Shashwat"]

// Explanation
// "Kiran" index = 2, "Shashwat" index = 3 and “Pulkit” index = 4. Elements 2 and 3 are returned i.e ["Kiran", "Shashwat"]

/**
 * @param {string[]} names
 * @param {number} start
 * @param {number} end
 * @return {string[]}
 */

function getName(names, start, end) {
  // You only need to implement this function.
  let newArr = names.slice(start, end);
  return newArr;
}

if (
  JSON.stringify(getName(["Ravi", "Pulkit", "Kiran", "Aagam"], 2, 4)) !==
  JSON.stringify(["Kiran", "Aagam"])
)
  console.log(
    "Test fails: Expected ['Kiran', 'Aagam'] for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4"
  );
else
  console.log(
    "Sample test case for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4 passed!"
  );

module.exports = getName;
