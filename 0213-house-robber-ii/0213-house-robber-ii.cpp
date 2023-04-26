class Solution {
public:
    int dp[2][101];
    int rob(vector<int>& nums) {
        if(nums.size() == 1) return nums[0];
        memset(dp, -1, sizeof dp);
        return max(findMaxRobbery(nums, 0, 1), findMaxRobbery(nums, 1, 0));
    }
    int findMaxRobbery(vector<int>& nums, int index, int isFirst) {
        if(index >= nums.size() || (isFirst && index == nums.size() - 1)) {
            return 0;
        }
        if(dp[isFirst][index] != -1) {
            return dp[isFirst][index];
        }
        return dp[isFirst][index] = max(findMaxRobbery(nums, index + 1, isFirst), findMaxRobbery(nums, index + 2, isFirst) + nums[index]);
    }
};