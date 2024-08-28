class Solution {
public:
    int dp[2][102];
    
    int rob(vector<int>& nums) {
        if(nums.size() == 1) return nums[0];
        memset(dp, -1, sizeof dp);
        return max(findMax(0, nums, 1), findMax(1, nums, 0));
    }
    
    int findMax(int index, vector<int>& nums, int isFirst) {
        if(dp[isFirst][index] != -1) return dp[isFirst][index];
        if(index >= nums.size()) return 0;
        if(index == nums.size() - 1 && isFirst) {
            if(isFirst) return 0;
        }
        
        return dp[isFirst][index] = max(findMax(index + 1, nums, isFirst), findMax(index + 2, nums, isFirst) + nums[index]);
    }
};