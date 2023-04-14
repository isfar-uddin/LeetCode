class Solution {
public:
    int longestPalindromeSubseq(string s) {
        int n = s.size();
        vector<vector<int>> memo(n, vector<int>(n));
        return findLongestPalindromeSubseq(s, 0, n - 1, memo);
    }
    
    int findLongestPalindromeSubseq(string& s, int start, int end, vector<vector<int>>& memo) {
        if(memo[start][end] != 0) {
            return memo[start][end];
        }
        if(start == end) {
            return 1;
        }
        if(start > end) {
            return 0;
        }
        if(s[start] == s[end]) {
            memo[start][end] = findLongestPalindromeSubseq(s, start + 1, end - 1, memo) + 2;
        } else {
            memo[start][end] = max(findLongestPalindromeSubseq(s, start, end - 1, memo), findLongestPalindromeSubseq(s, start + 1, end, memo));
        }
        return memo[start][end];
    }
};