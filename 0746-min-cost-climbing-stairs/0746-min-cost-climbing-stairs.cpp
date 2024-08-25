class Solution {
public:
    int dp[1001];
    
    int minCostClimbingStairs(vector<int>& cost) {
        memset(dp, 0, sizeof dp);
        return min(findMinCost(0, cost), findMinCost(1, cost));
    }
    
    int findMinCost(int index, vector<int>& cost) {
        if(dp[index]) return dp[index];
        
        if(index >= cost.size()) return 0;
        
        if(index == cost.size() - 1) return cost[index];
        
        return dp[index] += cost[index] + min(findMinCost(index + 1, cost), findMinCost(index + 2, cost));
    }
};