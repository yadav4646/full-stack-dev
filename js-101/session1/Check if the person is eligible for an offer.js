// Problem Description
// If your name starts with a 'T' or 't', today is your lucky day! The city mall is giving away free coupons to every visitor whose name starts with a 'T' or 't'.
// You are given a string name as an argument. You have to implement the function checkEligibility to help the mall determine if a person with the given name is eligible for the offer return "Eligible" else return "Not Eligible".
// You need to write a function named checkEligibility. It must take 1 input parameter that represents a string representing a name. Implement the function to help the mall determine if a person with the given name is eligible for the offer. Return "Eligible" if the person is eligible, else return "Not Eligible".
// Hint: Use charAt(i) to get the character at index i.
// Hint: Use toUpperCase() to convert the string to uppercase.
// Hint: Use this code to test your implementation for one set of inputs. Copy and paste this in the IDE after you write your function and click on ‘Run Code’:
// if (checkEligibility('tarun') !== 'Eligible')
//   console.log("Test fails: Expected 'Eligible' for input name = 'tarun'");
// else
//   console.log("Sample test case for input name = 'tarun' passed!");
// Sample Input 1
// Tia
// Sample Output 1
// Eligible
// Explanation
// Tia starts with T, therefore the output is Eligible.
// Sample Input 2
// Aagam
// Sample Output 2
// Not Eligible
// Explanation
// Aagam doesn’t start with T or t, therefore the output is Not Eligible.
// Sample Input 3
// tisha
// Sample Output 3
// Eligible
// Explanation
// tisha starts with t, therefore the output is Eligible.

module.exports = checkEligibility;

function checkEligibility (name){
    let firstChar = name.charAt(0).toUpperCase()
    if(firstChar === "T"){
        return "Eligible"
    }else{
       return "Not Eligible"
    }
}


if (checkEligibility('tarun') !== 'Eligible')

  console.log("Test fails: Expected 'Eligible' for input name = 'tarun'");

else

  console.log("Sample test case for input name = 'tarun' passed!");
