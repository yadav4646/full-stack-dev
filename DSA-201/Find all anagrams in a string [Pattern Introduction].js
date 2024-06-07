// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.

// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.

// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

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
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAllAnagramsInAString(s, p) {
  // create a map for pattern string
  let b = p.length; // window size is p.length
  let pmap = new Map();
  for (let i = 0; i < p.length; i++) {
    pmap.set(p[i], (pmap.get(p[i]) || 0) + 1);
  }
  let ans = [];
  let smap = new Map();
  for (let i = 0; i < s.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);

    if (i + 1 >= b) {
      if (compareMap(pmap, smap)) {
        let j = i - b + 1;
        ans.push(j);
      }
      let lastEle = s[i - b + 1];
      let cnt = smap.get(lastEle);
      smap.set(lastEle, cnt - 1);
      if (smap.get(lastEle) === 0) {
        smap.delete(lastEle);
      }
    }
  }
  return ans;
}

function compareMap(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key1, value1] of map1) {
    let value2 = map2.get(key1);
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
function main() {
  let [s, p] = readLine().split(" ");
  let result = findAllAnagramsInAString(s, p);

  console.log(result.length);

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
