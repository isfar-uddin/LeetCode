/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];

  const calculateWays = (n) => {
    if (dp[n]) return dp[n];
    if (n <= 1) return 1;

    dp[n] = calculateWays(n - 1) + calculateWays(n - 2);
    return dp[n];
  }

  return calculateWays(n);
};