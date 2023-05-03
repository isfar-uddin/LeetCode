class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> numSet1;
        unordered_set<int> numSet2;
        vector<vector<int>> answer(2);
        for(int i = 0; i < nums2.size(); i++) {
            numSet2.insert(nums2[i]);
        }
        for(int i = 0; i <nums1.size(); i++) {
            numSet1.insert(nums1[i]);
        }
        for(auto it = numSet1.begin(); it != numSet1.end(); it++) {
            if(numSet2.find(*it) == numSet2.end()) {
                answer[0].push_back(*it);
            } else {
                numSet2.erase(*it);
            }
        }
        for(auto it = numSet2.begin(); it != numSet2.end(); it++) {
            answer[1].push_back(*it);
        }
        return answer;
    }
};

/*
map
*/