/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = [];
    const calculateWay = pos => {
        if (pos > n) return 0;
        if (pos == n) return 1;
        if (dp[pos]) return dp[pos];

        return dp[pos] = calculateWay(pos + 1) + calculateWay(pos + 2);
    }

    return calculateWay(0);
};