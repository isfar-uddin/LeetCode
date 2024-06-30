class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        int size = nums.size();
        sort(nums.begin(), nums.end());
        
        int i = 0;
        
        while(i < size) {
            int j = i + 1, k = size - 1;
            
            while(j < k) {
                if(nums[i] + nums[j] + nums[k] == 0) {
                    ans.push_back({nums[i], nums[j], nums[k]});
                    j++;
                    
                    while(j < k && nums[j] == nums[j - 1]) {
                        j++;
                    }
                    
                } else if(nums[i] + nums[j] + nums[k] > 0) {
                    k--;
                } else {
                    j++;
                }
            }
            
            i++;
            
            while(i < size && nums[i] == nums[i - 1]) {
                i++;
            }
        }
        
        return ans;
    }
};