// Problem Description
// Given a singly linked list containing N integers, sort it in O(NlogN) time.
// Input format
// N - An integer denoting the number of nodes in the linked list.
// N integers follow where ith integer denotes the ith node value in the linked list-
// Output format
// Return the head of the sorted list.
// Function definition
// You have to implement the given function. It accepts the head of the LL as an argument. You have to return the new head of the sorted list after sorting it
// Constraints
// 0 <= N <= 10^5
// -10^9 <= value <= 10^9
// Sample Input 1
// 4
// 4 2 1 3
// Sample Output 1
// 1 2 3 4
// Explanation 1
// This is the sorted output.
// Sample Input 2
// 4
// 8 20 2 9
// Sample Output 2
// 2 8 9 20
// Explanation 2
// This is the sorted output.

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
 * @return {ListNode}
 */
function sortList(head) {
  // Base case: if list is empty or has only one element
  if (!head || !head.next) {
    return head;
  }

  // Split the list into two halves
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const mid = slow.next;
  slow.next = null;

  // Recursively sort both halves
  const left = sortList(head);
  const right = sortList(mid);

  // Merge the sorted halves
  return mergeLists(left, right);
}

function mergeLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummy.next;
}

module.exports = sortList;

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
