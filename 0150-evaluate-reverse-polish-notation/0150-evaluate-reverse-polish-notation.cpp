class Solution {
public:
    bool isOperator(string ch) {
        return ch == "+" || ch == "-" || ch == "*" || ch == "/"; 
    }
    
    int evalRPN(vector<string>& tokens) {
        vector<int> ans;
        for(int i = 0; i < tokens.size(); i++) {
            int op1, op2;
            if(isOperator(tokens[i])) {
                op2 = ans[ans.size() - 1];
                ans.pop_back();
                op1 = ans[ans.size() - 1];
                ans.pop_back();
            }
            
            if(tokens[i] == "+") {
                ans.push_back(op1 + op2);
            } else if(tokens[i] == "-") {
                ans.push_back(op1 - op2);
            } else if(tokens[i] == "*") {
                ans.push_back(op1 * op2);
            } else if(tokens[i] == "/") {
                ans.push_back(op1 / op2);
            } else {
                ans.push_back(stoi(tokens[i]));
            }
        }
        
        return ans[0];
    }
};