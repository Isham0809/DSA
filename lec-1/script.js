/*
Algorithm : step by step to solve a problem.
step 1 : Understand the problem.
          searching in array=> 1-d array
          
step 2 :  requirements :
          type of array
          empty 
          values
          values type
          type of DS
step 3 : prepare pseudo code : logical code.
          starting
          random value
          present at end or not in array

step 4 :   dry run     

step 5 : actual practical implementation

step 6 : test and debug
*/

/*
 * Leet code.
 * codechef
 * HackerRank
 */

var array = ["blue", "black", "red", "yellow", "blue"];

var search = "blue";
var found = false;

for (var i = 0; i < array.length; i++) {
  if (array[i] === search) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Element found");
}

/**
 * best case k*1= > 1 => O(1)
 * average => O(n)
 * worse case => O(n)
 */
