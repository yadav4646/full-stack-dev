// Problem Description
// You are given a string str, a start position startInd and an end position endInd as arguments.You have to implement the function getSubstr which trims the string and then returns the substring of that string starting from the start position, and ending 1 before the end position(0 - based indexing is followed).
//     Hint: Use the substring(startIndex, endIndex) function to get a substring of a string starting from the startIndex index and ending at one less than the endIndex index.
// Sample Input 1
// Hello world!, 1, 4
// Sample Output 1
// ell
// Explanation
// Substring from index 1 to index 3 is "ell".Note that we are taking till index 3 as it is mentioned in the question that we have to take substring excluding the second index i.e excluding 4.
// Sample Input 2
// fiirst, 2, 5
// Sample Output 2
// irs

/**
 * @param {string} str
 * @param {number} startInd
 * @param {number} endInd
 * @return {string}
 */


function getSubstr(str, startInd, endInd) {
    // You only need to implement this function.
    let final = str.substring(startInd, endInd)
    return final

}

if (getSubstr('abcdefghi', 2, 5) !== 'cde')
    console.log("Test fails: Expected 'cde' for input str = 'abcdefghi', startInd = 2 and endInd = 5");
else
    console.log("Sample test case for input str = 'abcdefghi', startInd = 2 and endInd = 5 passed!");

module.exports = getSubstr

