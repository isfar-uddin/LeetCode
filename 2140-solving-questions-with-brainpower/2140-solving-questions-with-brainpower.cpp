class Solution {
public:
    long long dp[100005];
    long long mostPoints(vector<vector<int>>& questions) {
        memset(dp, -1, sizeof dp);
        return findMostPoints(questions, 0);
    }
    
    long long findMostPoints(vector<vector<int>>& questions, int i) {
        if(i >= questions.size()) {
            return 0;
        }
        
        if(dp[i] != -1) {
            return dp[i];
        }
        
        return dp[i] = max(questions[i][0] + findMostPoints(questions, i + questions[i][1] + 1), findMostPoints(questions, i + 1));
    }
};