class Solution {
public:
    int dp[50];
    int climbStairs(int n) {
        memset(dp, 0, sizeof dp);
        return calculateWays(n);
    }
    int calculateWays(int total) {
        if(total <= 0) return total == 0;
        if(dp[total] > 0) return dp[total];
        dp[total] += calculateWays(total - 1) + calculateWays(total - 2);
        return dp[total];
    }
};