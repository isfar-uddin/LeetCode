/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = [];
    const length = nums.length;

    const computeMoney = (index) => {
        if(index > length - 1) return 0;
        if(dp[index] !== undefined) return dp[index];

        return dp[index] = Math.max(nums[index] + computeMoney(index + 2), computeMoney(index + 1));
    }

    return computeMoney(0);
};