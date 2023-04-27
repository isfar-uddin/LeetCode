class Solution {
public:
    string longestPalindrome(string s) {
        int size = s.size();
        if(size == 1) return s;
        int index1 = 0, index2 = 0;
        bool dp[size + 1][size + 1];
        memset(dp, 0, sizeof dp);
        for(int i = 0; i < size; i++) {
            dp[i][i] = 1;
            if(i < size - 1 && s[i] == s[i + 1]) {
                dp[i][i+ 1] = 1;
                index1 = i;
                index2 = i + 1;
            }
        }
        for(int j = 2; j < size; j++) {
            for(int i = 0; i < size - 1; i++) {
                if(dp[i + 1][j - 1] && s[i] == s[j]) {
                    dp[i][j] = 1;
                    if(j - i > index2 - index1) {
                        index1 = i;
                        index2 = j;   
                    }
                }
            }
        }
        return s.substr(index1, index2 - index1 + 1);
        
    }
};