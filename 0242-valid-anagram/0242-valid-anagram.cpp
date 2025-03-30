class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.size() != t.size()) return false;

        int letter[26];

        for(int i = 0; i < s.size(); i++) {
            letter[s[i] - 'a']++;
            letter[t[i] - 'a']--;
        }

        for(int i = 0; i < 26; i++) {
            if(letter[i] != 0) return false;
        }

        return true;
    }
};