// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.

// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000

// 0 <= S,E <= 1000000000 (10^9)

// Si < Ei

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

// Explanation 1
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

// So, only 2 rooms are required if total for the 3 meetings.

// Resources

function meetingRooms(meetings) {
  // create an emmpty array list to store timestamos and room changes
  const list = [];

  //Iterate for loop over meetings
  for (let meeting of meetings) {
    // push the start timestamp and indicate a room is occupied (+1)
    list.push({ timeStamp: meeting[0], RoomChange: +1 });
    // push the end timestamp and idicate a room is vaccated (-1)
    list.push({ timeStamp: meeting[1], RoomChange: -1 });
  }

  // Sort teh list of timestamps and room changes based on timestamps
  list.sort((a, b) => a.timeStamp - b.timeStamp);

  // initalize minRooms and meetingsInProgress as 0
  let minRooms = 0;
  let meetngsInProgress = 0;

  // Iterate through sorted list of timmestamps and room changes
  for (let p of list) {
    // update the meetingsInProgress+=roomChanges
    meetngsInProgress += p.RoomChange;
    // Find max of minRooms and meetngsInProgress and store in minRooms
    minRooms = Math.max(minRooms, meetngsInProgress);
  }

  // return minRooms
  return minRooms;
}
