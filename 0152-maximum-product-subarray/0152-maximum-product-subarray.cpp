class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int ans = INT_MIN, prevMax = 1, prevMin = 1;
        
        for(int i = 0; i < nums.size(); i++) {
            int currMax = max(nums[i], max(prevMax * nums[i], prevMin * nums[i]));
            int currMin = min(nums[i], min(prevMax * nums[i], prevMin * nums[i]));
            prevMax = currMax;
            prevMin = currMin;
            ans = max(ans, prevMax);
        }
        
        return ans;
    }
};