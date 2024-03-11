// Problem Description
// You need to write a function named checkForSubstr. It must take 2 input parameters. The first parameter represents a string and the second represents a substring of that string. Implement the function such that:
// Find the index of the first occurrence of that substring in the actual string.
// Find the index of the last occurrence of that substring in the actual string.
// If both these indexes are the same, then return true. Otherwise, return false.
// Hint: Use indexOf() to get the index of the first occurrence of the substring.
// Hint: Use lastIndexOf() to get the index of the last occurrence of the substring.
// Hint: Use this code to test your implementation for one set of inputs. Copy paste this in the IDE after you write your function and click on ‘Run Code’:
// if (checkForSubstr("abcdefghi", "def") !== true)
//   console.log("Test fails: Expected true for input str = 'abcdefghi' and k = 'def'");
// else
//   console.log("Sample test case for input str = 'abcdefghi' and k = 'def' passed!");
// Sample Input 1
// Next time there won’t be a next time, time
// Sample Output 1
// false
// Explanation
// time is present twice hence the answer is false.
// Sample Input 2
// Now is the time, time
// Sample Output 2
// true
// Explanation
// time is present only once hence the answer is true.

module.exports = checkForSubstr;

function checkForSubstr(str, subStr){
    let firstIndex = str.indexOf(subStr);
    let lastIndex = str.lastIndexOf(subStr);

    return firstIndex === lastIndex
}

if (checkForSubstr("abcdefghi", "def") !== true)
  console.log("Test fails: Expected true for input str = 'abcdefghi' and k = 'def'");
else
  console.log("Sample test case for input str = 'abcdefghi' and k = 'def' passed!");
