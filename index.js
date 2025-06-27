function hasTargetSum(array, target) {
  const seen = new Set();
  for (let num of array) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/* 
  The time complexity of this function is O(n), where n is the length of the array.
  This is because, in the worst case, we have to iterate through the entire array once,
  and the operations inside the loop (checking if a value is in the set and adding a value to the set)
  are both O(1) on average.
*/

/* 
  FUNCTION hasTargetSum(array, target)
    CREATE a new Set called 'seen'
    FOR each number in the array
      IF 'seen' contains (target - number)
        RETURN true
      ADD number to 'seen'
    END FOR
    RETURN false
  END FUNCTION
*/

/*
  The hasTargetSum function determines if there are two numbers in the array
  that add up to the target sum. It does this by iterating over each number
  in the array and checking if the difference between the target sum and the
  current number exists in a Set called 'seen'. If it does, the function returns
  true, indicating that a pair has been found. If not, the current number is added
  to the 'seen' Set. If the end of the array is reached without finding any such
  pair, the function returns false.
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
