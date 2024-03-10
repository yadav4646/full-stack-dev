// Problem Description
// You are given three numbers side1, side2 and side3 as arguments.You have to implement the function isEquilateralType that will return true if all the sides are equal else it will return false.
// Please note: All the sides will be greater than 0, that is side1 > 0, side2 > 0 and side3 > 0.
// Hint: Equilateral means values of side1, side2 and side3 should be equal.

// Sample Input
// 9, 9, 9
// Sample Output
// true
// Explanation
// All the sides are equal therefore the output is true.

function isEquilateralType(side1, side2, side3) {
    // You only need to implement this function.
    if (side1 == side2 && side2 == side3) {
        return true
    } else {
        return false
    }
}

if (isEquilateralType(1, 1, 1) !== true)
    console.log("Test fails: Expected true for input side1 = 1, side2 = 1 and side3 = 1");
else
    console.log("Sample test case for input side1 = 1, side2 = 1 and side3 = 1 passed!");
