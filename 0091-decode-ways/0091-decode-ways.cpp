class Solution {
public:
    map<int, int> memo;
    
    int numDecodings(string s) {
        return getWays(s, 0);
    }
    
    int getWays(string & str, int index) {
        if(memo.find(index) != memo.end()) {
            return memo[index];
        }
        
        
        if(str[index] == '0') return 0;
        
        if(index >= str.size() - 1) return 1;
        
        memo[index] = getWays(str, index + 1);
        
        if(stoi(str.substr(index, 2)) <= 26) {
            memo[index] += getWays(str, index + 2);
        }
           
        return memo[index];
    }
};