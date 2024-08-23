class Solution {
public:
    int dp[46];
    int climbStairs(int n) {
        memset(dp, 0, sizeof dp);
        return calculateWays(n);
    }
    
    int calculateWays(int n) {
        if(dp[n]) return dp[n];
        
        if(n <= 1) return 1;
        
        return dp[n] = calculateWays(n - 1) + calculateWays(n - 2);
    }
};