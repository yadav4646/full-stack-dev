// Problem Description
// You need to write a function named isDescending.It must take 3 input parameters that represent three numbers.Implement the function such that it returns the boolean value true only if the first number is greater than the second number AND the second number is greater than the third number, else returns the boolean value false.

//     Hint: This is a combination of comparison operator and logical operator.
//         Hint: Use this code to test your implementation for one set of inputs.Copy paste this in the IDE after you write your function and click on ‘Run Code’:

// if (isDescending(3, 2, 1) !== true)
//     console.log("Test fails: Expected true for input a = 3, b = 2 and c = 3");
// else
//     console.log("Sample test cases for input a = 3, b = 2 and c = 1 passed!");
// Sample Input
// 10, 9, 7
// Sample Output
// true
// Explanation
// True, since 10 is greater than 9 and 9 is greater than 7.



function isDescending(a, b, c) {
    if (a > b && b > c) {
        return true;
    } else {
        return false
    }
}


if (isDescending(3, 2, 1) !== true)

    console.log("Test fails: Expected true for input a = 3, b = 2 and c = 3");

else

    console.log("Sample test cases for input a = 3, b = 2 and c = 1 passed!");
