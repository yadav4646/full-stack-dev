// Problem Description
// You are given a string str as an argument. You have to implement the function reverseString which returns a string that is the reverse of the given string.
// Here is the algorithm to solve the given problem.
// Split the given string into an array of substrings.
// Reverse the array of substrings.
// Join the (reversed) array of substrings to form a new string.
// Return this new string, which will be the reverse of the original string.
// if (reverseString("abcdefghi") !== "ihgfedcba")
// console.log("Test fails: Expected 'ihgfedcba' for input str = 'abcdefghi'");
// else
// console.log("Sample test case for input str = 'abcdefghi' passed!");

module.exports = reverseString;

function reverseString(str) {
  let arr = str.split("");
  var newArr = arr.reverse();
  var newArr = newArr.join("");
  return newArr;
}

if (reverseString("abcdefghi") !== "ihgfedcba")
  console.log("Test fails: Expected 'ihgfedcba' for input str = 'abcdefghi'");
else console.log("Sample test case for input str = 'abcdefghi' passed!");
