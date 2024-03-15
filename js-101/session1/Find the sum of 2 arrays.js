// Problem Description
// You are given two arrays arr1 and arr2 as arguments. You have to implement the function sumTwoArrays that will return the total sum of all elements in both arrays.
// Hint 1: Use a new variable, which can be used to store and return the sum.
// Hint 2: Use loops to iterate through the arrays one by one.
// Sample Input
// [1, 2, 3], [4, 5, 6]
// Sample Output
// 21
// Explanation
// 1 + 2 + 3 + 4 + 5 + 6 is 21. Thus we return 21.

function sumTwoArrays(arr1, arr2) {
  // You only need to implement this function.
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  for (let o = 0; o < arr2.length; o++) {
    sum = sum + arr2[o];
  }
  return sum;
}

if (sumTwoArrays([2, 3], [1, 2, 3]) !== 11)
  console.log(
    "Test fails: Expected 11 for input arr1 = [2, 3] and arr2 = [1, 2, 3]"
  );
else
  console.log(
    "Sample test case for input arr1 = [2, 3] and arr2 = [1, 2, 3] passed!"
  );

module.exports = sumTwoArrays;
