/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array.from({length: 2}, () => []);

  const findMoney = (index, isFirstTaken = 0) => {
    if (dp[isFirstTaken][index] !== undefined) return dp[isFirstTaken][index];

    if (index >= nums.length || (isFirstTaken && index === nums.length - 1)) return 0;

    dp[isFirstTaken][index] = Math.max(findMoney(index + 1, isFirstTaken), nums[index] + findMoney(index + 2, Number(isFirstTaken || index === 0)));
    return dp[isFirstTaken][index];
  }

  return findMoney(0);
};