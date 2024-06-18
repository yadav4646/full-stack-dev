// Problem Description
// Given a linked list, remove the Kth node from the end of the list and return its head.

// Note: the given K will always be a valid node.

// Input format
// There are three lines of input

// First line contains N, the number of nodes in the linked list

// Second line contains N integers, denoting the values of the linked list

// Third line contains K, the node to be deleted from the end.

// Output format
// Return the head of the LL after deleting the Kth node from the end.

// Function definition
// You have to complete the given function. It accepts two arguments - the head of the linked list, and k. You have to return the head of the LL after making the necessary change.

// Constraints
// 1 <= N<= 10^5

// -10^9 <= value <= 10^9

// 1 <= K <= N

// Sample Input 1
// 5

// 1 5 2 4 3

// 2

// Sample Output 1
// 1 5 2 3

// Explanation 1
// The 2nd node from the end is 4, removing which, gives us 1 5 2 3

// Sample Input 2
// 5

// 3 1 3 2 4

// 4

// Sample Output 2
// 3 3 2 4

// Explanation 2
// The 4th node from the end is 1, removing which, gives us 3 3 2 4

const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function deleteKthToLast(head, k) {
  // Create two pointers: first and second
  let first = head;
  let second = head;

  // Move the first pointer k nodes ahead
  for (let i = 0; i < k; i++) {
    if (first === null) {
      // k is greater than the length of the list
      return head;
    }
    first = first.next;
  }

  // If the first pointer is null, it means we need to delete the head node
  if (first === null) {
    head = head.next;
    return head;
  }

  // Move both pointers until the first pointer reaches the end
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }

  // Delete the kth node from the end
  second.next = second.next.next;

  return head;
}
module.exports = deleteKthToLast;

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
