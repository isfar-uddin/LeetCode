class Solution {
public:
    int countSubstrings(string s) {
        int size = s.size();
        if(size == 1) return 1;
        int count = size;
        int dp[size + 1][size + 1];
        memset(dp, 0, sizeof dp);
        for(int i = 0; i < size; i++) {
            dp[i][i] = 1;
            if(i < size - 1 && s[i] == s[i + 1]) {
                dp[i][i + 1] = 1;
                count++;
            }
        }
        for(int j = 2; j < size; j++) {
            for(int i = 0; i < size - 1; i++) {
                if(dp[i + 1][j - 1] && s[i] == s[j]) {
                    dp[i][j] = 1;
                    count++;
                }
            }
        }
        return count;
    }
};