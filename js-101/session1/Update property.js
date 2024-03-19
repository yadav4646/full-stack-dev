// Problem Description
// You are given obj, propName, and str as arguments. You have to implement the function updateProperty which will update the property propName of object obj with the value str and returns the updated property using bracket notation. Please make sure that you are using bracket notation to update the property.

// Hint 1: When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name.

// Hint 2: Use the assignment '=' operator to update it with the new value.

// Sample Input
// { firstName: 'Alex' }, ‘firstName’, ‘John’

// Sample Output
// 'John'

// Explanation
// firstName property of the object is updated from ‘Alex’ to ‘Jhon

/**
 * @param {object}obj
 * @param {string}propName
 * @param {string}str
 * @return {string}
 */

function updateProperty(obj, propName, str) {
  // You only need to implement this function.
  return (obj.propName = str);
}

if (updateProperty({ firstName: "Alex" }, "firstName", "John") !== "John")
  console.log(
    "Test fails: Expected 'John' for input  obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John'"
  );
else
  console.log(
    "Sample test case for input obj = { firstName: 'Alex' }, propName = 'firstName', str = 'John' passed!"
  );

module.exports = updateProperty;
