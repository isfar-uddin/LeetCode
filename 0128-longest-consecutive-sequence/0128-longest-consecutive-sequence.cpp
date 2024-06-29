class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        
        sort(nums.begin(), nums.end());
        
        int maxSequence = 1, curr = 1;
        
        for(int i = 1; i < nums.size(); i++) {
            if(nums[i - 1] == nums[i]) continue;
            
            if(nums[i - 1] == nums[i] - 1) {
                curr++;
            } else {
                curr = 1;
            }
            maxSequence = max(curr, maxSequence);
        }
        
        return maxSequence;
    }
};