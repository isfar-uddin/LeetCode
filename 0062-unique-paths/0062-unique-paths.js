/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m + 1 }, () => []);

  const findWay = (i, j) => {
    if (i == m - 1 && j == n - 1) return 1;
    if (dp[i][j] !== undefined) return dp[i][j];
    if (i >= m || j >= n) return 0;

    dp[i][j] = findWay(i + 1, j) + findWay(i, j + 1);
    return dp[i][j];
  }

  return findWay(0, 0);
};