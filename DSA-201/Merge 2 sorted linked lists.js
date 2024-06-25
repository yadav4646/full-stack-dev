// Problem Description
// Given 2 sorted linked lists, merge them into a new sorted linked list and return head of the merged list. The new list should be made by splicing (adjusting the pointers) together the nodes of the first two lists.

// Input format
// N - An integer denoting the number of nodes in the linked list.
// N integers follow where ith integer denotes the ith node value in the linked list
// M - An integer denoting the number of nodes in the linked list.
// M integers follow where jth integer denotes the jth node value in the linked list
// Output format
// Return the sorted list after splicing the nodes of the first two lists.

// Constraints
// 0 <= N <= 10^5
// -10^9 <= value <= 10^9
// 0 <= M <= 10^5
// -10^9 <= value <= 10^9
// Sample Input 1
// 3
// 1 2 4
// 3
// 1 3 4
// Sample Output 1
// 1 1 2 3 4 4

// Explanation 1
// Merging the input lists and keeping the new list sorted results in this.
// Sample Input 2
// 4
// 1 5 7 6
// 1
// 3
// Sample Output 2
// 1 3 5 7 6
// Explanation 2
// Merging the input lists and keeping the new list sorted results in this.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);

  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};
