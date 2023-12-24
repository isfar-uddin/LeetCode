class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string mergedString = "";
        int i = 0;
        
        while(i < word1.size() && i < word2.size()) {
            mergedString += word1[i];
            mergedString += word2[i];
            i++;
        }
        
        if(i < word1.size()) {
            mergedString += word1.substr(i, word1.size() - i);
        }
        
        if(i < word2.size()) {
            mergedString += word2.substr(i, word2.size() - i);
        }
        
        return mergedString;
    }
};