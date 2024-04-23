// roblem Description
// You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

// Sample Input 2
// 3

// Sample Output 2
// 6

// Explanation
// 1+2+3 = 6

// Constraints
// 1 <= N <= 10^3

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.replace(/\s+/g, " ").trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * @param {number} n
 * @return {number}
 */

function naturalSum(N) {
  //implement this function
  if (N == 0) {
    return 0;
  }
  return N + naturalSum(N - 1);
}

function main() {
  let N = parseInt(readLine());
  let res = naturalSum(N);
  console.log(res);
}
