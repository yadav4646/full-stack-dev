// Problem Description
// You are given an array of objects obj as an argument that has properties firstname and lastname. You have to implement a function getFullName which returns the full name. Please note that you need to implement this using map method wherein you pass the helper function which returns firstname + " " + lastname.

// Hint 1: map() creates a new array by calling a function for every array element.

// Hint 2: Make a helper function in the map() which will get the full name.

// Sample Input
// [

// {firstname : "Robert", lastname: "Obrain"},

// {firstname : "Kevin", lastname: "Hart"},

// {firstname : "Dane", lastname: "Cobby"}

// ];

// Sample Output
// ["Robert Obrain", "Kevin Hart", "Dane Cobby"]

// Explanation
// We are returning an array of firstname + " " + lastname.

/**
 * @param {object[]} arr
 * @return {string[]}
 */

function getFullName(obj) {
  // You only need to implement this function.

  return obj.map(function (person) {
    return person.firstname + " " + person.lastname;
  });

  // let newObj = obj.map((first,last) => first + " " + last)
  // return newObj;
}

if (
  getFullName([
    { firstname: "Robert", lastname: "Obrain" },
    { firstname: "Kevin", lastname: "Hart" },
    { firstname: "Dane", lastname: "Cobby" },
  ]).toString() != ["Robert Obrain", "Kevin Hart", "Dane Cobby"]
)
  console.log(
    "Test fails: Expected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby'] "
  );
else console.log("Sample test case passed!");

module.exports = getFullName;
