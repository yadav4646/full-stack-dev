// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Constraints
// 1 ≤ N ≤ 10^5

// -10^9 ≤ A[i] ≤ 10^9

// Sample Input 1
// 8

// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

function contigiousSequence(n, arr) {
  // Initialize:
  //     max_so_far = INT_MIN
  //     max_ending_here = 0

  // Loop for each element of the array

  //   (a) max_ending_here = max_ending_here + a[i]
  //   (b) if(max_so_far < max_ending_here)
  //             max_so_far = max_ending_here
  //   (c) if(max_ending_here < 0)
  //             max_ending_here = 0
  // return max_so_far

  let ans = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sum > ans) {
      ans = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return ans;
}
