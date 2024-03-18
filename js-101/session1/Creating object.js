// Problem Description
// You are given firstName, middleName, and lastName as arguments. You have to implement the function getFullName to create an object with fullName as key and concatenation of firstName, middleName and lastName as value and return object.
// Hint: Use '+' operator to concatenate strings and separate them using " ".
// Sample Input
// "Alex", "P", "John"
// Sample Output
// { fullName: 'Alice P John' }
// Explanation
// Concatenate the strings ‘Alex’, ‘P’ and ‘Jhon’ to get the fullName i.e 'Alice P John' which is property of an object returned.

/**
 * @param {string}firstName
 * @param {string}middleName
 * @param {string}lastName
 * @return {object}
 */

function getFullName(firstName, middleName, lastName) {
  // You only need to implement this function.
  const fullName = `${firstName} ${middleName} ${lastName}`;
  return { fullName };
}

if (getFullName("Alex", "P", "John").fullName !== "Alex P John")
  console.log(
    "Test fails: Expected { fullName: 'Alice P John' } for input firstName ='Alex', middleName = 'P', and lastName = 'John'"
  );
else
  console.log(
    "Sample test case for input firstName ='Alex', middleName = 'P', and lastName = 'John' passed!"
  );

module.exports = getFullName;
