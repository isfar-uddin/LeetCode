class Solution {
public:
    int maxScore(string s) {
        int ones = 0, zeros = 0, ans = INT_MIN;
        
        for(int i = 0; i < s.size() - 1; i++) {
            if(s[i] == '1') {
                ones++;
            } else {
                zeros++;
            }
            
            ans = max(ans, zeros - ones);
        }
        
        if(s[s.size() - 1] == '1') ones++;
        
        return ans + ones;
    }
};