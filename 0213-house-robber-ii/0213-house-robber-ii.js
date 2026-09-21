/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const length = nums.length;
    const dp = [[], []]

    if(nums.length == 1) return nums[0];

    const computeMoney = (index, isFirst) => {
        if ((isFirst && index == length - 1) || index > length - 1) return 0;
        if (dp[isFirst][index] !== undefined) return dp[isFirst][index];

        return dp[isFirst][index] = Math.max(nums[index] + computeMoney(index + 2, isFirst), computeMoney(index + 1, isFirst))
    }

    return Math.max(computeMoney(0, 1), computeMoney(1, 0));
};