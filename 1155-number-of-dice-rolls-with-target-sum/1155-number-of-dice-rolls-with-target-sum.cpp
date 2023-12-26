class Solution {
public:
    int MOD = 1e9 + 7;
    
    int numRollsToTarget(int n, int k, int target) {
        vector<vector<int>> memo(n + 1, vector<int>(target + 1, -1));
        return calculateWays(memo, n, k, 0, 0, target);
    }
    
    int calculateWays(vector<vector<int>>& memo, int n, int k, int index, int sum, int& target) {
        if(index == n) return sum == target;
        
        if(memo[index][sum] != -1) return memo[index][sum];
        
        int ways = 0;
        
        for(int i = 1; i <= min(k, target - sum); i++) {
            ways = (ways + calculateWays(memo, n, k, index + 1, sum + i, target)) % MOD;
        }
        
        return memo[index][sum] = ways;
    }
};