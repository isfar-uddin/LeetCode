class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        unordered_set<int> st;
        int ans = 0;
        
        for(int i = 0; i < nums.size(); i++) {
            st.insert(nums[i]);
        }
        
        for(int i = 0; i < nums.size(); i++) {
            if(st.find(nums[i] - 1) == st.end()) {
                int length = 0;
                while(st.find(nums[i] + length) != st.end()) {
                    length++;
                }
                ans = max(ans, length);
            }
        }
        
        return ans;
    }
};