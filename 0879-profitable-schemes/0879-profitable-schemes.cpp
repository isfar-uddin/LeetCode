class Solution {
public:
    int memo[101][101][101];
    int MOD = 1e9 + 7;

    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) {
        memset(memo, -1, sizeof memo);
        return findWays(0, 0, 0, n, minProfit, group, profit);
    }
    int findWays(int pos, int count, int currProfit, int n, int minProfit, vector<int>& group, vector<int>& profit) {
        if(pos >= group.size()) {
            return currProfit >= minProfit;
        }
        if(memo[pos][count][currProfit] != -1) {
            return memo[pos][count][currProfit];
        }
        int totalWays = findWays(pos + 1, count, currProfit, n, minProfit, group, profit);
        if(count + group[pos] <= n) {
           totalWays += findWays(pos + 1, count + group[pos], min(minProfit, currProfit + profit[pos]), n, minProfit, group, profit); 
        }
        return memo[pos][count][currProfit] = totalWays % MOD;
    }
};