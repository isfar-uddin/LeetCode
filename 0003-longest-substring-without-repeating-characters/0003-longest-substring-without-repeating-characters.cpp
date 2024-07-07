class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> mp;
        int maxLen = 0, start = 0, end = 0;
        int size = s.size();
        
        while(end < size) {
            if(mp.find(s[end]) == mp.end()) {
                maxLen = max(maxLen, end - start + 1);
                mp[s[end]] = end;
                end++;
            } else if(start > mp[s[end]]) {
                maxLen = max(maxLen, end - start + 1);
                mp[s[end]] = end;
                end++;
            } else {
                start = mp[s[end]] + 1;
                mp[s[end]] = end;
                end++;
            }
        }
        
        return maxLen;
    }
};