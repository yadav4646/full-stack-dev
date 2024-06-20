// Problem Description
// Given only a reference to a node to be deleted in a singly linked list, implement a function to delete the given node. The given node is guaranteed to be neither the first, nor the last node.

// Note: The node to be deleted is not necessarily the exact middle node but is one of nodes that is not at the ends.

// Note: The input format will accept K, which denotes the position of the node to be deleted. However, in the function definition you’re given, you will not be given K. Instead, you’ll only have a pointer to the node to be deleted, and you have to use only that. You will not be able to use K. The challenge is to figure out how to delete this node without having a reference to the head of the linked list.

// Input format
// First-line contains N, the number of elements in the linked list.

// Next line contains N space-separated integers, elements of the linked list.

// Next Line contains K, denotes the position of the node to be deleted.

// Output format
// A list of N integers after deleting the Kth node.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// 1 < K < N

// Sample Input 1
// 5

// 1 5 2 4 3

// 3

// Sample Output 1
// 1 5 4 3

// Explanation 1
// The 3rd node containing 2 has been removed leading to 1 5 4 3.

const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/
/**
 * @param {ListNode} node
 * @return {void}
 */
function deleteGivenNode(node) {
  if (node == null || node.next == null) {
    return; // Cannot delete if node is null or last node
  }

  // Copy the data from the next node to the current node
  node.val = node.next.val;

  // Update the next pointer to skip the next node
  node.next = node.next.next;
}

module.exports = deleteGivenNode;

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
