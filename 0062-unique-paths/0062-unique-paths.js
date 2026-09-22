/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({length: m}, () => []);

    const findPaths = (i, j) => {
        if(i < 0 || j < 0 || i >= m || j >= n) return 0;
        if(i == m - 1 && j == n - 1) return 1;

        if(dp[i][j] !== undefined) return dp[i][j];

        return dp[i][j] = findPaths(i + 1, j) + findPaths(i, j + 1);
    }

    return findPaths(0, 0);
};