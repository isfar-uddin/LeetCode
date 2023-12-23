class Solution {
public:
    int lengthOfLongestSubstringTwoDistinct(string s) {
        unordered_map<char, int> hashMap;
        int left = 0, right = 0;
        int maxLength = INT_MIN;
        
        while(right < s.size()) {
            hashMap[s[right]] = right;
            right++;
            
            if(hashMap.size() == 3) {
                int delIndex = INT_MAX;
                for(auto it = hashMap.begin(); it != hashMap.end(); it++) {
                    delIndex = min(delIndex, it->second);
                }
                
                hashMap.erase(s[delIndex]);
                left = delIndex + 1;
            }
            
            maxLength = max(maxLength, right - left);
        }
        
        return maxLength;
    }
};