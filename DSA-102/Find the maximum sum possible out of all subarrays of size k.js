// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input 1
// 4 2

// 100 200 300 400

// Sample Output 1
// 700

// Explanation
// We get maximum sum by adding subarray {300,400}

// of size 2.

// Constraints
// 1<=K<=N<=100000

// 0<=abs(arr[i])<=10000

function maximumSubarraySumSizeK(n, arr, k) {
  let l = 0,
    r = 0;
  let sum = 0,
    ans = Number.MIN_SAFE_INTEGER;
  while (r < n) {
    sum += arr[r];
    if (r - l + 1 == k) {
      if (sum > ans) {
        ans = sum;
      }
      sum -= arr[l]; // removing the left most element
      l++;
    }
    r++;
  }
  return ans;
}
