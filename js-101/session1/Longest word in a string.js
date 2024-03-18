// Problem Description
// You are given a string str as an argument. You have to implement the function findLongestWordLength which takes in a string and returns the length of the longest word in the string as a number.
// Hint 1: Use the split method to split a string into an array of substrings.
// Hint 2: Use loops to iterate through the words and use the length method to find the length of the length.
// Sample Input 1
// The quick brown fox jumped over the lazy dog
// Sample Output 1
// 6
// Explanation
// The longest word in the given string is "jumped" and its length is 6.
// Sample Input 2
// I live in India
// Sample Output 2
// 5

/**
 * @param {string} str
 * @return {number}
 */

function findLongestWordLength(str) {
  // You only need to implement this function.
  let max = 0;
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > max) {
      max = newStr[i].length;
    }
  }
  return max;
}

if (findLongestWordLength("I live in India") !== 5)
  console.log("Test fails: Expected 5 for input str = 'I live in India'");
else console.log("Sample test case for input str = 'I live in India' passed!");

module.exports = findLongestWordLength;
