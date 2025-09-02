/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      return [numsMap.get(nums[i]), i]
    }
    numsMap.set(target - nums[i], i);
  }

  return [];
};