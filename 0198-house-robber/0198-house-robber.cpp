class Solution {
public:
    int dp[101];
    int rob(vector<int>& nums) {
        memset(dp, -1, sizeof dp);
        return max(findMaxAmount(0, nums), findMaxAmount(1, nums));
    }
    
    int findMaxAmount(int index, vector<int>& nums) {
        if(index >= nums.size()) return 0;
        
        if(dp[index] != -1) return dp[index];
        
        if(index == nums.size() - 1) return nums[index];
        
        return dp[index] = nums[index] + max(findMaxAmount(index + 2, nums), findMaxAmount(index + 3, nums));
    }
};