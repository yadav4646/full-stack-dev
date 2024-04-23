// Problem Description
// Given a number n, you have to calculate the factorial of that number.

// Input format
// First line contains an integer - n

// Output format
// Print the factorial of the given number.

// Sample Input 1
// 3

// Sample Output 1
// 6

// Explanation
// 3! = 3.2.1 = 6

// Constraints
// 0 <= n <= 10

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

function readIntArr() {
  let str = readLine();
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str[i], 10));
  }
  return arr;
}

function print(x) {
  process.stdout.write(x + "");
}

/**
 * @param {number} n
 * @return {number}
 */

function factorialDSA(n) {
  //implement this function
  if (n == 1) {
    return 1;
  }
  return n * factorialDSA(n - 1);
}

function main() {
  let n = parseInt(readLine());
  const result = factorialDSA(n);
  console.log(result);
}
