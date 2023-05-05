class Solution {
public:
    int maxVowels(string s, int k) {
        int count = 0;
        
        for(int i = 0; i < k; i++) {
            count += isVowel(s[i]);
        }
        int answer = count;
        for(int i = k; i < s.size(); i++) {
            count += isVowel(s[i]) - isVowel(s[i - k]);
            answer = max(answer, count);
        }
        return answer;
    }
    
    bool isVowel(char c) {
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            return 1;
        }
        return 0;
    }
};