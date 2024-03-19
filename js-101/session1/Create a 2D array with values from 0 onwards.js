// Problem Description
// You are given a number size as an argument. You have to implement the function createMatrixII that:

// Creates a 2D array with number of rows and columns equal to size.

// Fills each row with numbers from 0 onwards and return the 2D array.

// Hint: Keep a counter variable and increment it after placing a value in a cell.

// if (JSON.stringify(createMatrixII(2)) !== JSON.stringify([ [ 0, 1 ], [ 2, 3 ] ]))

// console.log("Test fails: Expected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2");

// else

// console.log("Sample test case for input size = 2 passed!");

// Sample Input
// 2

// Sample Output
// [ [ 0, 1], [ 2, 3] ]

// Explanation
// Start from 0 and fill the matrix. We get 0, 1, 2, and 3 elements in the matrix.

module.exports = createMatrixII;

function createMatrixII(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(i * size + j);
    }
    arr.push(row);
  }
  return arr;
}
if (
  JSON.stringify(createMatrixII(2)) !==
  JSON.stringify([
    [0, 1],
    [2, 3],
  ])
)
  console.log("Test fails: Expected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2");
else console.log("Sample test case for input size = 2 passed!");
