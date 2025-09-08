/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Number.NEGATIVE_INFINITY, prevMax = 1, prevMin = 1;

    for(let i = 0; i < nums.length; i++) {
      let currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
      let currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
      prevMax = currMax;
      prevMin = currMin;
      max = Math.max(currMax, max);
    }

    return max;
};