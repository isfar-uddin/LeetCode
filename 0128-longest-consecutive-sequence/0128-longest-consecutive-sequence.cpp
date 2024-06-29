class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
//         if(nums.size() == 0) return 0;
        
//         sort(nums.begin(), nums.end());
        
//         int maxSequence = 1, curr = 1;
        
//         for(int i = 1; i < nums.size(); i++) {
//             if(nums[i - 1] == nums[i]) continue;
            
//             if(nums[i - 1] == nums[i] - 1) {
//                 curr++;
//             } else {
//                 curr = 1;
//             }
//             maxSequence = max(curr, maxSequence);
//         }
        
//         return maxSequence;
        
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