class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string mergedString = "";
        int i = 0, j = 0;
        
        while(i < word1.size() && j < word2.size()) {
            mergedString += word1[i];
            mergedString += word2[j];
            i++;
            j++;
        }
        
        if(i < word1.size()) {
            mergedString += word1.substr(i, word1.size() - i);
        }
        
        if(j < word2.size()) {
            mergedString += word2.substr(j, word2.size() - j);
        }
        
        return mergedString;
    }
};