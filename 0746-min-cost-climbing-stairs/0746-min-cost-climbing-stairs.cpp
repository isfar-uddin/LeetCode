class Solution {
public:
    int memo[1001];
    int minCostClimbingStairs(vector<int>& cost) {
        memset(memo, 0, sizeof 0);
        return min(findMinCost(cost, 0), findMinCost(cost, 1));
    }
    int findMinCost(vector<int>& cost, int i) {
        if(i == cost.size() - 1) {
            return cost[i];
        }
        if(i >= cost.size()) {
            return 0;
        }
        if(memo[i] != 0) {
            return memo[i];
        }
        memo[i] += cost[i] + min(findMinCost(cost, i + 1), findMinCost(cost, i + 2));
        return memo[i];
    }
};

/*

*/