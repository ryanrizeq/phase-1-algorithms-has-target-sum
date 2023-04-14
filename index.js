function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) return true;
    }
  }
  return false;
}

/* 
  time: O(n^2)
  space: O(n)
*/

/* 
  1. Create a for loop to iterate over each number in the array
      a. For each number in the array, add that number with the next number in the array. 
      b. Return true if the sum of those two numbers equals the target number
      c. continue if the sum of those two numbers does not equal the target number
  2. If no matches are found, return false
*/

/*
  The function hasTargetSum() will be passed an array of numbers, and a target number. The goal of the
  function is to see if adding any two numbers of the array will sum to the target number. The function
  will return true if two numbers sum to the target number, and false if no two numbers do.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
