// Problem Description
// Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

// Input format
// There are 2 lines of input

// The first line contains an integer N denoting the size of the array.

// The second line contains N space separated positive integers denoting the values in the array A.

// Output format
// Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

// Constraints
// 1 <= N <= 10^5

// 0 <= Values in the array <= 10^9

// Sample Input 1
// 4

// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

// Explanation 1
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1

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
 * @param {number[]} arr
 * @return {number[]}
 */
function nextLargerElement(n, arr) {
  const result = new Array(n).fill(-1); // Initialize all elements to -1
  const stack = []; // Stack to keep track of indices

  for (let i = 0; i < n; i++) {
    // Pop elements from the stack until a greater element is found
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const top = stack.pop();
      result[top] = arr[i];
    }

    // Push the current index onto the stack
    stack.push(i);
  }

  return result;
}
function main() {
  let n = parseInt(readLine(), 10);
  let arr = readIntArr();
  let result = nextLargerElement(n, arr);
  console.log(...result);
}

/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
      a. Obvious logic (this would only test ability to convert logic to code)
      b. Figuring out logic
      c. Knowledge of specific algorithm, data structure or pattern
      d. Knowledge of specific domain or concepts
      e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an Instruction Manual for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Olds "Instruction Manual
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
      a. If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
*/
