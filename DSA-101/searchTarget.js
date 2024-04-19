// Problem Description
// Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

// Note - Try implementing with O(logN) runtime complexity.

// Input format
// First line contains integers N, the number of distinct integers, and X, the target value. Second line contains N space separated integers.

// Output format
// Print the index of the target element if found else return -1.

// Sample Input 1
// 5 7 1 3 5 7 13

// Sample Output 1
// 3

// Explanation
// Target integer 7 is at index 3.

// Sample Input 2
// 5 8 1 3 5 7 13

// Sample Output 2
// -1

// Explanation
// Target integer 8 is not present.

// Constraints
// 1 <= N <= 10^3 1 <= A[i] <= 10^9

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
 * @param {number[]} A
 * @param {number} N
 * @param {number} X
 * @return {number}
 */
function searchTarget(N, A, X) {
  //implement this function

  let l = 0;
  let r = N - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (A[mid] == X) {
      return mid;
    } else if (A[mid] < X) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

// TC:O(logn)
// SC: o(1)

function main() {
  let [N, X] = readIntArr();
  let A = readIntArr();
  let res = searchTarget(N, A, X);
  console.log(res);
}
