class Solution {
public:
    int findGCD(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    
    
    
    string gcdOfStrings(string str1, string str2) {
        if(str1 + str2 != str2 + str1) return "";
        
        int gcdLength = findGCD(str1.size(), str2.size());
        
        return str1.substr(0, gcdLength);
    }
};