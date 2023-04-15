class Solution {
public:
    int findMaxValue(vector<vector<int>>&memo, vector<vector<int>>& piles, int index, int k) {
        if(k <= 0 or index >= piles.size()) {
            return 0;
        } 
        if(memo[index][k] != -1) {
            return memo[index][k];
        }
        int maxSum = findMaxValue(memo, piles, index + 1, k);
        int currentSum = 0;
        for(int i = 0; i < piles[index].size() and k - i - 1 >= 0; i++) {
           currentSum += piles[index][i];
           maxSum = max(maxSum, currentSum + findMaxValue(memo, piles, index + 1, k - i - 1)); 
        }
        return memo[index][k] = maxSum;
    }

    int maxValueOfCoins(vector<vector<int>>& piles, int k) {
        int n = piles.size();
        vector<vector<int>>memo(n + 1, vector<int>(k + 1, -1));
        return findMaxValue(memo, piles, 0, k);
    }
};

