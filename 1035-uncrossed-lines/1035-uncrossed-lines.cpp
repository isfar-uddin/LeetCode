class Solution {
public:
    int dp[501][501];
    
    int maxUncrossedLines(vector<int>& nums1, vector<int>& nums2) {
        memset(dp, -1, sizeof dp);
        return findMaxCount(nums1, nums2, 0, 0);
    }
    
    int findMaxCount(vector<int>& nums1, vector<int>& nums2, int i, int j) {
        if(i >= nums1.size() || j >= nums2.size()) {
            return 0;
        }
        
        if(dp[i][j] != -1) {
            return dp[i][j];
        }
        
        if(nums1[i] == nums2[j]) {
            dp[i][j] = 1 + findMaxCount(nums1, nums2, i + 1, j + 1);
        } else {
            dp[i][j] = max(findMaxCount(nums1, nums2, i + 1, j), findMaxCount(nums1, nums2, i, j + 1));
        }
        
        return dp[i][j];
    }
};