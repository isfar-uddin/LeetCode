class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        unordered_set<int> numSet;
        int ans = 0;
        
        for(int i = 0; i < nums.size(); i++) {
            numSet.insert(nums[i]);
        }
        
        for(auto it : numSet) {
            if(numSet.find(it - 1) == numSet.end()) {
                int length = 0;
                while(numSet.find(it + length) != numSet.end()) {
                    length++;
                }
                ans = max(ans, length);
            }
        }
        
        return ans;
    }
};