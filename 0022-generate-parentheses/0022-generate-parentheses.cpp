class Solution {
public:
    vector<string> ans;
    vector<string> generateParenthesis(int n) {
        addParenthesis(0, 0, n, "");
        return ans;
    }
    
    void addParenthesis(int openCount, int closeCount, int n, string str) {
        if(openCount > n || closeCount > n || openCount < closeCount) return;
        
        if(openCount == n && closeCount == n) {
            ans.push_back(str);
            return;
        }
        
        addParenthesis(openCount + 1, closeCount, n, str + "(");
        addParenthesis(openCount, closeCount + 1, n, str + ")");
    }
};