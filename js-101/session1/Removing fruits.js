// Problem Description
// You are given an array of strings fruits, number startIndex, and number deleteCount as arguments. You need to implement the function remove that will remove the elements from startIndex and the number of elements to be removed is given in deleteCount such that the final array will not contain these elements. Please note that you need to implement this problem using the splice method.

// Hint: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// Sample Input
// ["Banana", "Orange", "Apple", "Mango", "Kiwi"], 2, 2

// Sample Output
// ["Banana", "Orange", "Kiwi"]

// Explanation
// "Apple" and “Mango” are removed from the original array.

/**
 * @param {string[]} arr
 * @param {number} startIndex
 * @param {number} deleteCount
 */

function remove(fruits, startIndex, deleteCount) {
  // You only need to implement this function.
  fruits.splice(startIndex, deleteCount);
  return fruits;
}

var arr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
if (remove(arr, 2, 2) && arr == ["Banana", "Orange", "Kiwi"])
  console.log(
    "Test fails: Expected ['Banana', 'Orange', 'Kiwi'] for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], startIndex = 2, deleteCount = 2"
  );
else
  console.log(
    "Sample test case for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], startIndex = 2, deleteCount = 2 passed!"
  );

module.exports = remove;
