/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [];

  const calculateMoney = (index) => {
    if (dp[index] !== undefined) return dp[index];
    if (index >= nums.length) return 0;

    dp[index] = Math.max(nums[index] + calculateMoney(index + 2), calculateMoney(index + 1));

    return dp[index];
  }

  return calculateMoney(0);
};