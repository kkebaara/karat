// DSA
// What is the runtime complexity of inserting an element to the middle of an array
// Does the following represent a tree? Why or why not?
// A -> B -> C -> D
// What data structure is typically used to implement a queue?
// C -> D ->1 -> 2 ->4
// What is the runtime complexity of a lookup in a dictionary, in the average case.

/*
We have a hallway which contains a fan that blows wind in a given direction ('<'=left, '>'=right) and a number of candles 'i' that blow out when the wind hits them. Open spaces are represented by '.'.

Write a function that takes in a hallway, and returns the number of candles that will be blown out.

Examples:
..>.ii. 
2 (Wind blows to the right and blows out both candles)

i>.i.i. 
2 (Wind blows to the right and blows out 2 candles, however the first candle will not be blown out)

i.<.... 
1 (Wind blows to the left and blows out the candle)

.i<i... 
1 (Wind blows to the left and blows out the candle but the candle to the right will not be blown out)

<iiii 
0 (Wind blows to the left and doesn't blow out any candles)

iiii> 
0 (Wind blows to the right and doesn't blow out any candles)

All Test Cases:
candles_blown_out(hallway1) => 2
candles_blown_out(hallway2) => 2
candles_blown_out(hallway3) => 1
candles_blown_out(hallway4) => 1
candles_blown_out(hallway5) => 0
candles_blown_out(hallway6) => 0

Complexity Analysis variable:
n = length of the hallway

*/

function candles_blown_out(hallway){
  //let candle = 0
  
  for(let i = 0; i < hallway.length; i++){
    if(hallway[i] === '>'){    
      return 1
      }
    if(hallway[i] === '<'){
      return 0
      // return count of i before < 
    }
  }
  
  function before_after(hallway){
    let candle = 0 
    for(let i = 0; i < hallway.length; i++){
      if(hallway[i] === 'i'){
        candle++
      }
      if(hallway[i] === '<'){
      return candle
      }
      }
    return candle
  }
  
}
"use strict";

const hallway1 = ['.','.','>','.','i','i','.'];
const hallway2 = ['i','>','.','i','.','i','.'];
const hallway3 = ['i','.','<','.','.','.','.'];
const hallway4 = ['.','i','<','i','.','.','.'];
const hallway5 = ['<','i','i','i','i'];
const hallway6 = ['i','i','i','i','>'];