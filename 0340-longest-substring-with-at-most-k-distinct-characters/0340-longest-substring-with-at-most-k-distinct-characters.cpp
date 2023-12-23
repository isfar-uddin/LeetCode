class Solution {
public:
    int lengthOfLongestSubstringKDistinct(string s, int k) {
        unordered_map<char, int> hashMap;
        int left = 0, right = 0, maxLength = INT_MIN;
        
        while(right < s.size()) {
            hashMap[s[right]] = right;
            right++;
            
            if(hashMap.size() == k + 1) {
                int delIndex = INT_MAX;
                
                for(auto it = hashMap.begin(); it != hashMap.end(); it++) {
                    delIndex = min(delIndex, it -> second);
                }
                
                hashMap.erase(s[delIndex]);
                left = delIndex + 1;
            }
            
            maxLength = max(maxLength, right - left);
        }
        
        return maxLength;
    }
};