// Problem Description
// You are given two arrays of strings arr1 and arr2. You have to implement the function generateCombinations which will return a new string array where you combine each string from the first array with each string from the second array.

// Hint 1: Use nested loops to iterate through the two given arrays and generate the combinations.

// Hint 2: Initialise the new array and keep adding the combined strings to it. Finally, return this array.

// Sample Input
// ["a", "c", "e"], ["b", "d", "f"]

// Sample Output
// ["ab", "ad", "af", "cb", "cd", "cf", "eb", "ed", "ef"]

// Explanation
// We get "ab", "ad", and "af" by combining ‘a’ with ‘b’, ’d’ and ‘f’. Similarly, all other elements are combined.

/**
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @return {string[]}
 */

function generateCombinations(arr1, arr2) {
  // You only need to implement this function.
  let finalArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      finalArr.push(arr1[i] + arr2[j]);
    }
  }
  return finalArr;
}

if (
  JSON.stringify(generateCombinations(["a", "c", "e"], ["b", "d", "f"])) !==
  JSON.stringify(["ab", "ad", "af", "cb", "cd", "cf", "eb", "ed", "ef"])
)
  console.log(
    "Test fails: Expected ['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef'] for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f']"
  );
else
  console.log(
    "Sample test case for input arr1 = ['a', 'c', 'e'] and arr2 = ['b', 'd', 'f'] passed!"
  );

module.exports = generateCombinations;
