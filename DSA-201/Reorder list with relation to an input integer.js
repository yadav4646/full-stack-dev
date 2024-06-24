// Problem Description
// Given a linked list and an integer X, partition the LL around X, such that all nodes less than X come before all nodes greater than X. If X is contained within the list, then those nodes need

// to be after the elements less than X and before the elements greater than X, i.e. they should appear between the left and right partitions.

// You can also see if you can preserve the order for elements on either side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and X = 5, the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// X - An integer denoting the value that you must use to partition the given list

// Output format
// Return the head after partitioning the list

// Constraints
// 1 <= N <= 10^5

// -10^9 <= value, X <= 10^9

// Sample Input 1
// 7

// 3 5 8 5 10 2 1

// 5

// Sample Output 1
// 3 2 1 5 5 8 10

// Explanation 1
// The nodes [3], [1] and [2] are less than [5] so they are present before [8] and [10].

// There are also other possible answers for the same input.

// Sample Input 2
// 5

// 3 1 3 1 4

// 2

// Sample Output 2
// 1 1 4 3 3

// Explanation 2
// All nodes with values less than 2 come before all nodes with values greater than 2.

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
 * @param {number} X
 * @return {ListNode}
 */
function partition(head, x) {
  // Create dummy nodes for three partitions: less, equal, and greater
  let lessDummy = new ListNode(0);
  let equalDummy = new ListNode(0);
  let greaterDummy = new ListNode(0);

  // Initialize pointers for all three partitions
  let less = lessDummy;
  let equal = equalDummy;
  let greater = greaterDummy;

  // Traverse the original list
  while (head !== null) {
    if (head.val < x) {
      // If current node's value is less than x,
      // add it to the 'less' partition
      less.next = head;
      less = less.next;
    } else if (head.val === x) {
      // If current node's value is equal to x,
      // add it to the 'equal' partition
      equal.next = head;
      equal = equal.next;
    } else {
      // If current node's value is greater than x,
      // add it to the 'greater' partition
      greater.next = head;
      greater = greater.next;
    }
    // Move to the next node in the original list
    head = head.next;
  }

  // Connect the three partitions
  less.next = equalDummy.next;
  if (equalDummy.next !== null) {
    equal.next = greaterDummy.next;
  } else {
    less.next = greaterDummy.next;
  }

  // Set the last node's next to null to avoid cycles
  greater.next = null;

  // Return the head of the partitioned list
  return lessDummy.next;
}

module.exports = partition;

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
