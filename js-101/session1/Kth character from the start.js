// Problem Description
// You are given a string str and a number k as arguments.You need to return the kth character of that string from the start.
//     Hint: The first character of a string is at index 0, second character at index 1 and so on.
//         Hint: kth character in a string, is at index k - 1.
// Sample Input
// abcdef, 3
// Sample Output
// c
// Explanation
// The third character of the string abcdefis c.Notice c is the third character at index 3 - 1 = 2 because indexing starts from 0.



function kthCharFromStart(str, k) {

    const index = k - 1;

    return str.charAt(index);
}

if (kthCharFromStart("abcdefghi", 2) !== 'b')
    console.log("Test fails: Expected 'b' for input str = 'abcdefghi' and k = 2");
else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");

