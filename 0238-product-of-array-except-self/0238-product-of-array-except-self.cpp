class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> prefix, suffix;
        for(int i = 0; i < nums.size(); i++) {
            prefix.push_back(1);
            suffix.push_back(1);
        }

        for(int i = 1, j = nums.size() - 2; i < nums.size(), j >= 0; i++, j--) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
            suffix[j] = suffix[j + 1] * nums[j + 1];
        }

        vector<int> ans;

        for(int i = 0; i < nums.size(); i++) {
            ans.push_back(prefix[i] * suffix[i]);
        }

        return ans;
    }
};