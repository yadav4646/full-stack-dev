// Problem Description
// You need to create a function named remove that takes three parameters: an array of strings names, a number startIndex, and a number deleteCount. Implement the function by utilizing the splice method, removing elements from the array starting at the specified startIndex and continuing for the number of elements specified by deleteCount. The function should then return the removed elements in the form of an array.

// Testing Your Code:

// After implementing the remove function, you must validate your code as follows:

// Make a function call to the remove function, with the 3 arguments:

// ["Ravi", "Faizan", "Kiran", "Shashwat", "Pulkit"] i.e. array of strings

// 2 i.e. the startIndex

// 2 i.e. the deleteCount

// and then store the value returned by it in a variable, and console.log this variable.

// If you got ["Kiran", "Shashwat"] logged on the console, your implementation is correct for this case, else it is wrong.

// Hint: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function remove(names, startIndex, deleteCount) {
  // You only need to implement this function.
  var removedElements = names.splice(startIndex, deleteCount);
  return removedElements;
}

if (
  JSON.stringify(remove(["Ravi", "Pulkit", "Kiran", "Aagam"], 2, 2)) !==
  JSON.stringify(["Kiran", "Aagam"])
)
  console.log(
    "Test fails: Expected ['Kiran','Aagam'] for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], startIndex = 2, deleteCount = 2"
  );
else
  console.log(
    "Sample test case for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], startIndex = 2, deleteCount = 2 passed!"
  );

// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS
module.exports = remove;
