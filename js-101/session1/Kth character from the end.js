// Problem Description
// You are given a string str and a number k as arguments.You need to return the kth character of that string from the end.
//     Hint: The first character of a string is at index 0, second character at index 1 and so on.
//         Hint: Use string.length to get length of the string.
// Sample Input 1
// abcdef, 3
// Sample Output 1
// d
// Explanation
// The third character of the string abcdef from end is d.
// Sample Input 2
// first, 2
// Sample Output 2
// s
// Explanation
// The second character of the string first from end is s.


function kthCharFromEnd(str, k) {
    // You only need to implement this function.

    let len = str.length;

    if (len < 0 && k > len) {
        return "Invalid";
    } else {
        let out = len - k;
        return str.charAt(out);
    }
}

if (kthCharFromEnd("abcdefghi", 2) !== "h")
    console.log("Test fails: Expected 'h' for input str = 'abcdefghi' and k = 2");
else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");

