class Solution {
public:
    int findMinCost(int inx, int c, vector<vector<int>>& costs, vector<vector<int>>& dp){
        if(inx == -1) return 0;
        
        if(dp[inx][c] != -1) return dp[inx][c];
        
        int min_price = INT_MAX;
        for(int i=0; i<costs[0].size(); i++){
            if(i != c){
                int chose = costs[inx][i] + findMinCost(inx-1, i, costs, dp);
                min_price = min(min_price, chose);
            }
        }
        return dp[inx][c] = min_price;
    }
    int minCostII(vector<vector<int>>& costs) {
        int n = costs.size()-1;
        int m = costs[0].size();
        vector<vector<int>> dp(n+1, vector<int>(m+1, -1));
        return findMinCost(n, m, costs, dp);
    }
};