/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const length = nums.length;
  const stack = [];
  const result = new Array(length).fill(-1);

  for (let i = 0; i < 2 * length - 1; i++) {
    const index = i % length;

    while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[index];
    }

    if (i < length) stack.push(index);
  }

  return result;
};