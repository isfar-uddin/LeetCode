class Solution {
public:
    int maxScore(string s) {
        int ans = 0;
        for(int i = 0; i < s.size() - 1; i++) {
            int ones = 0, zeros = 0;
            for(int j = 0; j <= i; j++) {
                if(s[j] == '0') zeros++;
            }
            
            for(int j = i + 1; j < s.size(); j++) {
                if(s[j] == '1') ones++;
            }
            
            ans = max(ans, ones + zeros);
        }

        return ans;
    }
};