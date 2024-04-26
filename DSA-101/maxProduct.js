// Problem Description
// Given the array of integers nums of size n, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input format
// First line contains n, the number of distinct integers.

// Second line contains n space separated integers

// Output format
// Print the maximum product.

// Sample Input 1
// 4

// 3 4 5 2

// Sample Output 1
// 12

// Explanation
// If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)(nums[2]-1) = (4-1)(5-1) = 3*4 = 12.

// Sample Input 2
// 4

// 1 5 4 5

// Sample Output 2
// 16

// Explanation
// Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Constraints
// 2 <= n <= 500

// 1 <= nums[i] <= 10^3

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
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct2(n, nums) {
  //implement this function
  let arr = nums.sort((a, b) => a - b);
  return (arr[arr.length - 1] - 1) * (arr[arr.length - 2] - 1);
}

function main() {
  let n = parseInt(readLine());
  let nums = readIntArr();
  let res = maxProduct2(n, nums);
  console.log(res);
}
