// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

function equalPartition(n, arr) {
  const pre = [];

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    pre.push(sum);
  }

  for (let i = 1; i < n - 1; i++) {
    const leftSum = pre[i - 1];
    const rightSum = pre[n - 1] - pre[i];

    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}
