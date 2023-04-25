class Solution {
public:
    int dp[101];
    int rob(vector<int>& nums) {
        memset(dp, -1, sizeof dp);
        return findMaxRobbery(nums, 0);
    }
    
    int findMaxRobbery(vector<int>& nums, int num) {
        if(num >= nums.size()) {
            return 0;
        }
        if(dp[num] != -1) {
            return dp[num];
        }
        int ans = max(findMaxRobbery(nums, num + 1), findMaxRobbery(nums, num + 2) + nums[num]);
        dp[num] = ans;
        return ans;
    }
};