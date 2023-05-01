class Solution {
public:
    static bool comp(vector<int>& a, vector<int>& b) {
        if(a[0] == b[0]) return a[1] < b[1];
        return a[0] < b[0];
    }
    vector<vector<int>> indexPairs(string text, vector<string>& words) {
        vector<vector<int>> ans;
        for(int i = 0; i < text.size(); i++) {
            for(int j = i; j < text.size(); j++) {
                string str = text.substr(i, j - i + 1);
                if(find(words.begin(), words.end(), str) != words.end()) {
                    ans.push_back({i, j});
                }
            }
        }
        
        sort(ans.begin(), ans.end(), comp);
        return ans;
    }
};

/*
i -> 0 - n
    j -> i + 1 - n
        sub = substr(i, j);
        if(find(arr.begin(), arr.end(), sub) != arr.end()) {
            ans.push_back(i, j);
        }
sort(ans.begin(), ans.end(), comp);

*/