// Problem Description
// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// Input format
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Output format
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Sample Input 1
// UD

// Sample Output 1
// true

// Explanation
// The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Sample Input 2
// LL

// Sample Output 2
// false

// Explanation
// The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

// Constraints
// 1 <= moves.length <= 10^4

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
 * @param {string} moves
 * @return {boolean}
 */
function robotReturnToOrigin(moves) {
  //implement this function
  let x = 0;
  let y = 0;

  let arr = moves.split("");

  for (let i = 0; i < arr.length; i++) {
    let move = arr[i];

    switch (move) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
      case "R":
        x++;
        break;
    }
  }

  if (x == 0 && y == 0) {
    return true;
  } else {
    return false;
  }
}

function main() {
  let moves = readLine();
  let res = robotReturnToOrigin(moves);
  console.log(res);
}
