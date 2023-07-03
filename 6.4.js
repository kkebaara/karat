/*
As a spy, you've been tasked with recovering some stolen artwork. You've entered the room containing the artwork, and have detected some security systems in place. 

The room is represented as a matrix, where the spy "S" is in the top left (0,0), open locations are "-", spaces with the security system are "D" and the artwork is "A".

Example:
room = [
    ['S', '-', '-', '-', 'D'],
    ['-', 'D', 'D', '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['D', 'D', '-', '-', '-'],
    ['-', 'D', '-', 'A', '-'],
    ['-', 'D', '-', '-', '-'],
]

You've been provided with a series of instructions. These are provided as a string of directions to move, using the characters N (north/up), S (south/down), E (east/right), W (west/left).

Example: "NNSSWW" = North, North, South, South, West, West.

Given a room and a list of instructions. Return whether you reach the artwork without getting detected. You are detected if you hit the security system or the walls of the room before reaching the artwork.

All Test Cases:
detected(room, "SSEEESS")        => True (got the artwork)
detected(room, "ESSSSEE")        => False (Got detected)
detected(room, "EEENSSSSS")      => False (Hit the wall)
detected(room, "EEESEESSSWW")    => False (Hit the wall)
detected(room, "EEESESSSSWNNNN") => True (got the artwork)
detected(room, "EEESSS")         => False (did not reach the artwork)
detected(room, "NEEESEESSSWW")   => False (Hit the wall)
detected(room, "SWWSSS")         => False (Hit the wall)
detected(room, "SSEEESSWW")      => True (got the artwork)
*/


function detected(room, instructions) {
  
  let row = 0;
  let col = 0;
  
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    
    if (instruction === 'N') {
      row--;
    } else if (instruction === 'S') {
      row++;
    } else if (instruction === 'E') {
      col++;
    } else if (instruction === 'W') {
      col--;
    }
    
    if (row < 0 || row >= room.length || col < 0 || col >= room[0].length) {
      // Hit the wall, return false
      return false;
    }
    
    if (room[row][col] === 'D') {
      // Hit the security system, return false
      return false;
    }
    
    if (room[row][col] === 'A') {
      // Reached the artwork, return true
      return true;
    }
  }
  
  // Finished all instructions without getting detected or reaching the artwork
  return false;
}

// Example usage:
const room = [
  ['S', '-', '-', '-', 'D'],
  ['-', 'D', 'D', '-', '-'],
  ['-', '-', '-', '-', '-'],
  ['D', 'D', '-', '-', '-'],
  ['-', 'D', '-', 'A', '-'],
  ['-', 'D', '-', '-', '-'],
];

console.log(detected(room, "SSEEESS"));         // true
console.log(detected(room, "ESSSSEE"));         // false
console.log(detected(room, "EEENSSSSS"));       // false
console.log(detected(room, "EEESEESSSWW"));     // false
console.log(detected(room, "EEESESSSSWNNNN"));  // true
console.log(detected(room, "EEESSS"));          // false
console.log(detected(room, "NEEESEESSSWW"));    // false
console.log(detected(room, "SWWSSS"));          // false
console.log(detected(room, "SSEEESSWW"));       //true