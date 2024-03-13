// Problem Description
// You are given a string str and a number k as arguments.You have to implement a function repeatString which will repeat the given string for k times.Return an empty string if k is not greater than 0. For this challenge, do not use the built -in repeat() method.
//     Hint: Use a while loop to add string k times.
// Sample Input 1
// "a", 3
// Sample Output 1
// "aaa"
// Explanation
// "a" is concatenated 3 times.Thus the returned string is “aaa”.
// Sample Input 2
// "ab", 4
// Sample Output 2
// "abababab"
// Explanation
// "ab" is concatenated 4 times.Thus the returned string is “abababab”.

function repeatString(str, k) {
  if (k <= 0) {
    return "";
  }

  let result = "";
  let count = 0;

  while (count < k) {
    result += str;
    count++;
  }

  return result;
}

if (repeatString("!", 3) !== "!!!")
  console.log("Test fails: Expected '!!!' for input str = '!' and k = 3");
else console.log("Sample test case for input str = '!' and k = 3 passed!");

module.exports = repeatString;
