class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans;
        int length = nums.size();
        
        for(int i = 0; i < length; i++) {
            if(length > nums[i]) {
                ans.push_back(nums[nums[i]]);
            }
        }
        
        return ans;
    }
};