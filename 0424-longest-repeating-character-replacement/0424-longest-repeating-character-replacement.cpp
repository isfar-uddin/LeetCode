class Solution {
public:
    int characterReplacement(string s, int k) {
        int left = 0, right = 0, maxF = 0, ans = 0;
        
        unordered_map<char, int> frequencyMap;
        
        while(right < s.size()) {
            frequencyMap[s[right]]++;
            maxF = max(maxF, frequencyMap[s[right]]);
            if((right - left + 1) - maxF > k) {
                frequencyMap[s[left]]--;
                left++;
            } else {
                ans = max(ans, right - left + 1);
            }
            
            right++;
        }
        
        return ans;
        
    }
};