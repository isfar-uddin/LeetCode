class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> ans;
        
        int size = nums.size();
//         vector<int> prefix, suffix;
        
//         for(int i = 0; i < size; i++) {
//             prefix.push_back(1);
//             suffix.push_back(1);
//         }
        
//         for(int i = 1, j = size - 2; i < size, j >= 0; i++, j--) {
//             prefix[i] = prefix[i - 1] * nums[i - 1];
//             suffix[j] = suffix[j + 1] * nums[j + 1];
//         }
        
//         for(int i = 0; i < size; i++) {
//             ans.push_back(prefix[i] * suffix[i]);
//         }
        
//         return ans;
        
        ans.push_back(1);
        for(int i = 1; i < size; i++) {
            ans.push_back(ans[i - 1] * nums[i - 1]);
        }
        
        int curr = 1;
        for(int i = size - 1; i >= 0; i--) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        
        return ans;
    }
};