class Solution {
public:
    vector<string> ans;
    
    vector<string> generateParenthesis(int n) {
        addParenthesis(n, 0, 0, "");
        return ans;
    }
    
    void addParenthesis(int n, int openingCount, int closingCount, string str) {
        if(openingCount < closingCount || openingCount > n || closingCount > n) return;
        if(openingCount == n && closingCount == n) {
            ans.push_back(str);
            return;
        }
        addParenthesis(n, openingCount + 1, closingCount, str + "(");
        addParenthesis(n, openingCount, closingCount + 1, str + ")");
        return;
    }
};