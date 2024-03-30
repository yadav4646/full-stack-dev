// Problem Description
// Given an array of numbers arr as argument. You need to implement the function removeDeduplicate that will remove duplicates from an array while maintaining the original order of elements.

// Note : The code's functionality can be verified by clicking on the run button and subsequently submitting it for final evaluation.

// Sample Input
// [1,2,2,3,4,4,5,5]

// Sample Output
// [1,2,3,4,5]

// Explanation
// After removing duplicates from the array we get the output as 1,2,3,4,5

// CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
function removeDeduplicate(arr) {
  const deduplicated = arr.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  return deduplicated;
}

const arr = [1, 2, 2, 3, 4, 4, 5, 5];
if (JSON.stringify(removeDeduplicate(arr)) !== JSON.stringify([1, 2, 3, 4, 5]))
  console.log(
    "Test fails: Expected [1,2,3,4,5] for input arr = [1, 2, 2, 3, 4, 4, 5, 5]"
  );
else
  console.log(
    "Sample test case for input arr = [1, 2, 2, 3, 4, 4, 5, 5] passed!"
  );

// CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS
module.exports = removeDeduplicate;

// module.exports = removeDeduplicate;

// function removeDeduplicate(arr) {
//   let uniqueArr = [...new Set(arr)];
//   return uniqueArr;
// }

//////////////////////////////
