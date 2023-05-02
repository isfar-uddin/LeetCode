class Solution {
public:
    int countSubstrings(string s) {
        int size = s.size(), count = s.size();
        bool dp[size + 1][size + 1];
        memset(dp, 0, sizeof dp);
        
        for(int i = 0; i < size; i++) {
            dp[i][i] = true;
            if(i < size - 1 && s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                count++;
            }
        }
        
        for(int j = 2; j < size; j++) {
            for(int i = 0; i < size - 1; i++) {
                if(s[i] == s[j] && dp[i + 1][j - 1]) {
                   dp[i][j] = true;
                    count++;
                }
            }
        }
        return count;
    }
};