// Problem Description
// You need to write a function named zombieAttack. It must take 1 input parameter that represents an array of strings, where each string represents the names of people in a village. A "Zombie" has sneaked into the village and is also part of the array. The zombie eats the person who is to the right of it. Tell the person who is going to be eaten. It is guaranteed that there will always be at least one person to the right of the zombie. Implement the function such that it returns the name of the person.
// Please note: There will be only one "Zombie" in the array.
// Hint 1: Iterate through the array using a loop and use string comparison to find the Zombie.
// Hint 2: Once you find the zombie, keep track that you have found it and find the person next to it.
// Hint: Use this code to test your implementation for one set of inputs. Copy paste this in the IDE after you write your function and click on ‘Run Code’:
// if (zombieAttack(['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']) !== 'Jacky')
//   console.log("Test fails: Expected 'Jacky' for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']");
// else
//   console.log("Sample test case for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam'] passed!");

module.exports = zombieAttack;
module.exports = zombieAttack;

function zombieAttack(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Zombie") {
      if (i === names.length - 1) {
        return "No one";
      } else {
        return names[i + 1];
      }
    }
  }
  return "No Zombie";
}

if (zombieAttack(["Rameo", "Kevin", "Zombie", "Jacky", "Adam"]) !== "Jacky")
  console.log(
    "Test fails: Expected 'Jacky' for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']"
  );
else
  console.log(
    "Sample test case for input arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam'] passed!"
  );

//   Here's how the function works:

// We iterate through the names array using a for loop.
// For each iteration, we check if the current element is equal to the string 'Zombie' using the strict equality operator ===.
// If a 'Zombie' is found:
// We check if the 'Zombie' is at the last index of the array using the condition i === names.length - 1. If it is, there is no one to the right of the 'Zombie', so we return the string 'No one'.
// If the 'Zombie' is not at the last index, we return the name of the person to the right of the 'Zombie' by accessing names[i + 1].
// If the loop completes without finding a 'Zombie', we return the string 'No Zombie in the village'.
