class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        
        unordered_set<int> st;
        int ans = 0;
        
        for(auto num:nums) {
            st.insert(num);
        }
        
        for(auto num:nums) {
            if(st.find(num - 1) == st.end()) {
                int length = 0;
                while(st.find(num + length) != st.end()) {
                    length++;
                }
                ans = max(ans, length);
            }
        }
        
        return ans;
    }
};