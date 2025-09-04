/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set();
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);
  }

  for (let num of numSet) {
    let count = 1;
    if (!numSet.has(num - 1)) {
      while (numSet.has(num + 1)) {
        count++;
        num++;
      }

    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};