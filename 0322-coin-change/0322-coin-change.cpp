class Solution {
public:
    int dp[13][10001];
    
    int coinChange(vector<int>& coins, int amount) {
        memset(dp, -1, sizeof dp);
        int ans = min(findWays(coins, 0, amount), findWays(coins, 1, amount));
        if(ans == INT_MAX - 1) return -1;
        return ans;
    }
    
    int findWays(vector<int>& coins, int index, int amount) {
        if(amount < 0 || index >= coins.size()) return INT_MAX - 1;
        if(dp[index][amount] != -1) return dp[index][amount];
        if(amount == 0) return 0;
        return dp[index][amount] = min(1 + findWays(coins, index, amount - coins[index]), findWays(coins, index + 1, amount));
    }
};