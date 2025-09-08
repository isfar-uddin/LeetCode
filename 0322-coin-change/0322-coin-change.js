/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: 13 }, () => []);

  const calculateCoin = (index, amount) => {
    if (amount == 0) return 0;
    if (dp[index][amount] !== undefined) return dp[index][amount];
    if (amount < 0 || index >= coins.length) return Number.POSITIVE_INFINITY;

    dp[index][amount] = Math.min(1 + calculateCoin(index, amount - coins[index]), calculateCoin(index + 1, amount));
    return dp[index][amount];
  }

  const ans = calculateCoin(0, amount);
  return ans === Number.POSITIVE_INFINITY ? -1 : ans;

};